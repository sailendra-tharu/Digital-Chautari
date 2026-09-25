"use client";

import { FormEvent, useState } from "react";
import { z } from "zod";

type Values<S extends z.ZodObject> = z.input<S>;
type FieldName<S extends z.ZodObject> = Extract<keyof Values<S>, string>;
export type FormErrors<S extends z.ZodObject> = Partial<Record<FieldName<S> | "form", string>>;

/** What <Controller> needs to wire one field to the form. */
export type FormControl<S extends z.ZodObject> = {
  values: Values<S>;
  errorFor: (name: FieldName<S>) => string | undefined;
  setValue: <K extends FieldName<S>>(name: K, value: Values<S>[K]) => void;
  touch: (name: FieldName<S>) => void;
};

function firstErrors<S extends z.ZodObject>(error: z.ZodError): FormErrors<S> {
  const { formErrors, fieldErrors } = z.flattenError(error);
  const errors: Record<string, string> = {};
  for (const [name, messages] of Object.entries(fieldErrors as Record<string, string[] | undefined>)) {
    if (messages?.[0]) errors[name] = messages[0];
  }
  if (formErrors[0]) errors.form = formErrors[0];
  return errors as FormErrors<S>;
}

/**
 * Controlled form state validated by a Zod schema.
 * Errors appear once a field is touched (or after a submit attempt) and update live while typing;
 * server errors show until the user edits that field.
 */
export function useFormController<S extends z.ZodObject>(schema: S, initialValues: Values<S>) {
  const [values, setValues] = useState<Values<S>>(initialValues);
  const [touched, setTouched] = useState<Partial<Record<FieldName<S>, boolean>>>({});
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [serverErrors, setServerErrors] = useState<FormErrors<S>>({});

  // Validate on every render — cheap for small forms, and errors never go stale.
  const validation = schema.safeParse(values);
  const clientErrors: FormErrors<S> = validation.success ? {} : firstErrors<S>(validation.error);
  const fieldNames = Object.keys(schema.shape) as FieldName<S>[];

  const control: FormControl<S> = {
    values,
    errorFor: (name) => (touched[name] || submitAttempted ? clientErrors[name] : undefined) ?? serverErrors[name],
    setValue: (name, value) => {
      setValues((current) => ({ ...current, [name]: value }));
      setServerErrors((current) => ({ ...current, [name]: undefined }));
    },
    touch: (name) => setTouched((current) => ({ ...current, [name]: true })),
  };

  /** Validates, focuses the first invalid field, and only calls `onValid` with parsed (trimmed) data. */
  const handleSubmit =
    (onValid: (data: z.output<S>) => void | Promise<void>, onInvalid?: () => void) =>
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setSubmitAttempted(true);
      if (!validation.success) {
        const firstInvalid = fieldNames.find((name) => clientErrors[name]);
        event.currentTarget.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
        onInvalid?.();
        return;
      }
      setServerErrors({});
      await onValid(validation.data);
    };

  const reset = () => {
    setValues(initialValues);
    setTouched({});
    setSubmitAttempted(false);
    setServerErrors({});
  };

  return { control, handleSubmit, reset, setServerErrors, isValid: validation.success };
}

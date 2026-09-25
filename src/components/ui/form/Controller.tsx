"use client";

import type { ReactNode } from "react";
import type { z } from "zod";
import type { FormControl } from "./useFormController";

type FieldName<S extends z.ZodObject> = Extract<keyof z.input<S>, string>;

export type ControllerRenderProps<S extends z.ZodObject, K extends FieldName<S>> = {
  field: {
    name: K;
    value: z.input<S>[K];
    onValueChange: (value: z.input<S>[K]) => void;
    onBlur: () => void;
  };
  fieldState: { error?: string; invalid: boolean };
};

/**
 * Connects one controlled input to a form created with useFormController.
 *
 * <Controller control={control} name="email" render={({ field, fieldState }) => (
 *   <TextField {...field} label="Email" error={fieldState.error} />
 * )} />
 */
export function Controller<S extends z.ZodObject, K extends FieldName<S>>({
  control,
  name,
  render,
}: {
  control: FormControl<S>;
  name: K;
  render: (props: ControllerRenderProps<S, K>) => ReactNode;
}) {
  const error = control.errorFor(name);
  return render({
    field: {
      name,
      value: control.values[name],
      onValueChange: (value) => control.setValue(name, value),
      onBlur: () => control.touch(name),
    },
    fieldState: { error, invalid: Boolean(error) },
  });
}

import type { ComponentPropsWithoutRef } from "react";
import { Text } from "@/components/ui/Text";
import { errorProps, FieldShell } from "./FieldShell";

type TextAreaFieldProps = {
  name: string;
  label: string;
  value: string;
  error?: string;
  /** Shows a live "n/max" counter under the field. */
  maxLength?: number;
  onValueChange: (value: string) => void;
} & Omit<ComponentPropsWithoutRef<"textarea">, "name" | "value" | "onChange" | "maxLength">;

/** Controlled multi-line input with an optional character counter. */
export function TextAreaField({ name, label, value, error, required, maxLength, onValueChange, ...textareaProps }: TextAreaFieldProps) {
  const id = `field-${name}`;
  return (
    <FieldShell
      id={id}
      label={label}
      required={required}
      error={error}
      hint={maxLength ? <Text as="span" variant="caption" className="char-count" aria-live="polite">{value.length}/{maxLength}</Text> : null}
    >
      <textarea
        {...textareaProps}
        id={id}
        name={name}
        value={value}
        required={required}
        maxLength={maxLength}
        onChange={(event) => onValueChange(event.target.value)}
        {...errorProps(id, error)}
      />
    </FieldShell>
  );
}

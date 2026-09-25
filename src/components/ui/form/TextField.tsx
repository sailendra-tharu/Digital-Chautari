import type { ComponentPropsWithoutRef } from "react";
import { errorProps, FieldShell } from "./FieldShell";

type TextFieldProps = {
  name: string;
  label: string;
  value: string;
  error?: string;
  onValueChange: (value: string) => void;
} & Omit<ComponentPropsWithoutRef<"input">, "name" | "value" | "onChange">;

/** Controlled single-line input. */
export function TextField({ name, label, value, error, required, onValueChange, ...inputProps }: TextFieldProps) {
  const id = `field-${name}`;
  return (
    <FieldShell id={id} label={label} required={required} error={error}>
      <input
        {...inputProps}
        id={id}
        name={name}
        value={value}
        required={required}
        onChange={(event) => onValueChange(event.target.value)}
        {...errorProps(id, error)}
      />
    </FieldShell>
  );
}

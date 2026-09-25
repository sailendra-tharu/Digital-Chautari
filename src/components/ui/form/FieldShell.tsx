import type { ReactNode } from "react";
import { Text } from "@/components/ui/Text";

/** Label + control + error message, shared by all form fields. */
export function FieldShell({
  id,
  label,
  required,
  error,
  hint,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  hint?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="field">
      <label htmlFor={id}>
        {label} {required ? <span className="required" aria-hidden="true">*</span> : null}
      </label>
      {children}
      {hint}
      {error ? <Text as="span" variant="caption" id={`${id}-error`} className="field-error" role="alert">{error}</Text> : null}
    </div>
  );
}

/** Props that wire a control to its FieldShell error for assistive tech. */
export function errorProps(id: string, error?: string) {
  return { "aria-invalid": Boolean(error), "aria-describedby": error ? `${id}-error` : undefined };
}

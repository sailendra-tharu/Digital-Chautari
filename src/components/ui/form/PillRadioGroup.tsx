import { Text } from "@/components/ui/Text";

type PillRadioGroupProps<T extends string> = {
  name: string;
  label: string;
  options: readonly T[];
  value: T;
  error?: string;
  required?: boolean;
  onValueChange: (value: T) => void;
  onBlur?: () => void;
};

/** Controlled radio group rendered as selectable pills. */
export function PillRadioGroup<T extends string>({ name, label, options, value, error, required, onValueChange, onBlur }: PillRadioGroupProps<T>) {
  const errorId = `field-${name}-error`;
  return (
    <fieldset aria-invalid={Boolean(error)} aria-describedby={error ? errorId : undefined}>
      <legend>
        {label} {required ? <span className="required" aria-hidden="true">*</span> : null}
      </legend>
      <div className="project-pills">
        {options.map((option) => (
          <label key={option}>
            <input
              type="radio"
              name={name}
              value={option}
              checked={value === option}
              onChange={() => onValueChange(option)}
              onBlur={onBlur}
            />
            {option}
          </label>
        ))}
      </div>
      {error ? <Text as="span" variant="caption" id={errorId} className="field-error" role="alert">{error}</Text> : null}
    </fieldset>
  );
}

import { z } from "zod";

export const PROJECT_TYPES = ["Web Development", "Mobile App", "UI/UX Design", "Digital Marketing", "Content Creation", "Other"] as const;

export const MESSAGE_MAX_LENGTH = 1000;

/** Single source of truth for contact form rules — used by the form (client) and /api/contact (server). */
export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name.")
    .max(100, "Name must be 100 characters or fewer."),
  email: z
    .string()
    .trim()
    .min(1, "Please enter your email address.")
    .max(200, "Email must be 200 characters or fewer.")
    .pipe(z.email("Please enter a valid email address.")),
  subject: z
    .string()
    .trim()
    .min(3, "Please add a short subject.")
    .max(150, "Subject must be 150 characters or fewer."),
  projectType: z.enum(PROJECT_TYPES, { error: "Please choose a project type." }),
  message: z
    .string()
    .trim()
    .min(10, "Please tell us a little more (at least 10 characters).")
    .max(MESSAGE_MAX_LENGTH, `Please keep your message under ${MESSAGE_MAX_LENGTH} characters.`),
});

/** Raw form values (before trimming). */
export type ContactInput = z.input<typeof contactSchema>;
/** Validated, trimmed payload. */
export type ContactPayload = z.output<typeof contactSchema>;
export type ContactField = keyof ContactPayload;
export type ContactErrors = Partial<Record<ContactField | "form", string>>;

export const CONTACT_FIELDS = Object.keys(contactSchema.shape) as ContactField[];

/** First error message per field, e.g. { email: "Please enter a valid email address." }. */
export function toContactErrors(error: z.ZodError): ContactErrors {
  const { formErrors, fieldErrors } = z.flattenError(error);
  const errors: ContactErrors = {};
  for (const field of CONTACT_FIELDS) {
    const message = (fieldErrors as Partial<Record<ContactField, string[]>>)[field]?.[0];
    if (message) errors[field] = message;
  }
  if (formErrors[0]) errors.form = formErrors[0];
  return errors;
}

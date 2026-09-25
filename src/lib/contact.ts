export const PROJECT_TYPES = ["Web Development", "Mobile App", "UI/UX Design", "Digital Marketing", "Content Creation", "Other"] as const;

export const MESSAGE_MAX_LENGTH = 1000;

export type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  projectType: (typeof PROJECT_TYPES)[number];
  message: string;
};

export type ContactErrors = Partial<Record<keyof ContactPayload | "form", string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContact(body: unknown): { data?: ContactPayload; errors?: ContactErrors } {
  if (!body || typeof body !== "object") return { errors: { form: "Invalid request body." } };
  const input = body as Record<string, unknown>;
  const field = (key: string) => (typeof input[key] === "string" ? (input[key] as string).trim() : "");

  const data = {
    name: field("name"),
    email: field("email"),
    subject: field("subject"),
    projectType: field("projectType"),
    message: field("message"),
  };
  const errors: ContactErrors = {};

  if (data.name.length < 2 || data.name.length > 100) errors.name = "Please enter your name.";
  if (!EMAIL_PATTERN.test(data.email) || data.email.length > 200) errors.email = "Please enter a valid email address.";
  if (data.subject.length < 3 || data.subject.length > 150) errors.subject = "Please add a short subject.";
  if (!PROJECT_TYPES.includes(data.projectType as ContactPayload["projectType"])) errors.projectType = "Please choose a project type.";
  if (data.message.length < 10) errors.message = "Please tell us a little more (at least 10 characters).";
  else if (data.message.length > MESSAGE_MAX_LENGTH) errors.message = `Please keep your message under ${MESSAGE_MAX_LENGTH} characters.`;

  return Object.keys(errors).length ? { errors } : { data: data as ContactPayload };
}

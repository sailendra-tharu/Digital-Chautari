import { describe, expect, it } from "vitest";
import { contactSchema, toContactErrors } from "./contact";

const validContact = {
  name: "Sailendra Tharu",
  email: "sailendra@example.com",
  subject: "Website project",
  projectType: "Web Development" as const,
  message: "I would like to discuss a new website project.",
};

describe("contactSchema", () => {
  it("trims valid input", () => {
    const result = contactSchema.parse({ ...validContact, name: "  Sailendra Tharu  " });
    expect(result.name).toBe("Sailendra Tharu");
  });

  it("returns field-level errors for invalid input", () => {
    const result = contactSchema.safeParse({ ...validContact, email: "invalid", message: "short" });
    expect(result.success).toBe(false);
    if (result.success) return;

    const errors = toContactErrors(result.error);
    expect(errors.email).toBe("Please enter a valid email address.");
    expect(errors.message).toContain("at least 10 characters");
  });
});

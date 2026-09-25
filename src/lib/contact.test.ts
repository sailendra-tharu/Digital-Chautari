import { describe, expect, it } from "vitest";
import { POST } from "@/app/api/contact/route";
import { MESSAGE_MAX_LENGTH, contactSchema } from "./contact";

const valid = {
  name: "Aarati Shrestha",
  email: "aarati@example.com",
  subject: "Project inquiry",
  projectType: "Web Development",
  message: "We would like a new website for our studio.",
};

const post = (body: unknown) =>
  POST(new Request("http://localhost/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: typeof body === "string" ? body : JSON.stringify(body),
  }));

describe("contactSchema", () => {
  it("accepts a valid submission and trims whitespace", () => {
    const result = contactSchema.safeParse({ ...valid, name: "  Aarati  " });
    expect(result.success).toBe(true);
    expect(result.data?.name).toBe("Aarati");
  });

  it("rejects an invalid email", () => {
    const result = contactSchema.safeParse({ ...valid, email: "not-an-email" });
    expect(result.error?.issues[0]?.message).toBe("Please enter a valid email address.");
  });

  it("rejects an unknown project type", () => {
    expect(contactSchema.safeParse({ ...valid, projectType: "Gardening" }).success).toBe(false);
  });

  it("rejects messages that are too short or too long", () => {
    expect(contactSchema.safeParse({ ...valid, message: "Hi" }).success).toBe(false);
    expect(contactSchema.safeParse({ ...valid, message: "a".repeat(MESSAGE_MAX_LENGTH + 1) }).success).toBe(false);
  });
});

describe("POST /api/contact", () => {
  it("returns 200 for a valid submission", async () => {
    const response = await post(valid);
    expect(response.status).toBe(200);
    expect(await response.json()).toMatchObject({ success: true });
  });

  it("returns 400 with the first validation message", async () => {
    const response = await post({ ...valid, name: "" });
    expect(response.status).toBe(400);
    expect(await response.json()).toEqual({ error: "Please enter your name." });
  });

  it("returns 400 for a malformed JSON body", async () => {
    const response = await post("{not json");
    expect(response.status).toBe(400);
    expect(await response.json()).toEqual({ error: "Invalid request payload." });
  });
});

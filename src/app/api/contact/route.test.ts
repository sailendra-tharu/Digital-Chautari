import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { POST } from "./route";

const validContact = {
  name: "Sailendra Tharu",
  email: "sailendra@example.com",
  subject: "Website project",
  projectType: "Web Development",
  message: "I would like to discuss a new website project.",
};

function requestWith(body: unknown) {
  return new Request("http://localhost:3000/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}

describe("POST /api/contact", () => {
  beforeEach(() => {
    process.env.EMAILJS_SERVICE_ID = "service_test";
    process.env.EMAILJS_TEMPLATE_ID = "template_test";
    process.env.EMAILJS_PUBLIC_KEY = "public_test";
    process.env.EMAILJS_PRIVATE_KEY = "private_test";
    process.env.CONTACT_EMAIL_TO = "sailendradastharu2000@gmail.com";
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    delete process.env.EMAILJS_SERVICE_ID;
    delete process.env.EMAILJS_TEMPLATE_ID;
    delete process.env.EMAILJS_PUBLIC_KEY;
    delete process.env.EMAILJS_PUBLIC_KEY;
    delete process.env.CONTACT_EMAIL_TO;
  });

  it("rejects invalid input before calling EmailJS", async () => {
    const fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);

    const response = await POST(requestWith({ ...validContact, email: "invalid" }));
    const body = await response.json();

    expect(response.status).toBe(422);
    expect(body.errors.email).toBe("Please enter a valid email address.");
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("returns a configuration error when EmailJS is not configured", async () => {
    delete process.env.EMAILJS_PUBLIC_KEY;

    const response = await POST(requestWith(validContact));

    expect(response.status).toBe(503);
    expect((await response.json()).errors.form).toContain("not configured");
  });

  it("forwards validated fields to EmailJS", async () => {
    const fetchMock = vi.fn().mockResolvedValue(new Response("OK", { status: 200 }));
    vi.stubGlobal("fetch", fetchMock);

    const response = await POST(requestWith(validContact));
    const [, options] = fetchMock.mock.calls[0] as [string, RequestInit];
    const sent = JSON.parse(String(options.body));

    expect(response.status).toBe(200);
    expect((await response.json()).success).toBe(true);
    expect(fetchMock).toHaveBeenCalledWith(
      "https://api.emailjs.com/api/v1.0/email/send",
      expect.objectContaining({ method: "POST" }),
    );
    expect(sent.template_params).toMatchObject({
      to_email: "sailendradastharu2000@gmail.com",
      email: validContact.email,
      subject: validContact.subject,
      project_type: validContact.projectType,
      message: validContact.message,
    });
  });

  it("returns a provider error when EmailJS fails", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue(new Response("failed", { status: 500 })));

    const response = await POST(requestWith(validContact));

    expect(response.status).toBe(502);
    expect((await response.json()).errors.form).toContain("could not send");
  });
});

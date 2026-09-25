"use client";

import { Check, LoaderCircle, Send } from "lucide-react";
import { FormEvent, ReactNode, useState } from "react";
import { Kicker } from "@/components/ui/Kicker";
import { Text } from "@/components/ui/Text";
import { MESSAGE_MAX_LENGTH, PROJECT_TYPES, type ContactErrors } from "@/lib/contact";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<ContactErrors>({});
  const [notice, setNotice] = useState("");
  const [messageLength, setMessageLength] = useState(0);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");
    setErrors({});
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const result = await response.json();
      if (!response.ok) {
        setErrors(result.errors ?? {});
        setNotice(result.errors?.form ?? "Please check the highlighted fields.");
        setStatus("error");
        return;
      }
      form.reset();
      setMessageLength(0);
      setNotice(result.message);
      setStatus("sent");
    } catch {
      setNotice("Something went wrong. Please try again or email us directly.");
      setStatus("error");
    }
  }

  const fieldError = (name: keyof ContactErrors) =>
    errors[name] ? <Text as="span" variant="caption" className="field-error">{errors[name]}</Text> : null;

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-form-header">
        <Kicker>Get in touch</Kicker>
        <Text variant="h2">Send us a message</Text>
        <Text variant="caption">Fill out the form below and we&apos;ll get back to you as soon as possible.</Text>
      </div>

      <div className="form-grid">
        <Field label="Name" error={fieldError("name")}>
          <input required name="name" autoComplete="name" placeholder="Your name" aria-invalid={!!errors.name} />
        </Field>
        <Field label="Email" error={fieldError("email")}>
          <input required type="email" name="email" autoComplete="email" placeholder="you@company.com" aria-invalid={!!errors.email} />
        </Field>
      </div>

      <Field label="Subject" error={fieldError("subject")}>
        <input required name="subject" placeholder="e.g. Project inquiry, Partnership, Support…" aria-invalid={!!errors.subject} />
      </Field>

      <fieldset>
        <legend>Project Type <span className="required" aria-hidden="true">*</span></legend>
        <div className="project-pills">
          {PROJECT_TYPES.map((type, index) => (
            <label key={type}>
              <input type="radio" name="projectType" value={type} defaultChecked={index === 0} />
              {type}
            </label>
          ))}
        </div>
        {fieldError("projectType")}
      </fieldset>

      <Field label="Message" error={fieldError("message")}>
        <textarea
          required
          name="message"
          rows={5}
          maxLength={MESSAGE_MAX_LENGTH}
          placeholder="Tell us about your project, goals, and any other details…"
          aria-invalid={!!errors.message}
          onChange={(event) => setMessageLength(event.currentTarget.value.length)}
        />
        <Text as="span" variant="caption" className="char-count" aria-live="polite">{messageLength}/{MESSAGE_MAX_LENGTH}</Text>
      </Field>

      <button className="button button-primary button-block" type="submit" disabled={status === "sending"}>
        {status === "sending" ? <LoaderCircle className="spin" size={16} aria-hidden="true" />
          : status === "sent" ? <Check size={16} aria-hidden="true" />
          : <Send size={16} aria-hidden="true" />}
        {status === "sending" ? "Sending…" : status === "sent" ? "Message sent" : "Send Message"}
      </button>
      <Text as="span" variant="caption" className={`form-notice ${status === "error" ? "is-error" : ""}`} role="status" aria-live="polite">
        {status === "sent" || status === "error" ? notice : ""}
      </Text>
    </form>
  );
}

function Field({ label, error, children }: { label: string; error: ReactNode; children: ReactNode }) {
  return (
    <label className="field">
      <span>{label} <span className="required" aria-hidden="true">*</span></span>
      {children}
      {error}
    </label>
  );
}

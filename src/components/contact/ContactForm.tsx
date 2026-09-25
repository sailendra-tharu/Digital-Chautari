"use client";

import { Check, LoaderCircle, Send } from "lucide-react";
import { useCallback } from "react";
import { Controller } from "@/components/ui/form/Controller";
import { PillRadioGroup } from "@/components/ui/form/PillRadioGroup";
import { TextAreaField } from "@/components/ui/form/TextAreaField";
import { TextField } from "@/components/ui/form/TextField";
import { useFormController } from "@/components/ui/form/useFormController";
import { Kicker } from "@/components/ui/Kicker";
import { Text } from "@/components/ui/Text";
import { Toast } from "@/components/ui/Toast";
import { useContactSubmit } from "@/hooks/useContactSubmit";
import { MESSAGE_MAX_LENGTH, PROJECT_TYPES, contactSchema, type ContactErrors, type ContactInput } from "@/lib/contact";

const INITIAL_VALUES: ContactInput = { name: "", email: "", subject: "", projectType: PROJECT_TYPES[0], message: "" };

export function ContactForm() {
  const { control, handleSubmit, reset, setServerErrors } = useFormController(contactSchema, INITIAL_VALUES);
  const handleSuccess = useCallback(() => {
    reset();
  }, [reset]);

  const handleError = useCallback((errors: ContactErrors) => {
    setServerErrors(errors);
  }, [setServerErrors]);

  const { send, status, notice, clearStatus } = useContactSubmit({
    onSuccess: handleSuccess,
    onError: handleError,
  });

  const clearStatusAndToast = clearStatus;

  return (
    <>
      <form
        className="contact-form"
        onSubmit={handleSubmit(async (data) => {
          await send(data);
        }, clearStatusAndToast)}
        // Any edit after a send clears the "Message sent" state.
        onChange={() => {
          if (status === "sent") clearStatusAndToast();
        }}
        noValidate
      >
        <div className="contact-form-header">
          <Kicker>Get in touch</Kicker>
          <Text variant="h2">Send us a message</Text>
          <Text variant="caption">Fill out the form below and we&apos;ll get back to you as soon as possible.</Text>
        </div>

        <div className="form-grid">
          <Controller
            control={control}
            name="name"
            render={({ field, fieldState }) => (
              <TextField {...field} label="Name" required autoComplete="name" placeholder="Your name" error={fieldState.error} />
            )}
          />
          <Controller
            control={control}
            name="email"
            render={({ field, fieldState }) => (
              <TextField {...field} label="Email" type="email" required autoComplete="email" placeholder="you@company.com" error={fieldState.error} />
            )}
          />
        </div>

        <Controller
          control={control}
          name="subject"
          render={({ field, fieldState }) => (
            <TextField {...field} label="Subject" required placeholder="e.g. Project inquiry, Partnership, Support…" error={fieldState.error} />
          )}
        />

        <Controller
          control={control}
          name="projectType"
          render={({ field, fieldState }) => (
            <PillRadioGroup {...field} label="Project Type" required options={PROJECT_TYPES} error={fieldState.error} />
          )}
        />

        <Controller
          control={control}
          name="message"
          render={({ field, fieldState }) => (
            <TextAreaField
              {...field}
              label="Message"
              required
              rows={5}
              maxLength={MESSAGE_MAX_LENGTH}
              placeholder="Tell us about your project, goals, and any other details…"
              error={fieldState.error}
            />
          )}
        />

        <button className="button button-primary button-block" type="submit" disabled={status === "sending"}>
          {status === "sending" ? <LoaderCircle className="spin" size={16} aria-hidden="true" />
            : status === "sent" ? <Check size={16} aria-hidden="true" />
            : <Send size={16} aria-hidden="true" />}
          {status === "sending" ? "Sending…" : status === "sent" ? "Message sent" : "Send Message"}
        </button>
        <Text as="span" variant="caption" className={`form-notice ${status === "error" ? "is-error" : ""}`} role="status" aria-live="polite">
          {status === "error" ? notice : ""}
        </Text>
      </form>
      <Toast message={notice} open={status === "sent"} onClose={clearStatus} />
    </>
  );
}

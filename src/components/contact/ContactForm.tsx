"use client";

import { useEffect } from "react";
import { Send } from "lucide-react";
import { Controller } from "@/components/ui/form/Controller";
import { PillRadioGroup } from "@/components/ui/form/PillRadioGroup";
import { TextAreaField } from "@/components/ui/form/TextAreaField";
import { TextField } from "@/components/ui/form/TextField";
import { useFormController } from "@/components/ui/form/useFormController";
import { Kicker } from "@/components/ui/Kicker";
import { Text } from "@/components/ui/Text";
import { Toast } from "@/components/ui/Toast";
import { getErrorMessage, useSendContact } from "@/hooks/useContactSubmit";
import { MESSAGE_MAX_LENGTH, PROJECT_TYPES, contactSchema } from "@/lib/contact";

const initialValues = {
  name: "",
  email: "",
  subject: "",
  projectType: PROJECT_TYPES[0],
  message: "",
} as const;

export function ContactForm() {
  const mutation = useSendContact();
  const { control, handleSubmit, reset, setServerErrors } = useFormController(contactSchema, initialValues);

  useEffect(() => {
    if (mutation.isError) {
      setServerErrors({ form: getErrorMessage(mutation.error) });
    }
  }, [mutation.error, mutation.isError, setServerErrors]);

  const toast = mutation.isSuccess
    ? {
        title: "Message sent",
        variant: "success" as const,
        message: mutation.data?.message || "Thanks! Your message has been sent successfully.",
      }
    : mutation.isError
      ? {
          title: "Unable to send",
          variant: "error" as const,
          message: getErrorMessage(mutation.error),
        }
      : null;

  return (
    <>
      <form
        className="contact-form"
        noValidate
        onSubmit={handleSubmit(
          async (data) => {
            await mutation.mutateAsync(data);
            reset();
          },
          () => undefined,
        )}
      >
        <div className="contact-form-header">
          <Kicker>Get in touch</Kicker>

          <Text variant="h2">Send us a message</Text>

          <Text variant="caption">
            Fill out the form below and we&apos;ll get back to you as soon as
            possible.
          </Text>
        </div>

        <div className="form-grid">
          <Controller
            control={control}
            name="name"
            render={({ field, fieldState }) => (
              <TextField
                name={field.name}
                label="Name"
                value={field.value}
                error={fieldState.error}
                onValueChange={field.onValueChange}
                onBlur={field.onBlur}
                placeholder="Your name"
                autoComplete="name"
                required
              />
            )}
          />

          <Controller
            control={control}
            name="email"
            render={({ field, fieldState }) => (
              <TextField
                name={field.name}
                label="Email"
                type="email"
                value={field.value}
                error={fieldState.error}
                onValueChange={field.onValueChange}
                onBlur={field.onBlur}
                placeholder="you@company.com"
                autoComplete="email"
                required
              />
            )}
          />
        </div>

        <Controller
          control={control}
          name="subject"
          render={({ field, fieldState }) => (
            <TextField
              name={field.name}
              label="Subject"
              value={field.value}
              error={fieldState.error}
              onValueChange={field.onValueChange}
              onBlur={field.onBlur}
              placeholder="e.g. Project inquiry, Partnership, Support…"
              required
            />
          )}
        />

        <Controller
          control={control}
          name="projectType"
          render={({ field, fieldState }) => (
            <PillRadioGroup
              name={field.name}
              label="Project Type"
              value={field.value}
              options={PROJECT_TYPES}
              error={fieldState.error}
              required
              onValueChange={field.onValueChange}
              onBlur={field.onBlur}
            />
          )}
        />

        <Controller
          control={control}
          name="message"
          render={({ field, fieldState }) => (
            <TextAreaField
              name={field.name}
              label="Message"
              value={field.value}
              error={fieldState.error}
              onValueChange={field.onValueChange}
              onBlur={field.onBlur}
              rows={5}
              maxLength={MESSAGE_MAX_LENGTH}
              placeholder="Tell us about your project, goals, and any other details…"
              required
            />
          )}
        />

        <button
          className="button button-primary button-block"
          type="submit"
          disabled={mutation.isPending}
        >
          <Send size={16} aria-hidden="true" />
          {mutation.isPending ? "Sending..." : "Send Message"}
        </button>
      </form>

      {toast ? (
        <Toast
          message={toast.message}
          open={true}
          title={toast.title}
          variant={toast.variant}
          onClose={() => mutation.reset()}
        />
      ) : null}
    </>
  );
}

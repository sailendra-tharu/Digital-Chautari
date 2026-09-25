"use client";

import { useCallback, useState } from "react";
import type { ContactErrors, ContactPayload } from "@/lib/contact";
import { ContactApiError, sendContact, type ContactResponse } from "@/lib/api/contact";

export type ContactSubmitStatus = "idle" | "sending" | "sent" | "error";

type UseContactSubmitOptions = {
  onSuccess?: (response: ContactResponse) => void;
  onError?: (errors: ContactErrors) => void;
};

export function useContactSubmit({ onSuccess, onError }: UseContactSubmitOptions = {}) {
  const [status, setStatus] = useState<ContactSubmitStatus>("idle");
  const [notice, setNotice] = useState("");

  const clearStatus = useCallback(() => {
    setStatus("idle");
    setNotice("");
  }, []);

  const send = useCallback(async (data: ContactPayload) => {
    setStatus("sending");
    setNotice("");

    try {
      const response = await sendContact(data);
      setStatus("sent");
      setNotice(response.message);
      onSuccess?.(response);
      return response;
    } catch (error) {
      const errors = error instanceof ContactApiError ? error.errors : {};
      onError?.(errors);
      setNotice(error instanceof ContactApiError
        ? error.message
        : "Something went wrong. Please try again or email us directly.");
      setStatus("error");
      return null;
    }
  }, [onError, onSuccess]);

  return { send, status, notice, clearStatus };
}

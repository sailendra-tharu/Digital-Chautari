"use client";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { sendContact, type ContactPayload, type ContactResponse } from "@/lib/api/contact";

export function useSendContact() {
  return useMutation<ContactResponse, Error, ContactPayload>({
    mutationFn: sendContact,
    retry: false,
  });
}

export function getErrorMessage(error: unknown): string {
  if (axios.isAxiosError(error)) {
    const data = error.response?.data as { errors?: { form?: string }; error?: string; message?: string } | undefined;
    return data?.errors?.form ?? data?.error ?? data?.message ?? "Something went wrong. Please try again.";
  }
  return error instanceof Error ? error.message : "Something went wrong. Please try again.";
}
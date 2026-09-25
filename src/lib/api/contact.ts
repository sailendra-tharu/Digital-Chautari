import axios from "axios";
import type { ContactErrors, ContactPayload } from "@/lib/contact";
import api from "./client";

export type ContactResponse = {
  success: true;
  message: string;
};

type ContactErrorResponse = {
  errors?: ContactErrors;
  message?: string;
};

export class ContactApiError extends Error {
  constructor(
    public readonly errors: ContactErrors = {},
    public readonly status?: number,
  ) {
    super(errors.form ?? "Please check the highlighted fields.");
    this.name = "ContactApiError";
  }
}

export async function sendContact(data: ContactPayload): Promise<ContactResponse> {
  try {
    const response = await api.post<ContactResponse>("/api/contact", data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError<ContactErrorResponse>(error)) {
      throw new ContactApiError(error.response?.data?.errors ?? {}, error.response?.status);
    }
    throw error;
  }
}

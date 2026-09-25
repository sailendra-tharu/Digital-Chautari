import api from "@/lib/api/client";
import type { ContactFormValue } from "@/lib/contact";

export type ContactPayload = ContactFormValue;

export type ContactResponse = {
  success: boolean;
  message: string;
};

export async function sendContact(payload: ContactPayload): Promise<ContactResponse> {
  const { data } = await api.post<ContactResponse>("/contact", payload);
  return data;
}
import { NextResponse } from "next/server";
import { contactSchema, toContactErrors } from "@/lib/contact";

const EMAILJS_ENDPOINT = "https://api.emailjs.com/api/v1.0/email/send";

function errorResponse(message: string, status: number) {
  return NextResponse.json({ success: false, errors: { form: message } }, { status });
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return errorResponse("Please send a valid request.", 400);
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { success: false, errors: toContactErrors(parsed.error) },
      { status: 422 },
    );
  }

  const serviceId = process.env.EMAILJS_SERVICE_ID;
  const templateId = process.env.EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.EMAILJS_PUBLIC_KEY;
  const privateKey = process.env.EMAILJS_PRIVATE_KEY;
  const recipient = process.env.CONTACT_EMAIL_TO;

  if (!serviceId || !templateId || !publicKey || !recipient) {
    return errorResponse("The contact service is not configured yet.", 503);
  }

  const payload = parsed.data;
  const emailRequest: Record<string, unknown> = {
    service_id: serviceId,
    template_id: templateId,
    user_id: publicKey,
    template_params: {
      to_email: recipient,
      name: payload.name,
      email: payload.email,
      reply_to: payload.email,
      subject: payload.subject,
      project_type: payload.projectType,
      message: payload.message,
    },
  };

  if (privateKey) emailRequest.accessToken = privateKey;

  try {
    const response = await fetch(EMAILJS_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(emailRequest),
    });

    if (!response.ok) {
      return errorResponse("We could not send your message right now. Please try again later.", 502);
    }
  } catch {
    return errorResponse("We could not send your message right now. Please try again later.", 502);
  }

  return NextResponse.json({
    success: true,
    message: "Thanks for reaching out. We will get back to you soon.",
  });
}

import { NextResponse } from "next/server";
import { validateContact } from "@/lib/contact";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, errors: { form: "Invalid JSON." } }, { status: 400 });
  }

  const { data, errors } = validateContact(body);
  if (!data) return NextResponse.json({ ok: false, errors }, { status: 422 });

  // Hook up email delivery or persistence here (e.g. Resend, a database).
  console.info("[contact] new enquiry", { ...data, receivedAt: new Date().toISOString() });

  return NextResponse.json({ ok: true, message: "Thanks — we'll be in touch within 24 hours." }, { status: 201 });
}

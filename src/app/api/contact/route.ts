import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/contact";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          error: parsed.error.issues[0]?.message ?? "Please check the form and try again.",
        },
        { status: 400 },
      );
    }

    const { name, email, subject, projectType, message } = parsed.data;

    console.log("New contact submission:", {
      name,
      email,
      subject,
      projectType,
      message,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Thanks! We'll reply within 24 hours.",
      },
      { status: 200 },
    );
  } catch {
    return NextResponse.json(
      { error: "Invalid request payload." },
      { status: 400 },
    );
  }
}
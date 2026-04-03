import { EmailTemplate } from "@/components/email-template";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {

  const body = await req.json();
  console.log(body)

  // Destructure the body of the request
  const {
    name,
    email,
    companyName,
    phone,
    selectedService,
    message
  } = body;

  // Check if the required fields are present
  if (!name || !email) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  // resend declaration with API key as parameter
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    // Generate the email template with the provided props
    const emailContent = EmailTemplate({
      name,
      email,
      companyName,
      phone,
      selectedService,
      message
    });

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: "Devunity <prospects@devunity.be>", // Sender email
      to: "info@devunity.be", // Recipient email
      subject: "Message from DevUnity website",
      react: emailContent as React.ReactElement, // Pass the email content with all data
    });

    if (error) {
      return NextResponse.json(
        { message: "Email sending failed", error },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "Email sent successfully", data },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send email", error },
      { status: 500 }
    );
  }
}

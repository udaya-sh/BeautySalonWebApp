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
    phone,
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
    const emailContent = await EmailTemplate({
      name,
      email,
      phone,
      message
    });

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: "Maison de Beauté <prospects@devunity.be>", // Sender email
      to: "drilonalia11@gmail.com", // Recipient email
      subject: "Message from Maison de Beauté website",
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

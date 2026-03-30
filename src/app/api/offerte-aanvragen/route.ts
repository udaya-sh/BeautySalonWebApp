import { EmailTemplate } from "@/components/email-template";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  console.log("here on post");

  const body = await req.json();
  console.log(body);

  // Destructure the body of the request
  const {
    naam,
    email,
    postcode,
    telefoonnummer,
    dakrenovatie,
    gevelisolatie,
    zonnepaneleninstallatie,
  } = body;

  // Check if the required fields are present
  if (!naam || !email) {
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
      naam,
      email,
      postcode,
      telefoonnummer,
      dakrenovatie,
      gevelisolatie,
      zonnepaneleninstallatie,
    });

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: "Vertilux <onboarding@resend.dev>", // Sender email
      to: "info@vertilux.be", // Recipient email
      subject: "Bericht van Vertilux website",
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

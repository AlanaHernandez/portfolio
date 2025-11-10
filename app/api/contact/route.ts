import { NextRequest, NextResponse } from "next/server";
import { contactInfo } from "@/lib/data";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Option 1: Using Resend (recommended)
    // Uncomment and configure if using Resend
    /*
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    if (!RESEND_API_KEY) {
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    const resend = require("resend").Resend({ apiKey: RESEND_API_KEY });

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // Update with your verified domain
      to: [contactInfo.email],
      replyTo: email,
      subject: `Portfolio Contact: ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }
    */

    // Option 2: Using Nodemailer with Gmail/SMTP
    // Uncomment and configure if using Nodemailer
    /*
    const nodemailer = require("nodemailer");
    
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: contactInfo.email,
      replyTo: email,
      subject: `Portfolio Contact: ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });
    */

    // Option 3: Using Formspree (easiest - no backend setup needed)
    // Update ContactForm.tsx to use Formspree endpoint directly
    // See instructions in README

    // For now, log the submission (remove in production)
    console.log("Contact form submission:", { name, email, message });

    // Return success (you'll need to configure an email service above)
    return NextResponse.json(
      { message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}


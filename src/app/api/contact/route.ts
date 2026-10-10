import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, projectType, features, budget, timeline, notes, message } = body;

    // Validation
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json(
        { error: "Please enter your name." },
        { status: 400 }
      );
    }

    if (
      !email ||
      typeof email !== "string" ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
    ) {
      return NextResponse.json(
        { error: "Please enter a valid email address so I can reply." },
        { status: 400 }
      );
    }

    const compiledMessage =
      message ||
      `Project Type: ${projectType || "Not specified"}\n` +
      `Features: ${features || "None selected"}\n` +
      `Budget Range: ${budget || "Not specified"}\n` +
      `Timeline: ${timeline || "Not specified"}\n\n` +
      `Additional Notes:\n${notes || "None provided"}`;

    const resendApiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.CONTACT_EMAIL || "yacine.silem.dev@gmail.com";

    if (resendApiKey) {
      try {
        const resendResponse = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: "Portfolio Inquiry <onboarding@resend.dev>",
            to: recipientEmail,
            subject: `[Project Inquiry] ${name} - ${projectType || "New Inquiry"} (${budget || "Budget flexible"})`,
            text: `Client Name: ${name}\nClient Email: ${email}\n\n${compiledMessage}`,
          }),
        });

        if (!resendResponse.ok) {
          console.warn("Resend API returned non-200, logged in fallback mode.");
        }
      } catch (sendError) {
        console.warn("Failed to send via Resend API:", sendError);
      }
    } else {
      console.log("=== [PORTFOLIO INQUIRY SUBMISSION] ===");
      console.log(`From: ${name} <${email}>`);
      console.log(`Project Type: ${projectType || "Not specified"}`);
      console.log(`Features: ${features || "None selected"}`);
      console.log(`Budget Range: ${budget || "Not specified"}`);
      console.log(`Timeline: ${timeline || "Not specified"}`);
      console.log(`Notes: ${notes || "None"}`);
      console.log("======================================");
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your inquiry has been received. I will review it and reply within 24 to 48 hours.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}

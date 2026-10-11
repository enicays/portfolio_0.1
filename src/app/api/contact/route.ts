import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      name,
      email,
      projectType,
      features,
      budget,
      timeline,
      notes,
    } = body;

    // Strict input validation
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

    const clientName = name.trim();
    const clientEmail = email.trim();
    const selectedType = projectType || "Not specified";
    const selectedFeatures = Array.isArray(features)
      ? features.join(", ")
      : typeof features === "string" && features
      ? features
      : "None selected";
    const selectedBudget = budget || "Not specified";
    const selectedTimeline = timeline || "Not specified";
    const additionalNotes = notes && typeof notes === "string" ? notes.trim() : "None";

    const resendApiKey = process.env.RESEND_API_KEY;
    const recipientEmail =
      process.env.CONTACT_EMAIL || "yacine.silem.dev@gmail.com";

    if (!resendApiKey) {
      console.warn("RESEND_API_KEY is not defined. Email logged locally in fallback mode.");
      console.log({
        clientName,
        clientEmail,
        selectedType,
        selectedFeatures,
        selectedBudget,
        selectedTimeline,
        additionalNotes,
      });

      return NextResponse.json({
        success: true,
        message: "Inquiry received in local test mode.",
      });
    }

    // Modern styled HTML email with clean editorial layout and direct Reply-To
    const htmlEmail = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f7f6f4; margin: 0; padding: 24px; color: #1a1614; }
          .container { max-width: 580px; margin: 0 auto; background: #ffffff; border: 1px solid #e5dfd5; border-radius: 16px; overflow: hidden; }
          .header { background: #1a1614; padding: 24px 28px; color: #f2ede4; }
          .header h1 { margin: 0; font-size: 20px; font-weight: 700; letter-spacing: -0.01em; }
          .header p { margin: 6px 0 0; font-size: 13px; color: #a8a29e; }
          .content { padding: 28px; }
          .row { margin-bottom: 16px; padding-bottom: 14px; border-bottom: 1px solid #f0ece6; }
          .label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; font-weight: 700; color: #6b625a; margin-bottom: 4px; }
          .value { font-size: 15px; color: #1a1614; line-height: 1.4; font-weight: 500; }
          .badge { display: inline-block; padding: 3px 10px; background: #f4ede4; border: 1px solid #e2dad0; border-radius: 8px; font-size: 12px; font-weight: 600; color: #e8341c; }
          .notes-box { background: #faf8f5; border: 1px solid #e8e2d8; border-radius: 10px; padding: 14px 16px; font-size: 14px; line-height: 1.5; color: #2c2825; white-space: pre-wrap; }
          .footer { padding: 20px 28px; background: #faf8f5; border-top: 1px solid #e5dfd5; text-align: center; }
          .reply-btn { display: inline-block; padding: 12px 24px; background: #e8341c; color: #ffffff !important; text-decoration: none; border-radius: 10px; font-weight: 700; font-size: 14px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Free Quote Request</h1>
            <p>Submitted via your portfolio quote request form</p>
          </div>
          <div class="content">
            <div class="row">
              <div class="label">Client Name</div>
              <div class="value">${clientName}</div>
            </div>
            <div class="row">
              <div class="label">Client Email</div>
              <div class="value"><a href="mailto:${clientEmail}" style="color: #e8341c; text-decoration: none;">${clientEmail}</a></div>
            </div>
            <div class="row">
              <div class="label">Project Type</div>
              <div class="value"><span class="badge">${selectedType}</span></div>
            </div>
            <div class="row">
              <div class="label">Requested Features</div>
              <div class="value">${selectedFeatures}</div>
            </div>
            <div class="row">
              <div class="label">Target Timeline</div>
              <div class="value">${selectedTimeline}</div>
            </div>
            <div style="margin-top: 18px;">
              <div class="label">Project Details &amp; Notes</div>
              <div class="notes-box">${additionalNotes}</div>
            </div>
          </div>
          <div class="footer">
            <a href="mailto:${clientEmail}?subject=Re: Your Free Quote Request" class="reply-btn">Reply to ${clientName}</a>
          </div>
        </div>
      </body>
      </html>
    `;

    const plainText = `
New Free Quote Request
======================
Client Name: ${clientName}
Client Email: ${clientEmail}
Project Type: ${selectedType}
Features: ${selectedFeatures}
Timeline: ${selectedTimeline}

Client Notes:
${additionalNotes}
    `.trim();

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: "Portfolio Quote <onboarding@resend.dev>",
        to: [recipientEmail],
        reply_to: clientEmail,
        subject: `[Free Quote Request] ${clientName} • ${selectedType} (${selectedTimeline})`,
        html: htmlEmail,
        text: plainText,
      }),
    });

    if (!resendResponse.ok) {
      const errorData = await resendResponse.json().catch(() => ({}));
      console.error("Resend API rejected email dispatch:", errorData);
      return NextResponse.json(
        {
          error:
            errorData.message ||
            "Unable to deliver email via Resend. Please check your credentials.",
        },
        { status: resendResponse.status }
      );
    }

    const data = await resendResponse.json().catch(() => ({}));
    return NextResponse.json(
      {
        success: true,
        message:
          "Your quote request has been sent successfully! I will review your requirements and reply with a custom quote within 24 hours.",
        id: data.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API internal error:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}

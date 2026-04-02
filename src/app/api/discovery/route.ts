import { NextRequest, NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, project_type, budget, timeline, message } = body;

    // Validation
    if (!name || typeof name !== "string" || name.trim().length < 1) {
      return NextResponse.json({ error: "Name is required." }, { status: 400 });
    }
    if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "A valid email is required." }, { status: 400 });
    }
    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json({ error: "Please tell me a bit more about your project (at least 10 characters)." }, { status: 400 });
    }

    const contactEmail = process.env.CONTACT_EMAIL;
    const resendApiKey = process.env.RESEND_API_KEY;

    // Save to Supabase
    const { error: dbError } = await getSupabase().from("leads").insert({
      name: name.trim(),
      email: email.trim(),
      company: company?.trim() || null,
      project_type: project_type || null,
      budget: budget || null,
      timeline: timeline || null,
      message: message.trim(),
      booked_call: true,
    });

    if (dbError) {
      console.error("Supabase insert error:", dbError);
      // Don't fail the whole request — still send email
    }

    // Send email to Bryan
    if (resendApiKey && contactEmail) {
      const { Resend } = await import("resend");
      const resend = new Resend(resendApiKey);

      await resend.emails.send({
        from: "onboarding@resend.dev",
        to: contactEmail,
        subject: `Discovery form: ${name.trim()}${company ? ` (${company.trim()})` : ""}`,
        html: `
          <h2>New discovery form submission</h2>
          <p><strong>Name:</strong> ${name.trim()}</p>
          <p><strong>Email:</strong> <a href="mailto:${email.trim()}">${email.trim()}</a></p>
          <p><strong>Company:</strong> ${company?.trim() || "N/A"}</p>
          <hr />
          <p><strong>Project type:</strong> ${project_type || "Not specified"}</p>
          <p><strong>Budget:</strong> ${budget || "Not specified"}</p>
          <p><strong>Timeline:</strong> ${timeline || "Not specified"}</p>
          <hr />
          <p><strong>About their project:</strong></p>
          <p style="white-space: pre-wrap;">${message.trim()}</p>
        `,
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Discovery form error:", err);
    return NextResponse.json({ error: "Failed to submit. Please try again." }, { status: 500 });
  }
}

import { NextRequest, NextResponse } from "next/server";
import { createHmac, timingSafeEqual } from "crypto";

function verifySignature(rawBody: string, signature: string, signingKey: string): boolean {
  try {
    const hmac = createHmac("sha256", signingKey);
    hmac.update(rawBody);
    const expected = hmac.digest("hex");
    const expectedBuf = Buffer.from(expected, "hex");
    const receivedBuf = Buffer.from(signature, "hex");
    if (expectedBuf.length !== receivedBuf.length) return false;
    return timingSafeEqual(expectedBuf, receivedBuf);
  } catch {
    return false;
  }
}

export async function POST(req: NextRequest) {
  try {
    const signingKey = process.env.CALENDLY_WEBHOOK_SIGNING_KEY;
    const resendApiKey = process.env.RESEND_API_KEY;
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

    const rawBody = await req.text();
    const signature = req.headers.get("calendly-webhook-signature") || "";

    // Verify signature if key is configured
    if (signingKey) {
      if (!signature || !verifySignature(rawBody, signature, signingKey)) {
        return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
      }
    }

    const payload = JSON.parse(rawBody);

    // Only handle new bookings
    if (payload.event !== "invitee.created") {
      return NextResponse.json({ received: true });
    }

    // Calendly v2 payload: name and email are directly on payload.payload
    const name = payload.payload?.name;
    const email = payload.payload?.email;
    if (!name || !email) {
      return NextResponse.json({ error: "Missing invitee data" }, { status: 400 });
    }
    const discoveryUrl = `${siteUrl}/discovery?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}`;

    // Send discovery email to the prospect
    if (resendApiKey) {
      const { Resend } = await import("resend");
      const resend = new Resend(resendApiKey);

      await resend.emails.send({
        from: "onboarding@resend.dev",
        to: email,
        subject: "One quick thing before our call",
        html: `
          <p>Hi ${name.split(" ")[0]},</p>
          <p>Thanks for booking a call — looking forward to it!</p>
          <p>To make the most of our time together, could you fill out this short form before we talk? It takes about 2 minutes and helps me come prepared with ideas specific to your situation.</p>
          <p style="margin: 24px 0;">
            <a href="${discoveryUrl}" style="background:#2563eb;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:600;">
              Fill out the form →
            </a>
          </p>
          <p>See you soon,<br />Bryan</p>
        `,
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Calendly webhook error:", err);
    return NextResponse.json({ error: "Webhook processing failed" }, { status: 500 });
  }
}

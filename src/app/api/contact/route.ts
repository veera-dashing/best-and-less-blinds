import nodemailer from "nodemailer";
import { business } from "@/lib/content";

// Sends contact-form enquiries via Gmail SMTP using an App Password.
// nodemailer needs the Node.js runtime (not edge).
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function esc(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function POST(request: Request) {
  let data: Record<string, string>;
  try {
    data = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = (data.name || "").trim();
  const email = (data.email || "").trim();
  const phone = (data.phone || "").trim();
  const product = (data.product || "").trim();
  const message = (data.message || "").trim();
  // Honeypot: bots fill hidden fields. Pretend success and send nothing.
  if ((data.company || "").trim()) return Response.json({ ok: true });

  if (!name || !email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return Response.json(
      { error: "Please provide your name and a valid email." },
      { status: 400 },
    );
  }

  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;
  const to = process.env.CONTACT_TO || user;

  if (!user || !pass) {
    console.error("[contact] GMAIL_USER / GMAIL_APP_PASSWORD not configured");
    return Response.json(
      { error: "Enquiries aren't configured yet — please call or email us." },
      { status: 503 },
    );
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: { user, pass },
  });

  const subject = `Website enquiry — ${product || "General"} (${name})`;
  const text = [
    "New enquiry from the website",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || "-"}`,
    `Product of interest: ${product || "-"}`,
    "",
    "Message:",
    message || "-",
  ].join("\n");
  const html = `
    <div style="font-family:Arial,sans-serif;color:#2b2420;line-height:1.6">
      <h2 style="margin:0 0 12px">New website enquiry</h2>
      <p><strong>Name:</strong> ${esc(name)}<br/>
      <strong>Email:</strong> ${esc(email)}<br/>
      <strong>Phone:</strong> ${esc(phone) || "-"}<br/>
      <strong>Product of interest:</strong> ${esc(product) || "-"}</p>
      <p><strong>Message:</strong><br/>${esc(message).replace(/\n/g, "<br/>") || "-"}</p>
    </div>`;

  try {
    await transporter.sendMail({
      from: `"${business.name} website" <${user}>`,
      to,
      replyTo: email,
      subject,
      text,
      html,
    });
    return Response.json({ ok: true });
  } catch (err) {
    console.error("[contact] sendMail failed", err);
    return Response.json(
      { error: "Sorry, we couldn't send your enquiry. Please call us." },
      { status: 502 },
    );
  }
}

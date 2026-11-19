import nodemailer from "nodemailer";
import { ContactFormSchema } from "./validation";

export async function sendContactEmail(data: ContactFormSchema): Promise<{ success: boolean; info?: string }> {
  const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || "sachin@instanthealingtherapy.com";
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = parseInt(process.env.SMTP_PORT || "587", 10);
  const smtpSecure = process.env.SMTP_SECURE === "true" || smtpPort === 465;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const smtpFrom = process.env.SMTP_FROM || `"Instant Healing Therapy" <${smtpUser || "no-reply@instanthealingtherapy.com"}>`;

  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 24px; color: #1e293b; }
          .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -2px rgba(0,0,0,0.05); border: 1px solid #e2e8f0; }
          .header { background: linear-gradient(135deg, #0f766e 0%, #115e59 100%); padding: 32px 24px; text-align: center; color: #ffffff; }
          .header h1 { margin: 0 0 6px 0; font-size: 22px; font-weight: 700; letter-spacing: -0.02em; }
          .header p { margin: 0; font-size: 14px; opacity: 0.9; }
          .body-content { padding: 32px 28px; }
          .badge { display: inline-block; background-color: #ccfbf1; color: #0f766e; font-size: 12px; font-weight: 600; padding: 4px 10px; border-radius: 9999px; margin-bottom: 20px; text-transform: uppercase; letter-spacing: 0.05em; }
          .field-group { margin-bottom: 20px; }
          .field-label { font-size: 12px; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 6px; }
          .field-value { font-size: 15px; font-weight: 500; color: #0f172a; padding: 10px 14px; background: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0; word-break: break-word; }
          .message-box { background: #f0fdfa; border-left: 4px solid #0d9488; padding: 16px; border-radius: 0 8px 8px 0; font-size: 15px; line-height: 1.6; white-space: pre-wrap; color: #134e4a; }
          .footer { padding: 20px 28px; background: #f8fafc; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8; text-align: center; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Website Contact Enquiry</h1>
            <p>Instant Healing Therapy &bull; Quantum Healing Practice</p>
          </div>
          <div class="body-content">
            <span class="badge">Website Lead</span>

            <div class="field-group">
              <div class="field-label">Sender Name</div>
              <div class="field-value">${escapeHtml(data.fullName)}</div>
            </div>

            <div class="field-group">
              <div class="field-label">Email Address</div>
              <div class="field-value"><a href="mailto:${escapeHtml(data.email)}" style="color: #0f766e; text-decoration: none;">${escapeHtml(data.email)}</a></div>
            </div>

            <div class="field-group">
              <div class="field-label">Phone Number / WhatsApp</div>
              <div class="field-value"><a href="tel:${escapeHtml(data.phone)}" style="color: #0f766e; text-decoration: none;">${escapeHtml(data.phone)}</a></div>
            </div>

            ${
              data.sourcePage
                ? `
            <div class="field-group">
              <div class="field-label">Originating Page</div>
              <div class="field-value">${escapeHtml(data.sourcePage)}</div>
            </div>
            `
                : ""
            }

            <div class="field-group">
              <div class="field-label">Message Details</div>
              <div class="message-box">${escapeHtml(data.message)}</div>
            </div>
          </div>
          <div class="footer">
            Received from Instant Healing Therapy official website. Submitted on ${new Date().toUTCString()}.
          </div>
        </div>
      </body>
    </html>
  `;

  // If SMTP credentials are not configured yet, log details for development and testing
  if (!smtpHost || !smtpUser || !smtpPass) {
    console.info("--------------------------------------------------");
    console.info("[Dev/Simulation Mode] Contact Form Submission Received:");
    console.info("Recipient:", receiverEmail);
    console.info("Sender:", data.fullName, `<${data.email}>`);
    console.info("Phone:", data.phone);
    console.info("Page:", data.sourcePage || "Footer Contact Form");
    console.info("Message:", data.message);
    console.info("Notice: To send real emails, define SMTP_HOST, SMTP_USER, and SMTP_PASS in .env.local");
    console.info("--------------------------------------------------");
    return { success: true, info: "Message received (simulated preview in non-SMTP environment)" };
  }

  // Create transporter with provided credentials
  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpSecure,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  const mailOptions = {
    from: smtpFrom,
    to: receiverEmail,
    replyTo: data.email,
    subject: `New Enquiry from ${data.fullName} - Instant Healing Therapy`,
    text: `New Enquiry:\n\nName: ${data.fullName}\nEmail: ${data.email}\nPhone: ${data.phone}\nSource: ${data.sourcePage || "Footer"}\n\nMessage:\n${data.message}`,
    html: htmlContent,
  };

  const res = await transporter.sendMail(mailOptions);
  return { success: true, info: res.messageId };
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

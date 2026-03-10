import nodemailer from "nodemailer";

type MailPayload = {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
};

function parseBool(value: string | undefined): boolean {
  return String(value).toLowerCase() === "true";
}

function getSmtpConfig() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const inbox = process.env.CONTACT_INBOX;
  const from = process.env.CONTACT_FROM || user;

  if (!host || !user || !pass || !inbox || !from) {
    const missing: string[] = [];
    if (!host) missing.push("SMTP_HOST");
    if (!user) missing.push("SMTP_USER");
    if (!pass) missing.push("SMTP_PASS");
    if (!inbox) missing.push("CONTACT_INBOX");
    if (!from) missing.push("CONTACT_FROM");
    console.warn(`[contact-mailer] Email notification disabled. Missing env: ${missing.join(", ")}`);
    return null;
  }

  return {
    host,
    port,
    secure: parseBool(process.env.SMTP_SECURE),
    auth: { user, pass },
    inbox,
    from,
  };
}

export async function sendContactNotification(payload: MailPayload): Promise<boolean> {
  const config = getSmtpConfig();
  if (!config) {
    return false;
  }

  const transporter = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,
    auth: config.auth,
  });

  try {
    await transporter.sendMail({
      from: config.from,
      to: config.inbox,
      subject: `New portfolio message from ${payload.name}`,
      text:
        `You received a new message via portfolio contact form.\n\n` +
        `Name: ${payload.name}\n` +
        `Email: ${payload.email}\n` +
        `Submitted: ${payload.createdAt}\n` +
        `ID: ${payload.id}\n\n` +
        `Message:\n${payload.message}\n`,
      replyTo: payload.email,
    });
  } catch (error) {
    console.error("[contact-mailer] Failed to deliver email notification:", error);
    return false;
  }

  return true;
}

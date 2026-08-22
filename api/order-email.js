const MAX_TEXT_LENGTH = 4000;

function sanitizeText(value) {
  if (typeof value !== "string") return "";
  return value.replace(/[\u0000-\u001F\u007F]/g, "").trim().slice(0, MAX_TEXT_LENGTH);
}

function isValidEmail(email) {
  return typeof email === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

function isValidPhone(phone) {
  if (typeof phone !== "string") return false;
  const digits = phone.replace(/\D/g, "");
  return digits.length >= 7 && digits.length <= 20;
}

function isValidBudget(budget) {
  const amount = Number(budget);
  return Number.isFinite(amount) && amount >= 100 && amount <= 10000;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const recipient = process.env.ORDER_EMAIL_TO || "reshadd64@gmail.com";

  if (!apiKey || !from || !isValidEmail(recipient)) {
    console.error("Missing or invalid email environment variables");
    return res.status(500).json({ ok: false, error: "Email service not configured" });
  }

  let body;
  try {
    body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};
  } catch (error) {
    console.error("Invalid order email request JSON:", error);
    return res.status(400).json({ ok: false, error: "Invalid request body" });
  }

  const project = sanitizeText(body.project);
  const contactMethod = sanitizeText(body.contactMethod).toLowerCase();
  const contact = sanitizeText(body.contact);
  const budget = Number(body.budget);

  if (!project || !isValidBudget(budget) || !["phone", "email"].includes(contactMethod) || !contact) {
    return res.status(400).json({ ok: false, error: "Invalid order data" });
  }
  if (contactMethod === "email" && !isValidEmail(contact)) {
    return res.status(400).json({ ok: false, error: "Invalid email" });
  }
  if (contactMethod === "phone" && !isValidPhone(contact)) {
    return res.status(400).json({ ok: false, error: "Invalid phone" });
  }

  const phone = contactMethod === "phone" ? contact : "Daxil edilməyib";
  const email = contactMethod === "email" ? contact : "Daxil edilməyib";
  const message = [
    "Yeni layihə sifarişi",
    "",
    "Layihə ideyası:", project,
    "",
    "Büdcə:", `${budget.toLocaleString("az-AZ")} AZN`,
    "",
    "Əlaqə üsulu:", contactMethod === "phone" ? "Mobil nömrə" : "Gmail",
    "",
    "Telefon:", phone,
    "",
    "Email:", email,
    "",
    "Portfolio:", "https://reshad-ismayilov.site/",
  ].join("\n");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [recipient],
        subject: "Yeni layihə sifarişi",
        text: message,
      }),
    });
    const result = await response.json().catch(() => ({}));

    if (!response.ok) {
      console.error("Resend API error:", response.status, result);
      return res.status(502).json({ ok: false, error: "Failed to send email" });
    }

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Email request failed:", error);
    return res.status(502).json({ ok: false, error: "Failed to send email" });
  }
}
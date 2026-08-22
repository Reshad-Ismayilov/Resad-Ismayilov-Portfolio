const RATE_LIMIT = new Map();

function sanitizeText(str) {
  if (typeof str !== "string") return "";
  return str.replace(/[\u0000-\u001F\u007F]/g, "").trim().slice(0, 4000);
}

function isValidEmail(email) {
  if (typeof email !== "string") return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

function isValidPhone(phone) {
  if (typeof phone !== "string") return false;
  const digits = phone.replace(/\D/g, "");
  return digits.length >= 7 && digits.length <= 20;
}

function isValidBudget(budget) {
  if (budget === undefined || budget === null || budget === "") return false;
  const n = Number(budget);
  return Number.isFinite(n) && n >= 100 && n <= 10000;
}

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST, OPTIONS");
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  const ip =
    (req.headers && (req.headers["x-forwarded-for"] || req.headers["x-real-ip"])) ||
    req.socket?.remoteAddress ||
    "unknown";
  const clientIp = Array.isArray(ip) ? ip[0] : String(ip).split(",")[0].trim();

  const now = Date.now();
  const windowMs = 60 * 1000;
  const maxRequests = 3;
  const entry = RATE_LIMIT.get(clientIp) || { count: 0, resetAt: now + windowMs };
  if (now > entry.resetAt) {
    entry.count = 0;
    entry.resetAt = now + windowMs;
  }
  entry.count += 1;
  RATE_LIMIT.set(clientIp, entry);
  if (entry.count > maxRequests) {
    return res.status(429).json({ ok: false, error: "Too many requests" });
  }

  const token = process.env.WHATSAPP_ACCESS_TOKEN;
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;
  const recipientPhone = process.env.WHATSAPP_RECIPIENT_PHONE;

  if (!token || !phoneNumberId || !recipientPhone) {
    return res.status(500).json({ ok: false, error: "Server not configured" });
  }

  let raw;
  try {
    raw = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};
  } catch (err) {
    console.error("Invalid WhatsApp request JSON:", err);
    return res.status(400).json({ ok: false, error: "Invalid request body" });
  }
  const project = sanitizeText(raw.project);
  const budgetRaw = raw.budget;
  const contactMethod = sanitizeText(raw.contactMethod).toLowerCase();
  const contact = sanitizeText(raw.contact);

  if (!project) {
    return res.status(400).json({ ok: false, error: "Project is required" });
  }
  if (!isValidBudget(budgetRaw)) {
    return res.status(400).json({ ok: false, error: "Invalid budget" });
  }
  if (!["phone", "email"].includes(contactMethod)) {
    return res.status(400).json({ ok: false, error: "Invalid contact method" });
  }
  if (!contact) {
    return res.status(400).json({ ok: false, error: "Contact is required" });
  }
  if (contactMethod === "email" && !isValidEmail(contact)) {
    return res.status(400).json({ ok: false, error: "Invalid email" });
  }
  if (contactMethod === "phone" && !isValidPhone(contact)) {
    return res.status(400).json({ ok: false, error: "Invalid phone" });
  }

  const budgetAZN = Number(budgetRaw).toLocaleString("az-AZ");
  const contactLabel = contactMethod === "phone" ? "Mobil nömrə" : "Gmail";
  const phone = contactMethod === "phone" ? contact : "Daxil edilməyib";
  const email = contactMethod === "email" ? contact : "Daxil edilməyib";

  const lines = [
    "Yeni layihə sifarişi",
    "",
    "Layihə ideyası:",
    project,
    "",
    "Büdcə:",
    `${budgetAZN} AZN`,
    "",
    "Əlaqə üsulu:",
    contactLabel,
    "",
    "Telefon:",
    phone,
    "",
    "Email:",
    email,
    "",
    "Portfolio:",
    "https://reshad-ismayilov.site/",
  ];

  const messageText = lines.join("\n");

  const apiVersion = "v20.0";
  const url = `https://graph.facebook.com/${apiVersion}/${phoneNumberId}/messages`;

  const payload = {
    messaging_product: "whatsapp",
    recipient_type: "individual",
    to: recipientPhone,
    type: "text",
    text: {
      preview_url: false,
      body: messageText,
    },
  };

  try {
    const resp = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    });

    const data = await resp.json().catch(() => ({}));

    if (!resp.ok) {
      console.error("WhatsApp Cloud API error:", resp.status, data);
      return res.status(502).json({ ok: false, error: "Failed to send message" });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("WhatsApp Cloud API request failed:", err);
    return res.status(502).json({ ok: false, error: "Failed to send message" });
  }
}

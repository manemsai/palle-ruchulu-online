// Vercel serverless function: creates a Razorpay order for the checkout.
// Reads RAZORPAY_KEY_ID / RAZORPAY_KEY_SECRET from environment variables
// (Vercel dashboard → Settings → Environment Variables). The secret never
// leaves the server.

export default async function handler(req, res) {
  const keyId = process.env.RAZORPAY_KEY_ID;
  const keySecret = process.env.RAZORPAY_KEY_SECRET;

  // Safe config check used by the checkout page on load.
  if (req.method === "GET") {
    return res.status(200).json({ razorpay: Boolean(keyId && keySecret) });
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  if (!keyId || !keySecret) {
    return res.status(503).json({ error: "Online payments are not configured yet." });
  }

  let body = req.body;
  if (typeof body === "string") {
    try {
      body = JSON.parse(body);
    } catch {
      return res.status(400).json({ error: "Invalid request." });
    }
  }

  // Amount in paise. Bounds-checked so the endpoint can't be abused.
  const amount = Math.round(Number(body && body.amount));
  if (!Number.isFinite(amount) || amount < 100 || amount > 10000000) {
    return res.status(400).json({ error: "Invalid amount." });
  }

  const receipt = `pr_${Date.now().toString(36)}`;
  const auth = Buffer.from(`${keyId}:${keySecret}`).toString("base64");

  try {
    const resp = await fetch("https://api.razorpay.com/v1/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${auth}`,
      },
      body: JSON.stringify({
        amount,
        currency: "INR",
        receipt,
        notes: { source: "palleruchulu.in" },
      }),
    });
    const order = await resp.json();
    if (!resp.ok || !order || !order.id) {
      return res.status(502).json({ error: "Could not create a payment order." });
    }
    return res.status(200).json({
      orderId: order.id,
      keyId,
      amount,
      currency: "INR",
    });
  } catch {
    return res.status(502).json({ error: "Payment service is unreachable right now." });
  }
}

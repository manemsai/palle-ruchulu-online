import { useCart } from "@/components/CartContext";
import { useEffect, useState } from "react";
import { Check, Copy, Lock } from "lucide-react";
import { WHATSAPP_DISPLAY, waLink } from "@/lib/site";
import upiQr from "@/assets/upi-qr.png";

const inputCls =
  "w-full bg-white border border-[#d2d5d9] rounded-lg px-3.5 py-3 text-sm placeholder:text-[#737373] focus:outline-none focus:border-[#1a73e8] focus:ring-2 focus:ring-[#1a73e8]/20 mb-3";

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-lg font-semibold text-black mb-4">{children}</h2>
);

function loadRazorpayScript(): Promise<boolean> {
  return new Promise((resolve) => {
    if ((window as any).Razorpay) return resolve(true);
    const s = document.createElement("script");
    s.src = "https://checkout.razorpay.com/v1/checkout.js";
    s.onload = () => resolve(true);
    s.onerror = () => resolve(false);
    document.body.appendChild(s);
  });
}

const Checkout = () => {
  const { cart } = useCart();

  const [contact, setContact] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pin, setPin] = useState("");
  const [phone, setPhone] = useState("");
  const [payMethod, setPayMethod] = useState<"razorpay" | "upi" | "later">("upi");
  const [upiRef, setUpiRef] = useState("");
  const [copied, setCopied] = useState(false);
  const [gatewayReady, setGatewayReady] = useState(false);
  const [paying, setPaying] = useState(false);
  const [payError, setPayError] = useState("");

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const sizeLabel = (s: string) => (s === "1000" ? "1kg" : `${s}g`);

  // Check whether the Razorpay gateway is configured (server env vars).
  useEffect(() => {
    fetch("/api/create-order")
      .then((r) => (r.ok ? r.json() : { razorpay: false }))
      .then((d) => {
        if (d && d.razorpay) {
          setGatewayReady(true);
          setPayMethod("razorpay");
        }
      })
      .catch(() => {
        /* gateway unavailable — UPI direct stays the default */
      });
  }, []);

  const copyUpiNumber = async () => {
    try {
      await navigator.clipboard.writeText(WHATSAPP_DISPLAY.replace(/\s/g, ""));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  const orderLines = (paymentLine: string) =>
    [
      "Hi! I'd like to place an order from Palle Ruchulu Pickles.",
      "",
      ...cart.map(
        (i) => `• ${i.name} (${sizeLabel(i.size)}) x ${i.quantity} — ₹${i.price * i.quantity}`
      ),
      `Total: ₹${subtotal}`,
      "",
      `Name: ${name.trim()}`,
      `Phone: ${phone.trim()}`,
      address.trim()
        ? `Address: ${address.trim()}, ${city.trim()} ${pin.trim()}, ${state.trim()}`
        : "",
      contact.trim() ? `Contact: ${contact.trim()}` : "",
      paymentLine,
    ].filter(Boolean);

  const sendWhatsAppOrder = (paymentLine: string) => {
    window.open(waLink(orderLines(paymentLine).join("\n")), "_blank");
  };

  const payWithRazorpay = async () => {
    setPayError("");
    setPaying(true);
    try {
      const resp = await fetch("/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: subtotal * 100 }),
      });
      const data = await resp.json();
      if (!resp.ok || !data.orderId) {
        throw new Error(data.error || "Could not start the payment.");
      }
      const ok = await loadRazorpayScript();
      if (!ok || !(window as any).Razorpay) {
        throw new Error("Payment window could not be loaded. Please try again.");
      }
      const rzp = new (window as any).Razorpay({
        key: data.keyId,
        amount: data.amount,
        currency: data.currency || "INR",
        name: "Palle Ruchulu Pickles",
        description: "Pickle order",
        order_id: data.orderId,
        prefill: { name: name.trim(), contact: phone.trim() },
        theme: { color: "#9c221a" },
        handler: (r: any) => {
          setPaying(false);
          sendWhatsAppOrder(
            `Payment: Paid online via Razorpay (Payment ID: ${r.razorpay_payment_id}). Please verify and confirm my order.`
          );
        },
        modal: { ondismiss: () => setPaying(false) },
      });
      rzp.on("payment.failed", () => {
        setPaying(false);
        setPayError("The payment did not go through. Please try again or use UPI.");
      });
      rzp.open();
    } catch (e: any) {
      setPaying(false);
      setPayError(e?.message || "Could not start the payment. Please try again.");
    }
  };

  const placeOrder = () => {
    if (!name.trim() || !phone.trim()) {
      alert("Please enter your name and phone number so we can confirm your order.");
      return;
    }
    if (payMethod === "razorpay") {
      payWithRazorpay();
      return;
    }
    sendWhatsAppOrder(
      payMethod === "upi"
        ? `Payment: Paid via UPI to ${WHATSAPP_DISPLAY}${upiRef.trim() ? ` (Ref: ${upiRef.trim()})` : ""}`
        : "Payment: Will pay after confirmation"
    );
  };

  return (
    <div className="min-h-screen bg-white text-[#1a1a1a]">
      {/* Store header */}
      <header className="border-b border-[#e1e3e5]">
        <div className="max-w-6xl mx-auto px-6 py-5">
          <span className="text-xl font-bold tracking-tight">Palle Ruchulu Pickles</span>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6">
        {/* Breadcrumb */}
        <nav className="py-5 text-[13px] text-[#737373] flex items-center gap-2 flex-wrap">
          <span className="hover:text-black cursor-pointer">Cart</span>
          <span aria-hidden>›</span>
          <span className="hover:text-black cursor-pointer">Information</span>
          <span aria-hidden>›</span>
          <span className="text-black font-semibold">Payment</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-16">
          {/* LEFT – form (60%) */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            {/* Contact */}
            <section className="mb-8">
              <SectionTitle>Contact</SectionTitle>
              <input
                placeholder="Email or mobile phone number"
                className={inputCls}
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
            </section>

            {/* Delivery */}
            <section className="mb-8">
              <SectionTitle>Delivery address</SectionTitle>
              <div className="grid grid-cols-2 gap-3">
                <input
                  placeholder="First name"
                  className={inputCls}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  placeholder="Phone"
                  className={inputCls}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <input
                placeholder="Address"
                className={inputCls}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <div className="grid grid-cols-3 gap-3">
                <input
                  placeholder="City"
                  className={inputCls}
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
                <input
                  placeholder="State"
                  className={inputCls}
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                />
                <input
                  placeholder="PIN code"
                  className={inputCls}
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                />
              </div>
            </section>

            {/* Shipping method */}
            <section className="mb-8">
              <SectionTitle>Shipping method</SectionTitle>
              <div className="border border-[#d2d5d9] rounded-lg p-4 text-sm text-[#737373] bg-[#fafafa]">
                Shipping charges will be calculated after order confirmation.
              </div>
            </section>

            {/* Payment */}
            <section className="mb-8">
              <SectionTitle>Payment</SectionTitle>
              <p className="text-[13px] text-[#737373] mb-4">
                All transactions are secure and encrypted.
              </p>

              <div className="border border-[#d2d5d9] rounded-lg overflow-hidden">
                {/* Razorpay Secure — shown when the gateway is configured */}
                {gatewayReady && (
                  <label className="block cursor-pointer">
                    <div
                      className={`flex items-center gap-3 px-4 py-4 ${payMethod === "razorpay" ? "bg-[#f6f9ff]" : "bg-white"}`}
                    >
                      <input
                        type="radio"
                        name="payMethod"
                        checked={payMethod === "razorpay"}
                        onChange={() => setPayMethod("razorpay")}
                        className="w-4 h-4 accent-[#1a73e8]"
                      />
                      <span className="text-sm font-semibold flex-1">
                        Razorpay Secure{" "}
                        <span className="font-normal text-[#737373]">
                          — UPI, Cards, Netbanking
                        </span>
                      </span>
                      <span className="hidden sm:flex items-center gap-1">
                        {["UPI", "Visa", "MC"].map((b) => (
                          <span
                            key={b}
                            className="text-[10px] font-bold border border-[#d2d5d9] rounded px-1.5 py-0.5 text-[#1a1a1a]"
                          >
                            {b}
                          </span>
                        ))}
                        <span className="text-[10px] font-bold border border-[#d2d5d9] rounded px-1.5 py-0.5 text-[#1a1a1a]">
                          +more
                        </span>
                      </span>
                    </div>
                    {payMethod === "razorpay" && (
                      <div className="border-t border-[#d2d5d9] bg-[#f6f9ff] px-4 py-4 text-[13px] text-[#737373]">
                        After tapping <span className="font-semibold text-black">Pay now</span>,
                        a secure Razorpay window opens where you can pay with UPI, credit/debit
                        card, or netbanking. Your order is confirmed on WhatsApp right after.
                      </div>
                    )}
                  </label>
                )}

                {/* UPI direct */}
                <label
                  className={`block cursor-pointer ${gatewayReady ? "border-t border-[#d2d5d9]" : ""}`}
                >
                  <div
                    className={`flex items-center gap-3 px-4 py-4 ${payMethod === "upi" ? "bg-[#f6f9ff]" : "bg-white"}`}
                  >
                    <input
                      type="radio"
                      name="payMethod"
                      checked={payMethod === "upi"}
                      onChange={() => setPayMethod("upi")}
                      className="w-4 h-4 accent-[#1a73e8]"
                    />
                    <span className="text-sm font-semibold flex-1">
                      UPI <span className="font-normal text-[#737373]">— GPay, PhonePe, Paytm</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="text-[10px] font-bold border border-[#d2d5d9] rounded px-1.5 py-0.5 text-[#1a1a1a]">
                        UPI
                      </span>
                      <span className="text-[10px] font-bold border border-[#d2d5d9] rounded px-1.5 py-0.5 text-[#1a1a1a]">
                        G&nbsp;Pay
                      </span>
                    </span>
                  </div>
                </label>

                {payMethod === "upi" && (
                  <div className="border-t border-[#d2d5d9] bg-[#f6f9ff] px-4 py-5">
                    <div className="flex flex-col sm:flex-row gap-5 items-start">
                      <img
                        src={upiQr}
                        alt="UPI QR code for Palle Ruchulu Pickles"
                        className="w-36 h-36 rounded-lg border border-[#d2d5d9] bg-white p-1.5 shrink-0"
                      />
                      <div className="text-sm space-y-2.5">
                        <p className="font-semibold">Scan the QR with any UPI app</p>
                        <p className="text-[#737373]">Or pay directly to our UPI number:</p>
                        <div className="flex items-center gap-2">
                          <span className="font-mono font-bold text-base tracking-wide">
                            {WHATSAPP_DISPLAY}
                          </span>
                          <button
                            onClick={copyUpiNumber}
                            className="flex items-center gap-1 text-xs font-semibold text-[#1a73e8] hover:underline"
                          >
                            {copied ? (
                              <>
                                <Check className="w-3.5 h-3.5" /> Copied
                              </>
                            ) : (
                              <>
                                <Copy className="w-3.5 h-3.5" /> Copy
                              </>
                            )}
                          </button>
                        </div>
                        <p>
                          Amount to pay: <span className="font-bold text-base">₹{subtotal}</span>
                        </p>
                      </div>
                    </div>
                    <input
                      placeholder="UPI transaction / UTR number (optional)"
                      className="w-full bg-white border border-[#d2d5d9] rounded-lg px-3.5 py-3 mt-4 text-sm placeholder:text-[#737373] focus:outline-none focus:border-[#1a73e8] focus:ring-2 focus:ring-[#1a73e8]/20"
                      value={upiRef}
                      onChange={(e) => setUpiRef(e.target.value)}
                    />
                  </div>
                )}

                {/* Pay later */}
                <label className="block cursor-pointer border-t border-[#d2d5d9]">
                  <div
                    className={`flex items-center gap-3 px-4 py-4 ${payMethod === "later" ? "bg-[#f6f9ff]" : "bg-white"}`}
                  >
                    <input
                      type="radio"
                      name="payMethod"
                      checked={payMethod === "later"}
                      onChange={() => setPayMethod("later")}
                      className="w-4 h-4 accent-[#1a73e8]"
                    />
                    <span className="text-sm font-semibold flex-1">
                      Pay after confirmation{" "}
                      <span className="font-normal text-[#737373]">— on WhatsApp</span>
                    </span>
                  </div>
                </label>
              </div>

              {payError && (
                <p className="text-sm text-red-600 mt-3">{payError}</p>
              )}
            </section>

            {/* Pay button */}
            <button
              onClick={placeOrder}
              disabled={paying}
              className="w-full bg-[#1a73e8] hover:bg-[#1666c5] disabled:opacity-60 text-white font-semibold py-4 rounded-lg text-base transition-colors flex items-center justify-center gap-2"
            >
              <Lock className="w-4 h-4" />
              {paying ? "Opening secure payment…" : "Pay now"}
            </button>
            <p className="text-xs text-[#737373] text-center mt-3">
              {payMethod === "razorpay"
                ? "A secure Razorpay window opens — pay with UPI, card or netbanking."
                : payMethod === "upi"
                  ? "Pay in your UPI app first, then tap Pay now — your order opens in WhatsApp for confirmation."
                  : "Your order opens in WhatsApp — pay after we confirm."}
            </p>

            {/* Footer links */}
            <div className="mt-10 pt-6 border-t border-[#e1e3e5] flex flex-wrap gap-x-5 gap-y-2 text-[13px]">
              {["Refund policy", "Shipping policy", "Privacy policy", "Terms of service", "Contact us"].map(
                (l) => (
                  <span key={l} className="text-[#1a73e8] hover:underline cursor-pointer">
                    {l}
                  </span>
                )
              )}
            </div>
            <p className="text-[13px] text-[#737373] mt-4">
              All rights reserved Palle Ruchulu Pickles
            </p>
          </div>

          {/* RIGHT – order summary (40%) */}
          <aside className="lg:col-span-5 order-1 lg:order-2">
            <div className="bg-[#f6f6f7] border border-[#e1e3e5] lg:border-0 rounded-lg p-6 lg:sticky lg:top-6">
              <h2 className="text-lg font-semibold text-black mb-5">Order summary</h2>

              {cart.length === 0 && (
                <p className="text-sm text-[#737373]">Your cart is empty.</p>
              )}

              {cart.map((item, index) => (
                <div key={index} className="flex items-center gap-4 mb-5">
                  <div className="relative shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-lg object-cover border border-[#e1e3e5] bg-white"
                    />
                    <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[#737373] text-white text-[11px] font-semibold flex items-center justify-center">
                      {item.quantity}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{item.name}</p>
                    <p className="text-[13px] text-[#737373]">{sizeLabel(item.size)}</p>
                  </div>
                  <p className="text-sm font-medium">₹{item.price * item.quantity}</p>
                </div>
              ))}

              <div className="border-t border-[#e1e3e5] pt-4 text-sm space-y-2.5">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-medium">₹{subtotal}</span>
                </div>
                <div className="flex justify-between text-[#737373]">
                  <span>Shipping</span>
                  <span>Calculated later</span>
                </div>
                <div className="flex justify-between items-baseline pt-2">
                  <span className="font-semibold">Total</span>
                  <span className="text-xl font-bold">₹{subtotal}</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

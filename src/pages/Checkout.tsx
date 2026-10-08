import { useCart } from "@/components/CartContext";
import AddressAutocomplete from "@/components/AddressAutocomplete";
import { useState } from "react";
import { Check, Copy, QrCode } from "lucide-react";
import { WHATSAPP_DISPLAY, waLink } from "@/lib/site";
import upiQr from "@/assets/upi-qr.png";

const inputCls = "w-full border rounded-md px-3 py-2 mb-3";

const Checkout = () => {
  const { cart } = useCart();

  const [contact, setContact] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pin, setPin] = useState("");
  const [phone, setPhone] = useState("");
  const [payMethod, setPayMethod] = useState<"upi" | "later">("upi");
  const [upiRef, setUpiRef] = useState("");
  const [copied, setCopied] = useState(false);

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const copyUpiNumber = async () => {
    try {
      await navigator.clipboard.writeText(WHATSAPP_DISPLAY.replace(/\s/g, ""));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  const placeOrder = () => {
    if (!name.trim() || !phone.trim()) {
      alert("Please enter your name and phone number so we can confirm your order.");
      return;
    }
    const sizeLabel = (s: string) => (s === "1000" ? "1kg" : `${s}g`);
    const lines = [
      "Hi! I'd like to place an order from Palle Ruchulu Pickles.",
      "",
      ...cart.map(
        (i) => `• ${i.name} (${sizeLabel(i.size)}) x ${i.quantity} — ₹${i.price * i.quantity}`
      ),
      `Total: ₹${subtotal}`,
      "",
      `Name: ${name.trim()}`,
      `Phone: ${phone.trim()}`,
      address.trim() ? `Address: ${address.trim()}, ${city.trim()} ${pin.trim()}, ${state.trim()}` : "",
      contact.trim() ? `Contact: ${contact.trim()}` : "",
      payMethod === "upi"
        ? `Payment: Paid via UPI to ${WHATSAPP_DISPLAY}${upiRef.trim() ? ` (Ref: ${upiRef.trim()})` : ""}`
        : "Payment: Will pay after confirmation",
    ].filter(Boolean);
    window.open(waLink(lines.join("\n")), "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 px-6 py-10">

        {/* LEFT – CUSTOMER DETAILS */}
        <div>
          <h1 className="text-2xl font-bold mb-6">Checkout</h1>

          {/* Contact */}
          <section className="mb-8">
            <h2 className="font-semibold mb-3">Contact</h2>
            <input
              placeholder="Email or mobile phone number"
              className={inputCls}
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" defaultChecked />
              Email me with news and offers
            </label>
          </section>

          {/* Delivery */}
          <section className="mb-8">
            <h2 className="font-semibold mb-3">Delivery</h2>

            <input
              placeholder="Full name"
              className={inputCls}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <textarea
              placeholder="Address"
              rows={3}
              className={inputCls}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />

            <div className="grid grid-cols-2 gap-3 mb-3">
              <input
                placeholder="City"
                className="border rounded-md px-3 py-2"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <input
                placeholder="State"
                className="border rounded-md px-3 py-2"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </div>

            <input
              placeholder="PIN code"
              className={inputCls}
              value={pin}
              onChange={(e) => setPin(e.target.value)}
            />

            <input
              placeholder="Phone"
              className={inputCls}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </section>

          {/* Shipping Method */}
          <section className="mb-8">
            <h2 className="font-semibold mb-3">Shipping method</h2>
            <div className="border rounded-md p-3 text-sm text-muted-foreground">
              Shipping charges will be calculated after order confirmation.
            </div>
          </section>

          {/* Payment */}
          <section>
            <h2 className="font-semibold mb-3">Payment</h2>

            <div className="space-y-2 mb-4">
              <label className="flex items-center gap-3 border rounded-md p-3 cursor-pointer hover:border-primary transition-colors">
                <input
                  type="radio"
                  name="payMethod"
                  checked={payMethod === "upi"}
                  onChange={() => setPayMethod("upi")}
                  className="accent-[#9c221a]"
                />
                <span className="text-sm font-medium">
                  Pay online via UPI <span className="text-primary font-semibold">— recommended</span>
                </span>
              </label>
              <label className="flex items-center gap-3 border rounded-md p-3 cursor-pointer hover:border-primary transition-colors">
                <input
                  type="radio"
                  name="payMethod"
                  checked={payMethod === "later"}
                  onChange={() => setPayMethod("later")}
                  className="accent-[#9c221a]"
                />
                <span className="text-sm font-medium">
                  Pay after confirmation on WhatsApp
                </span>
              </label>
            </div>

            {payMethod === "upi" && (
              <div className="border rounded-md p-4 bg-card">
                <div className="flex flex-col sm:flex-row gap-4 items-start">
                  <img
                    src={upiQr}
                    alt="UPI QR code for Palle Ruchulu Pickles"
                    className="w-36 h-36 rounded-md border bg-white p-1 shrink-0"
                  />
                  <div className="text-sm space-y-2">
                    <p className="font-semibold flex items-center gap-1.5">
                      <QrCode className="w-4 h-4" />
                      Scan with GPay, PhonePe or Paytm
                    </p>
                    <p className="text-muted-foreground">
                      Or pay to our UPI number:
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-base tracking-wide">
                        {WHATSAPP_DISPLAY}
                      </span>
                      <button
                        onClick={copyUpiNumber}
                        className="flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
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
                      Amount to pay:{" "}
                      <span className="font-bold text-base">₹{subtotal}</span>
                    </p>
                  </div>
                </div>
                <input
                  placeholder="UPI transaction / UTR number (optional)"
                  className="w-full border rounded-md px-3 py-2 mt-4 text-sm"
                  value={upiRef}
                  onChange={(e) => setUpiRef(e.target.value)}
                />
                <p className="text-xs text-muted-foreground mt-2">
                  After paying, tap Continue below — your payment details go
                  with the order and we confirm everything on WhatsApp.
                </p>
              </div>
            )}
          </section>
        </div>

        {/* RIGHT – ORDER SUMMARY */}
        <div className="bg-card border rounded-lg p-6 h-fit sticky top-10">
          <h2 className="font-semibold mb-4">Order summary</h2>

          {cart.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 mb-4"
            >
              <img
                src={item.image}
                className="w-16 h-16 rounded object-cover"
              />

              <div className="flex-1">
                <p className="font-medium text-sm">{item.name}</p>
                <p className="text-xs text-muted-foreground">
                  {item.size === "1000" ? "1kg" : `${item.size}g`} × {item.quantity}
                </p>
              </div>

              <p className="text-sm font-semibold">
                ₹{item.price * item.quantity}
              </p>
            </div>
          ))}

          <div className="border-t pt-4 text-sm space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>

            <div className="flex justify-between text-muted-foreground">
              <span>Shipping</span>
              <span>Calculated later</span>
            </div>

            <div className="flex justify-between font-semibold text-lg pt-2">
              <span>Total</span>
              <span>₹{subtotal}</span>
            </div>
          </div>

          <button
            onClick={placeOrder}
            className="w-full mt-6 bg-primary text-white py-3 rounded-md text-lg hover:opacity-90 transition-opacity"
          >
            Continue
          </button>
          <p className="text-xs text-muted-foreground text-center mt-3">
            {payMethod === "upi"
              ? "Your order and payment details open in WhatsApp for confirmation."
              : "Your order opens in WhatsApp — pay after we confirm."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

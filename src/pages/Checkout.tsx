import { useCart } from "@/components/CartContext";
import AddressAutocomplete from "@/components/AddressAutocomplete";
import { useState } from "react";

const Checkout = () => {
  const { cart } = useCart();

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

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
              className="w-full border rounded-md px-3 py-2 mb-3"
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
              className="w-full border rounded-md px-3 py-2 mb-3"
            />

            <textarea
              placeholder="Address"
              rows={3}
              className="w-full border rounded-md px-3 py-2 mb-3"
            />

            <div className="grid grid-cols-2 gap-3 mb-3">
              <input
                placeholder="City"
                className="border rounded-md px-3 py-2"
              />
              <input
                placeholder="State"
                className="border rounded-md px-3 py-2"
              />
            </div>

            <input
              placeholder="PIN code"
              className="w-full border rounded-md px-3 py-2 mb-3"
            />

            <input
              placeholder="Phone"
              className="w-full border rounded-md px-3 py-2"
            />
          </section>

          {/* Shipping Method */}
          <section className="mb-8">
            <h2 className="font-semibold mb-3">Shipping method</h2>
            <div className="border rounded-md p-3 text-sm text-muted-foreground">
              Shipping charges will be calculated after order confirmation.
            </div>
          </section>

          {/* Payment placeholder */}
          <section>
            <h2 className="font-semibold mb-3">Payment</h2>
            <div className="border rounded-md p-4 text-sm text-muted-foreground">
              Payment will be collected after order confirmation.
            </div>
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

          <button className="w-full mt-6 bg-primary text-white py-3 rounded-md text-lg">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

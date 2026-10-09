import { useState } from "react";
import { Check, MessageCircle, Minus, Plus, ShoppingCart } from "lucide-react";
import { useCart } from "./CartContext";
import { waLink } from "@/lib/site";

export type PriceTiers = {
  "250": number;
  "500"?: number;
  "1000"?: number;
};

interface ProductCardProps {
  name: string;
  description: string;
  image: string;
  badge?: string;
  prices?: PriceTiers;
}

const sizeLabels: Record<keyof PriceTiers, string> = {
  "250": "250g",
  "500": "500g",
  "1000": "1kg",
};

const ProductCard = ({ name, description, image, badge, prices }: ProductCardProps) => {
  const availableSizes = prices
    ? (Object.keys(sizeLabels) as (keyof PriceTiers)[]).filter(
        (s) => prices[s] !== undefined
      )
    : [];
  const [size, setSize] = useState<keyof PriceTiers>(
    availableSizes[0] ?? "250"
  );
  const [added, setAdded] = useState(false);
  const { cart, addToCart, updateQuantity } = useCart();

  const handleAdd = () => {
    if (!prices) return;
    const price = prices[size];
    if (price === undefined) return;
    addToCart({ name, image, size, price, quantity: 1 });
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1400);
  };

  // How many of this exact item+size are already in the cart
  const inCartQty = prices
    ? cart
        .filter((i) => i.name === name && i.size === size)
        .reduce((n, i) => n + i.quantity, 0)
    : 0;

  const stepDown = () => {
    if (inCartQty > 0) updateQuantity(name, size, inCartQty - 1);
  };

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl bg-card border border-border shadow-card hover:shadow-warm transition-all duration-300 hover:-translate-y-1">
      <div className="relative aspect-[4/3] overflow-hidden bg-secondary/40">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {badge && (
          <span className="absolute left-3 top-3 rounded-full bg-accent px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-accent-foreground shadow">
            {badge}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-xl font-semibold text-foreground mb-1.5">
          {name}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {description}
        </p>

        {prices ? (
          <div className="mt-auto space-y-3">
            <div className="flex gap-2">
              {availableSizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`flex-1 rounded-full border px-2 py-1.5 text-xs font-semibold transition-colors ${
                    size === s
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-background text-foreground/70 hover:border-primary/60"
                  }`}
                >
                  {sizeLabels[s]}
                </button>
              ))}
            </div>

            <div className="flex items-end justify-between">
              <div>
                <p className="text-2xl font-bold text-primary">₹{prices[size] ?? "—"}</p>
                <p className="text-[11px] text-muted-foreground">
                  {sizeLabels[size]} pack
                </p>
              </div>
            </div>

            {inCartQty > 0 ? (
              <div className="flex w-full items-center justify-between rounded-full border border-primary/40 bg-primary/10 px-1.5 py-1.5">
                <button
                  onClick={stepDown}
                  aria-label="Remove one"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-primary shadow-sm hover:bg-primary hover:text-white transition-colors"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="text-sm font-bold text-primary">
                  {inCartQty} in cart
                </span>
                <button
                  onClick={handleAdd}
                  aria-label="Add one more"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white shadow-sm hover:bg-primary/90 transition-colors"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <button
                onClick={handleAdd}
                className={`flex w-full items-center justify-center gap-2 rounded-full py-2.5 text-sm font-semibold text-white transition-all ${
                  added
                    ? "bg-green-700"
                    : "bg-primary hover:bg-primary/90"
                }`}
              >
                {added ? (
                  <>
                    <Check className="h-4 w-4" /> Added to cart
                  </>
                ) : (
                  <>
                    <ShoppingCart className="h-4 w-4" /> Add to Cart
                  </>
                )}
              </button>
            )}
          </div>
        ) : (
          <div className="mt-auto">
            <button
              onClick={() =>
                window.open(
                  waLink(`Hi! I'd like to know the price of ${name} (Karam Powder).`),
                  "_blank"
                )
              }
              className="flex w-full items-center justify-center gap-2 rounded-full border-2 border-[#1FA855] py-2.5 text-sm font-semibold text-[#178A45] hover:bg-[#1FA855] hover:text-white transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              Ask price on WhatsApp
            </button>
          </div>
        )}
      </div>
    </article>
  );
};

export default ProductCard;

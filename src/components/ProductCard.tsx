import { useState } from "react";
import { Check, MessageCircle, ShoppingCart } from "lucide-react";
import { useCart } from "./CartContext";
import { waLink } from "@/lib/site";

export type PriceTiers = {
  "250": number;
  "500": number;
  "1000": number;
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
  const [size, setSize] = useState<keyof PriceTiers>("250");
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();

  const handleAdd = () => {
    if (!prices) return;
    addToCart({ name, image, size, price: prices[size], quantity: 1 });
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1400);
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
              {(Object.keys(sizeLabels) as (keyof PriceTiers)[]).map((s) => (
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
                <p className="text-2xl font-bold text-primary">₹{prices[size]}</p>
                <p className="text-[11px] text-muted-foreground">
                  {sizeLabels[size]} pack
                </p>
              </div>
            </div>

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

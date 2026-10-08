import { MessageCircle, Phone } from "lucide-react";
import { WHATSAPP_DISPLAY, waLink } from "@/lib/site";
import { SHOP_FILTER_EVENT } from "@/components/Shop";
import type { ShopProduct } from "@/components/Shop";

const shopLinks: { label: string; filter: ShopProduct["category"] }[] = [
  { label: "Veg Pickles", filter: "veg" },
  { label: "Non-Veg Pickles", filter: "nonveg" },
  { label: "Karam Powders", filter: "powder" },
];

const helpLinks = [
  { label: "How ordering works", id: "faq" },
  { label: "Our story", id: "about" },
  { label: "FAQs", id: "faq" },
];

const Footer = () => {
  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const goShop = (filter: ShopProduct["category"]) => {
    document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" });
    window.dispatchEvent(new CustomEvent(SHOP_FILTER_EVENT, { detail: filter }));
  };

  return (
    <footer className="bg-[#2A120C] text-[#F5E9D6] pt-14 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 texture-dots opacity-60" />
      <div className="relative container mx-auto px-4">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-display text-xl font-bold">
                ప
              </span>
              <span className="leading-tight">
                <span className="block font-display text-xl font-bold">
                  Palle Ruchulu
                </span>
                <span className="block text-[11px] font-semibold uppercase tracking-[0.28em] text-amber-300">
                  Pickles
                </span>
              </span>
            </div>
            <p className="text-sm text-[#F5E9D6]/75 leading-relaxed max-w-sm">
              Authentic Andhra-style homemade pickles and karam powders — made
              fresh in small batches with traditional family recipes. No
              preservatives, just pure village taste.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-amber-300 text-sm uppercase tracking-[0.18em]">
              Shop
            </h4>
            <ul className="space-y-2.5 text-sm">
              {shopLinks.map((l) => (
                <li key={l.label}>
                  <button
                    onClick={() => goShop(l.filter)}
                    className="text-[#F5E9D6]/80 hover:text-amber-300 transition-colors"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-amber-300 text-sm uppercase tracking-[0.18em]">
              Help
            </h4>
            <ul className="space-y-2.5 text-sm">
              {helpLinks.map((l) => (
                <li key={l.label}>
                  <button
                    onClick={() => go(l.id)}
                    className="text-[#F5E9D6]/80 hover:text-amber-300 transition-colors"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-amber-300 text-sm uppercase tracking-[0.18em]">
              Contact
            </h4>
            <div className="space-y-3 text-sm">
              <a
                href={waLink("Hi! I'd like to order pickles from Palle Ruchulu.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#F5E9D6]/80 hover:text-amber-300 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp us
              </a>
              <a
                href={`tel:+${"919848803193"}`}
                className="flex items-center gap-2 text-[#F5E9D6]/80 hover:text-amber-300 transition-colors"
              >
                <Phone className="w-4 h-4" />
                {WHATSAPP_DISPLAY}
              </a>
              <p className="text-[#F5E9D6]/60 text-xs leading-relaxed">
                Delivery across India in 7–10 days.
                <br />
                Shipping calculated at order confirmation.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#F5E9D6]/60">
          <p>© {new Date().getFullYear()} Palle Ruchulu Pickles. All rights reserved.</p>
          <p>Made with love, salt & sunshine.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

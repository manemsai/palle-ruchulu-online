import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, Phone, ShoppingCart, X } from "lucide-react";
import { useCart } from "@/components/CartContext";
import CartDrawer from "@/components/CartDrawer";
import { waLink } from "@/lib/site";
import logo from "@/assets/logo.png";

import { SHOP_FILTER_EVENT } from "@/components/Shop";
import type { ShopProduct } from "@/components/Shop";

type ShopFilter = ShopProduct["category"];

const links: { label: string; id?: string; filter?: ShopFilter }[] = [
  { label: "Veg Pickles", id: "shop", filter: "veg" },
  { label: "Non-Veg Pickles", id: "shop", filter: "nonveg" },
  { label: "Karam Powders", id: "shop", filter: "powder" },
  { label: "Our Story", id: "about" },
  { label: "FAQ", id: "faq" },
];

const Navigation = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { cart } = useCart();

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const scrollToSection = (id: string, filter?: ShopFilter) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    if (filter) {
      window.dispatchEvent(new CustomEvent(SHOP_FILTER_EVENT, { detail: filter }));
    }
  };

  return (
    <>
      {/* Announcement bar */}
      <div className="bg-primary text-primary-foreground text-center text-xs sm:text-sm font-medium py-2 px-4 tracking-wide">
        Made fresh in small batches · Delivered across India in 7–10 days
      </div>

      <nav className="sticky top-0 w-full bg-background/95 backdrop-blur-md z-40 border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-4">
            {/* Brand */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2.5 text-left"
            >
              <img
                src={logo}
                alt="Palle Ruchulu Pickles logo"
                className="h-11 w-11 rounded-xl object-cover shadow-warm"
              />
              <span className="leading-tight">
                <span className="block font-display text-xl font-bold text-foreground">
                  Palle Ruchulu
                </span>
                <span className="block text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">
                  Pickles
                </span>
              </span>
            </button>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-7">
              {links.map((l) => (
                <button
                  key={l.id}
                  onClick={() => scrollToSection(l.id!, l.filter)}
                  className="text-sm font-semibold text-foreground/80 hover:text-primary transition-colors"
                >
                  {l.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              {/* Cart */}
              <button
                onClick={() => setCartOpen(true)}
                className="relative flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card hover:border-primary transition-colors"
                aria-label="Open cart"
              >
                <ShoppingCart className="h-5 w-5 text-primary" />
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-[11px] font-bold text-primary-foreground">
                    {cartCount}
                  </span>
                )}
              </button>

              <Button
                onClick={() => window.open(waLink("Hi! I'd like to order pickles from Palle Ruchulu."), "_blank")}
                className="hidden sm:inline-flex bg-[#1FA855] hover:bg-[#178A45] text-white font-semibold"
              >
                <Phone className="w-4 h-4 mr-2" />
                Order Now
              </Button>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMenuOpen((v) => !v)}
                className="lg:hidden flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card"
                aria-label="Toggle menu"
              >
                {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Mobile links */}
          {menuOpen && (
            <div className="lg:hidden mt-3 border-t border-border pt-3 pb-1 flex flex-col gap-1">
              {links.map((l) => (
                <button
                  key={l.id}
                  onClick={() => scrollToSection(l.id!, l.filter)}
                  className="text-left px-2 py-2.5 text-sm font-semibold text-foreground/85 hover:text-primary rounded-lg hover:bg-secondary/60 transition-colors"
                >
                  {l.label}
                </button>
              ))}
              <Button
                onClick={() => window.open(waLink("Hi! I'd like to order pickles from Palle Ruchulu."), "_blank")}
                className="mt-2 bg-[#1FA855] hover:bg-[#178A45] text-white font-semibold"
              >
                <Phone className="w-4 h-4 mr-2" />
                Order on WhatsApp
              </Button>
            </div>
          )}
        </div>
      </nav>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
};

export default Navigation;

import { Button } from "@/components/ui/button";
import { Phone, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/components/CartContext";
import CartDrawer from "@/components/CartDrawer";

const Navigation = () => {
  // ✅ Hooks must be here
  const [cartOpen, setCartOpen] = useState(false);
  const { cart } = useCart();

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">
              Palle Ruchulu Pickles
            </h1>

            <div className="flex items-center gap-6">
              <button
                onClick={() => scrollToSection("veg-pickles")}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Veg Pickles
              </button>

              <button
                onClick={() => scrollToSection("nonveg-pickles")}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Non-Veg Pickles
              </button>

              <button
                onClick={() => scrollToSection("powders")}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Karam Powders
              </button>

              <button
                onClick={() => scrollToSection("about")}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                About Us
              </button>

              {/* 🛒 Cart Icon */}
              <div
                className="relative cursor-pointer"
                onClick={() => setCartOpen(true)}
              >
                <ShoppingCart className="h-6 w-6 text-primary" />

                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full px-2 py-0.5">
                    {cartCount}
                  </span>
                )}
              </div>

              <Button
                onClick={() => window.open("https://wa.me/919848803193", "_blank")}
                className="bg-[#25D366] hover:bg-[#20BA5A] text-white"
              >
                <Phone className="w-4 h-4 mr-2" />
                Order Now
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* 🧺 Cart Drawer */}
      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
      />
    </>
  );
};

export default Navigation;

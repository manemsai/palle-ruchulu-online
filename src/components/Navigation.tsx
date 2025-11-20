import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Navigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary">Palle Ruchulu Pickles</h1>
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
  );
};

export default Navigation;

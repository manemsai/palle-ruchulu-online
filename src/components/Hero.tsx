import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import heroImage from "@/assets/hero-pickles.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
          filter: "brightness(0.7)",
        }}
      />
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
          Palle Ruchulu Pickles
        </h1>
        <p className="text-2xl md:text-3xl mb-8 drop-shadow-md">
          Freshly Made, Ready for You
        </p>
        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto drop-shadow-md">
          Authentic Andhra-style homemade pickles and powders, prepared in small batches with traditional recipes
        </p>
        <Button
          size="lg"
          onClick={() => window.open("https://wa.me/919844803193", "_blank")}
          className="bg-[#25D366] hover:bg-[#20BA5A] text-white text-lg px-8 py-6"
        >
          <Phone className="w-5 h-5 mr-2" />
          Order on WhatsApp
        </Button>
      </div>
    </section>
  );
};

export default Hero;

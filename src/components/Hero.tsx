import { Button } from "@/components/ui/button";
import { Flame, Leaf, Phone, Truck } from "lucide-react";
import heroImage from "@/assets/hero-banner.jpg";
import { waLink } from "@/lib/site";

const trustItems = [
  { icon: Leaf, label: "No preservatives" },
  { icon: Flame, label: "Traditional recipes" },
  { icon: Truck, label: "Pan-India delivery" },
];

const Hero = () => {
  const scrollToShop = () => {
    document.getElementById("veg-pickles")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Traditional Andhra pickles in jars with fresh chilies and mangoes"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/15" />
        <div className="absolute inset-0 texture-dots" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-24 sm:py-32 lg:py-40">
        <div className="max-w-2xl text-white">
          <p className="eyebrow !text-amber-300 mb-5">
            Homemade in India · Small batches
          </p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05] mb-6 drop-shadow-xl">
            The taste of home,
            <span className="italic text-amber-300"> jarred.</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mb-4 max-w-xl leading-relaxed">
            Authentic Andhra pickles and karam podis — sun-matured, hand-pounded,
            and packed fresh for your family. No preservatives, no shortcuts.
          </p>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300/90 mb-8">
            29 family recipes · Veg, non-veg & powders
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            <Button
              size="lg"
              onClick={scrollToShop}
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-base font-semibold px-8 py-6 rounded-full shadow-warm"
            >
              Shop the Pickles
            </Button>
            <Button
              size="lg"
              onClick={() => window.open(waLink("Hi! I'd like to order pickles from Palle Ruchulu."), "_blank")}
              className="bg-[#1FA855] hover:bg-[#178A45] text-white text-base font-semibold px-8 py-6 rounded-full"
            >
              <Phone className="w-5 h-5 mr-2" />
              WhatsApp Us
            </Button>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {trustItems.map(({ icon: Icon, label }) => (
              <span key={label} className="inline-flex items-center gap-2 text-sm font-medium text-white/85">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                  <Icon className="h-4 w-4 text-amber-300" />
                </span>
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade into page */}
      <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;

import { MousePointerClick, MessageCircle, Package, Truck } from "lucide-react";

const steps = [
  {
    icon: MousePointerClick,
    title: "Pick your favourites",
    text: "Browse the range and add jars to your cart in 250g, 500g or 1kg packs.",
  },
  {
    icon: MessageCircle,
    title: "Confirm on WhatsApp",
    text: "Checkout sends your order straight to us on WhatsApp — quick and personal.",
  },
  {
    icon: Package,
    title: "We pack it fresh",
    text: "Your pickles are prepared and packed in small batches after you order.",
  },
  {
    icon: Truck,
    title: "Delivered in 7–10 days",
    text: "Sealed, cushioned, and shipped anywhere in India.",
  },
];

const HowItWorks = () => {
  return (
    <section className="container mx-auto px-4 py-16 sm:py-20">
      <div className="max-w-2xl mb-10">
        <p className="eyebrow mb-3">How ordering works</p>
        <h2 className="font-display text-4xl sm:text-5xl font-semibold text-foreground mb-4">
          From our kitchen to your thali
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          No apps, no accounts, no confusion — just four simple steps.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map(({ icon: Icon, title, text }, i) => (
          <div key={title} className="relative">
            <div className="flex items-center gap-4 mb-3">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-warm">
                <Icon className="h-6 w-6" />
              </span>
              <span className="font-display text-4xl font-semibold text-primary/25">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="font-semibold text-lg text-foreground mb-1.5">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;

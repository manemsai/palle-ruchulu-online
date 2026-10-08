import { ChefHat, Leaf, PackageCheck, Truck } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "No preservatives, ever",
    text: "Just oil, salt, sun, and spice — the way pickles were always meant to be made.",
  },
  {
    icon: ChefHat,
    title: "Family recipes",
    text: "Andhra recipes passed down generations, cooked the slow traditional way.",
  },
  {
    icon: PackageCheck,
    title: "Made fresh in small batches",
    text: "We prepare after you order, so every jar reaches you at peak flavour.",
  },
  {
    icon: Truck,
    title: "Delivered across India",
    text: "Carefully packed and shipped to your doorstep in 7–10 days.",
  },
];

const WhyUs = () => {
  return (
    <section className="bg-primary text-primary-foreground py-16 sm:py-20 relative overflow-hidden">
      <div className="absolute inset-0 texture-dots" />
      <div className="relative container mx-auto px-4">
        <div className="max-w-2xl mb-10">
          <p className="eyebrow !text-amber-300 mb-3">Why Palle Ruchulu</p>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold mb-4">
            Pickles with nothing to hide
          </h2>
          <p className="text-primary-foreground/85 leading-relaxed">
            Every jar is a promise — real ingredients, honest recipes, and the
            unmistakable taste of an Andhra home kitchen.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 p-6 hover:bg-white/15 transition-colors"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground mb-4">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="font-display text-xl font-semibold mb-2">{title}</h3>
              <p className="text-sm text-primary-foreground/80 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;

import { CookingPot, HandHeart, Sun, Wheat } from "lucide-react";

const principles = [
  {
    icon: Wheat,
    title: "Hand-pounded spices",
    text: "Mustard, fenugreek, and chilies are roasted and ground fresh for every batch — never pre-mixed powders.",
  },
  {
    icon: Sun,
    title: "Sun-matured",
    text: "Mangoes, lemons, and chilies cure in the sun the traditional way, building deep, rounded flavour.",
  },
  {
    icon: CookingPot,
    title: "Slow-cooked masalas",
    text: "Non-veg pickles are marinated overnight and simmered low and slow until the spice coats every piece.",
  },
  {
    icon: HandHeart,
    title: "Nothing artificial",
    text: "No preservatives, no added colour, no shortcuts. Salt, oil, sun, and spice do all the work.",
  },
];

const pairings = [
  "Hot rice + ghee",
  "Curd rice",
  "Dal & rice",
  "Parathas",
  "Dosa & idli",
  "Upma & khichdi",
  "Travel tiffins",
  "Papad & snacks",
];

const Craft = () => {
  return (
    <section className="bg-secondary/40 py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mb-10">
          <p className="eyebrow mb-3">Inside every jar</p>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-foreground mb-4">
            Honest ingredients, slow craft
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Great pickle can't be rushed. Here's what goes into ours — and the
            many ways a single spoonful can lift a meal.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {principles.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl bg-card border border-border p-6 shadow-card"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>

        <div className="rounded-3xl bg-[#2A120C] text-[#F5E9D6] px-6 py-10 sm:p-10 relative overflow-hidden">
          <div className="absolute inset-0 texture-dots opacity-60" />
          <div className="relative">
            <h3 className="font-display text-2xl sm:text-3xl font-semibold mb-2">
              One spoonful, endless pairings
            </h3>
            <p className="text-sm text-[#F5E9D6]/75 mb-6 max-w-xl">
              Our pickles and podis are made to sit at the centre of the thali.
              Try them with:
            </p>
            <div className="flex flex-wrap gap-2.5">
              {pairings.map((p) => (
                <span
                  key={p}
                  className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Craft;

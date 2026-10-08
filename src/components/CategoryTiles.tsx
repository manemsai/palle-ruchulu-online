import { ArrowRight } from "lucide-react";
import vegImg from "@/assets/avakaya.png";
import nonVegImg from "@/assets/chicken boneless.png";
import powderImg from "@/assets/karam-nalla.jpg";
import { SHOP_FILTER_EVENT } from "@/components/Shop";
import type { ShopProduct } from "@/components/Shop";

const tiles: { title: string; count: string; blurb: string; image: string; filter: ShopProduct["category"] }[] = [
  {
    title: "Veg Pickles",
    count: "13 recipes",
    blurb: "Avakaya, gongura, lemon & more",
    image: vegImg,
    filter: "veg",
  },
  {
    title: "Non-Veg Pickles",
    count: "10 recipes",
    blurb: "Chicken, mutton, prawns & fish",
    image: nonVegImg,
    filter: "nonveg",
  },
  {
    title: "Karam Powders",
    count: "6 blends",
    blurb: "Stone-ground spice podis",
    image: powderImg,
    filter: "powder",
  },
];

const CategoryTiles = () => {
  const go = (filter: ShopProduct["category"]) => {
    document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" });
    window.dispatchEvent(new CustomEvent(SHOP_FILTER_EVENT, { detail: filter }));
  };

  return (
    <section className="container mx-auto px-4 -mt-2 py-14">
      <div className="grid sm:grid-cols-3 gap-5">
        {tiles.map((t) => (
          <button
            key={t.title}
            onClick={() => go(t.filter)}
            className="group relative overflow-hidden rounded-2xl text-left shadow-card hover:shadow-warm transition-all duration-300 hover:-translate-y-1"
          >
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src={t.image}
                alt={t.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5 text-white">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-amber-300 mb-1">
                {t.count}
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-display text-2xl font-semibold">{t.title}</h3>
                  <p className="text-sm text-white/80">{t.blurb}</p>
                </div>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight className="h-5 w-5" />
                </span>
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};

export default CategoryTiles;

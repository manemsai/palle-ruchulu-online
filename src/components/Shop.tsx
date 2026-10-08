import { useEffect, useMemo, useState } from "react";
import { ArrowUpDown } from "lucide-react";
import ProductCard, { PriceTiers } from "./ProductCard";

export type ShopCategory = "veg" | "nonveg" | "powder";

export interface ShopProduct {
  name: string;
  description: string;
  image: string;
  badge?: string;
  prices?: PriceTiers;
  category: ShopCategory;
}

type Filter = "all" | ShopCategory;
type Sort = "featured" | "price-asc" | "price-desc" | "name";

const FILTERS: { id: Filter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "veg", label: "Veg Pickles" },
  { id: "nonveg", label: "Non-Veg Pickles" },
  { id: "powder", label: "Karam Powders" },
];

const SORTS: { id: Sort; label: string }[] = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "name", label: "Name: A to Z" },
];

export const SHOP_FILTER_EVENT = "palle:set-shop-filter";

const priceOf = (p: ShopProduct) => p.prices?.["250"] ?? Number.POSITIVE_INFINITY;

const Shop = ({ products }: { products: ShopProduct[] }) => {
  const [filter, setFilter] = useState<Filter>("all");
  const [sort, setSort] = useState<Sort>("featured");

  useEffect(() => {
    const handler = (e: Event) => {
      const f = (e as CustomEvent<Filter>).detail;
      if (f) setFilter(f);
    };
    window.addEventListener(SHOP_FILTER_EVENT, handler);
    return () => window.removeEventListener(SHOP_FILTER_EVENT, handler);
  }, []);

  const visible = useMemo(() => {
    const filtered =
      filter === "all" ? products : products.filter((p) => p.category === filter);
    const sorted = [...filtered];
    switch (sort) {
      case "price-asc":
        sorted.sort((a, b) => priceOf(a) - priceOf(b));
        break;
      case "price-desc":
        sorted.sort(
          (a, b) =>
            (b.prices?.["250"] ?? Number.NEGATIVE_INFINITY) -
            (a.prices?.["250"] ?? Number.NEGATIVE_INFINITY)
        );
        break;
      case "name":
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }
    return sorted;
  }, [products, filter, sort]);

  const counts = useMemo(() => {
    const c: Record<Filter, number> = {
      all: products.length,
      veg: 0,
      nonveg: 0,
      powder: 0,
    };
    products.forEach((p) => {
      c[p.category] += 1;
    });
    return c;
  }, [products]);

  return (
    <section id="shop" className="py-16 sm:py-20 scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mb-8">
          <p className="eyebrow mb-3">The collection</p>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-foreground mb-4">
            Shop all pickles & podis
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {products.length} homemade recipes — veg pickles, non-veg pickles, and
            stone-ground karam powders. Everything is made fresh in small batches.
          </p>
        </div>

        {/* Toolbar: filters + sort */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-3 sticky top-[68px] z-20 bg-background/95 backdrop-blur-sm py-3 -mx-4 px-4 border-y border-border/60">
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`rounded-full px-4 py-2 text-sm font-semibold border transition-colors ${
                  filter === f.id
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card text-foreground/75 border-border hover:border-primary/60"
                }`}
              >
                {f.label}
                <span
                  className={`ml-1.5 text-xs font-bold ${
                    filter === f.id ? "text-primary-foreground/80" : "text-muted-foreground"
                  }`}
                >
                  {counts[f.id]}
                </span>
              </button>
            ))}
          </div>

          <div className="md:ml-auto flex items-center gap-2">
            <ArrowUpDown className="h-4 w-4 text-muted-foreground" />
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as Sort)}
              className="rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground/85 focus:outline-none focus:border-primary cursor-pointer"
              aria-label="Sort products"
            >
              {SORTS.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground mb-6">
          Showing {visible.length} of {products.length} products
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {visible.map((product) => (
            <ProductCard
              key={product.name}
              name={product.name}
              description={product.description}
              image={product.image}
              badge={product.badge}
              prices={product.prices}
            />
          ))}
        </div>

        {visible.length === 0 && (
          <p className="text-center text-muted-foreground py-16">
            No products in this category yet — check back soon.
          </p>
        )}
      </div>
    </section>
  );
};

export default Shop;

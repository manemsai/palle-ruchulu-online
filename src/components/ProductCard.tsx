import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";


interface ProductCardProps {
  name: string;
  description: string;
  image: string;
  prices?: {
    "250": number;
    "500": number;
    "1000": number;
  };
}

const ProductCard = ({ name, description, image, prices }: ProductCardProps) => {
  const [size, setSize] = useState<"250" | "500" | "1000">("250");

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card">
      <div className="aspect-square overflow-hidden bg-secondary/20">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>

      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2 text-foreground">
          {name}
        </h3>

        <p className="text-sm text-muted-foreground">
          {description}
        </p>

        {prices && (
          <div className="mt-3 text-sm font-semibold text-primary space-y-1">
            {prices && (
  <div className="mt-4 space-y-3">
    {/* Size selector */}
    <select
      value={size}
      onChange={(e) => setSize(e.target.value as "250" | "500" | "1000")}
      className="w-full border rounded-md px-3 py-2 text-sm"
    >
      <option value="250">250g</option>
      <option value="500">500g</option>
      <option value="1000">1kg</option>
    </select>

    {/* Price */}
    <div className="text-xl font-bold text-primary">
      ₹{prices[size]}
    </div>

    {/* CTA */}
    <button className="w-full bg-primary text-white py-2 rounded-md hover:opacity-90 transition">
      Add to Cart
    </button>
  </div>
)}

          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ProductCard;

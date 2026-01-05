import ProductCard from "./ProductCard";

interface Product {
  name: string;
  description: string;
  image: string;
  prices?: {
    "250": number;
    "500": number;
    "1000": number;
  };
}

interface ProductSectionProps {
  id: string;
  title: string;
  products: Product[];
}

const ProductSection = ({ id, title, products }: ProductSectionProps) => {
  return (
    <section id={id} className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">
          {title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          {products.map((product, index) => (
            <ProductCard
              key={index}
              name={product.name}
              description={product.description}
              image={product.image}
              prices={product.prices}  
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;

import ProductCard from "./ProductCard";

interface Product {
  name: string;
  description: string;
}

interface ProductSectionProps {
  id: string;
  title: string;
  products: Product[];
  image: string;
}

const ProductSection = ({ id, title, products, image }: ProductSectionProps) => {
  return (
    <section id={id} className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              name={product.name}
              description={product.description}
              image={image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;

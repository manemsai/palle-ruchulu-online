import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProductSection from "@/components/ProductSection";
import About from "@/components/About";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import vegPickleImage from "@/assets/veg-pickle.jpg";
import nonvegPickleImage from "@/assets/nonveg-pickle.jpg";
import powderImage from "@/assets/powder.jpg";

const Index = () => {
  const vegPickles = [
    { name: "Mango (Avakaya)", description: "Traditional spicy mango pickle, homemade Andhra-style" },
    { name: "Pandu Mirchi", description: "Raw chili pickle with authentic spices" },
    { name: "Pandu Mirchi (Gongura)", description: "Raw chili with tangy gongura leaves" },
    { name: "Gongura", description: "Classic sour gongura leaves pickle" },
    { name: "Lemon", description: "Zesty lemon pickle with traditional flavors" },
    { name: "Allam (Ginger)", description: "Spicy ginger pickle, perfect digestive" },
    { name: "Pudina", description: "Fresh mint leaves pickle with aromatic spices" },
    { name: "Usirikaya (Amla)", description: "Healthy amla pickle, rich in Vitamin C" },
    { name: "Cauliflower", description: "Crunchy cauliflower pickle, homemade style" },
    { name: "Kakarakaya", description: "Bitter gourd pickle with balanced flavors" },
    { name: "Munagakaya", description: "Drumstick pickle, traditional Andhra recipe" },
    { name: "Tomato", description: "Tangy tomato pickle with aromatic spices" },
    { name: "Kanda", description: "Onion pickle, sweet and spicy blend" },
  ];

  const nonVegPickles = [
    { name: "Chicken (with Bone)", description: "Authentic bone-in chicken pickle with spices" },
    { name: "Chicken (Boneless)", description: "Tender boneless chicken pickle" },
    { name: "Gongura Chicken", description: "Chicken with tangy gongura leaves" },
    { name: "Mutton (with Bone)", description: "Rich mutton pickle with bone, traditional style" },
    { name: "Mutton (Boneless)", description: "Premium boneless mutton pickle" },
    { name: "Gongura Mutton", description: "Mutton with sour gongura, classic Andhra taste" },
    { name: "Prawns", description: "Coastal-style prawn pickle with spices" },
    { name: "Gongura Prawns", description: "Prawns with tangy gongura flavor" },
    { name: "Koramenu Fish", description: "Traditional fish pickle, homemade recipe" },
    { name: "Gongura Boti", description: "Mutton pieces with gongura, spicy and tangy" },
  ];

  const karamPowders = [
    { name: "Nalla Karam", description: "Traditional black sesame karam powder" },
    { name: "Karivepaku Karam", description: "Curry leaves karam, aromatic and healthy" },
    { name: "Velluli Karam", description: "Garlic karam powder, rich flavor" },
    { name: "Munagaku Karam", description: "Drumstick leaves karam, nutritious" },
    { name: "Kandhi Karam", description: "Red chili karam, pure and spicy" },
    { name: "Kakarakaya Karam", description: "Bitter gourd karam, healthy blend" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <Hero />
        <ProductSection
          id="veg-pickles"
          title="Veg Pickles"
          products={vegPickles}
          image={vegPickleImage}
        />
        <ProductSection
          id="nonveg-pickles"
          title="Non-Veg Pickles"
          products={nonVegPickles}
          image={nonvegPickleImage}
        />
        <ProductSection
          id="powders"
          title="Karam Powders"
          products={karamPowders}
          image={powderImage}
        />
        <About />
        <Footer />
        <WhatsAppFloat />
      </div>
    </div>
  );
};

export default Index;

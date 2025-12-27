import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProductSection from "@/components/ProductSection";
import About from "@/components/About";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import powderImage from "@/assets/powder.jpg";

// Veg
import allamImg from "@/assets/Allam (Ginger).png";
import mangoImg from "@/assets/avakaya.png";
import gonguraImg from "@/assets/Gongura.png";
import gonguraMirchiImg from "@/assets/Pandu Mirchi (Gongura).png";
import lemonImg from "@/assets/Lemon.png";
// import mintImg from "@/assets/Mint.png";
import cauliflowerImg from "@/assets/Cauliflower.png";
import kakarakayaImg from "@/assets/Kakarakaya.png";
import panduMirchiImg from "@/assets/Pandu Mirchi.png";
import tomatoImg from "@/assets/Tomato.png";
import kandaImg from "@/assets/Kanda Onion.png";
import munagakayaImg from "@/assets/Munagakaya.png";
import pudinaImg from "@/assets/Pudina.png";
import usirikayaImg from "@/assets/Usirikaya (Amla).png";

// Non-Veg
import chickenBoneImg from "@/assets/chicken bone.png";
import chickenBonelessImg from "@/assets/chicken boneless.png";
import gonguraChickenImg from "@/assets/Gongura Chicken.png";
import gonguramuttonImg from "@/assets/Gongura Mutton.png";
import botiImg from "@/assets/Gongura Boti.png";
import eggImg from "@/assets/egg.png";
import koramenuImg from "@/assets/Koramenu Fish.png"; 
import gongurachittiroyyaluImg from "@/assets/Gongura Chitti Royyala Pachadi.png";
import prawnsgImg from "@/assets/prawns.png";
import muttonImg from "@/assets/mutton.png";



const Index = () => {
  const vegPickles = [
    { name: "Mango (Avakaya)", description: "Traditional spicy mango pickle, homemade Andhra-style",image:mangoImg },
    { name: "Pandu Mirchi", description: "Raw chili pickle with authentic spices",image: panduMirchiImg },
    { name: "Pandu Mirchi (Gongura)", description: "Raw chili with tangy gongura leaves",image:gonguraMirchiImg},
    { name: "Gongura", description: "Classic sour gongura leaves pickle",image:gonguraImg },
    { name: "Lemon", description: "Zesty lemon pickle with traditional flavors",image:lemonImg },
    { name: "Allam (Ginger)", description: "Spicy ginger pickle, perfect digestive",image:allamImg },
    { name: "Pudina", description: "Fresh mint leaves pickle with aromatic spices",image:pudinaImg },
    { name: "Usirikaya (Amla)", description: "Healthy amla pickle, rich in Vitamin C",image:usirikayaImg },
    { name: "Cauliflower", description: "Crunchy cauliflower pickle, homemade style",image:cauliflowerImg },
    { name: "Kakarakaya", description: "Bitter gourd pickle with balanced flavors",image:kakarakayaImg },
    { name: "Munagakaya", description: "Drumstick pickle, traditional Andhra recipe",image:munagakayaImg },
    { name: "Tomato", description: "Tangy tomato pickle with aromatic spices",image:tomatoImg },
    { name: "Kanda", description: "Traditional yam pickle with rich Andhra spices",image:kandaImg },
    // { name: "Mint", description: "Fresh mint leaves pickle with a cool, aromatic taste",image:mintImg },
  ];

  const nonVegPickles = [
    { name: "Chicken (with Bone)", description: "Authentic bone-in chicken pickle with spices",image:chickenBoneImg },
    { name: "Chicken (Boneless)", description: "Tender boneless chicken pickle",image:chickenBonelessImg },
    { name: "Gongura Chicken", description: "Chicken with tangy gongura leaves",image:gonguraChickenImg },
    { name: "Mutton (with Bone)", description: "Rich mutton pickle with bone, traditional style",image:muttonImg },
    { name: "Gongura Mutton", description: "Mutton with sour gongura, classic Andhra taste",image:gonguramuttonImg },
    { name: "Prawns", description: "Coastal-style prawn pickle with spices",image:prawnsgImg },
    { name: "Egg", description: "Homemade Egg pickle",image:eggImg },
    { name: "Koramenu Fish", description: "Traditional fish pickle, homemade recipe",image:koramenuImg },
    { name: "Gongura Boti", description: "Mutton pieces with gongura, spicy and tangy",image:botiImg },
    { name: "gongura chitti royyalu", description: "Mutton pieces with gongura, spicy and tangy",image:gongurachittiroyyaluImg}
  ];

  const karamPowders = [
    { name: "Nalla Karam", description: "Traditional black sesame karam powder",image: powderImage },
    { name: "Karivepaku Karam", description: "Curry leaves karam, aromatic and healthy",image: powderImage },
    { name: "Velluli Karam", description: "Garlic karam powder, rich flavor",image: powderImage },
    { name: "Munagaku Karam", description: "Drumstick leaves karam, nutritious",image: powderImage },
    { name: "Kandhi Karam", description: "Red chili karam, pure and spicy",image: powderImage },
    { name: "Kakarakaya Karam", description: "Bitter gourd karam, healthy blend",image: powderImage },
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

        />
        <ProductSection
          id="nonveg-pickles"
          title="Non-Veg Pickles"
          products={nonVegPickles}
        />
        <ProductSection
          id="powders"
          title="Karam Powders"
          products={karamPowders}
        />
        <About />
        <Footer />
        <WhatsAppFloat />
      </div>
    </div>
  );
};

export default Index;

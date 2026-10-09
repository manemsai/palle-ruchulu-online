import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import CategoryTiles from "@/components/CategoryTiles";
import Shop, { ShopProduct } from "@/components/Shop";
import Craft from "@/components/Craft";
import WhyUs from "@/components/WhyUs";
import HowItWorks from "@/components/HowItWorks";
import WhatsappPromo from "@/components/WhatsappPromo";
import About from "@/components/About";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { vegPickles, nonVegPickles, karamPowders } from "@/lib/picklePrices";

// Veg images
import allamImg from "@/assets/Allam (Ginger).png";
import mangoImg from "@/assets/avakaya.png";
import gonguraImg from "@/assets/Gongura.png";
import gonguraMirchiImg from "@/assets/Pandu Mirchi (Gongura).png";
import lemonImg from "@/assets/Lemon.png";
import cauliflowerImg from "@/assets/Cauliflower.png";
import kakarakayaImg from "@/assets/Kakarakaya.png";
import panduMirchiImg from "@/assets/Pandu Mirchi.png";
import tomatoImg from "@/assets/tomato.png";
import kandaImg from "@/assets/Kanda Onion.png";
import munagakayaImg from "@/assets/Munagakaya.png";
import pudinaImg from "@/assets/Pudina.png";
import usirikayaImg from "@/assets/Usirikaya (Amla).png";

// Non-veg images
import chickenBoneImg from "@/assets/chicken bone.png";
import chickenBonelessImg from "@/assets/chicken boneless.png";
import gonguraChickenImg from "@/assets/Gongura Chicken.png";
import gonguraMuttonImg from "@/assets/Gongura Mutton.png";
import botiImg from "@/assets/Gongura Boti.png";
import eggImg from "@/assets/egg.png";
import koramenuImg from "@/assets/Koramenu Fish.png";
import gonguraChittiRoyyaluImg from "@/assets/Gongura Chitti Royyala Pachadi.png";
import prawnsImg from "@/assets/prawns.png";
import muttonImg from "@/assets/mutton.png";

// Karam powder images — one distinct photo per blend
import nallaKaramImg from "@/assets/karam-nalla.jpg";
import karivepakuKaramImg from "@/assets/karam-karivepaku.jpg";
import velluliKaramImg from "@/assets/karam-velluli.jpg";
import munagakuKaramImg from "@/assets/karam-munagaku.jpg";
import kandhiKaramImg from "@/assets/karam-kandhi.jpg";
import kakarakayaKaramImg from "@/assets/karam-kakarakaya.jpg";

const Index = () => {
  const veg: ShopProduct[] = [
    { name: "Mango (Avakaya)", description: "The legendary Andhra mango pickle — sun-matured raw mango in fiery mustard-spiced oil.", image: mangoImg, badge: "Bestseller", category: "veg" },
    { name: "Pandu Mirchi", description: "Plump raw chilies pickled whole with authentic roasted spices.", image: panduMirchiImg, category: "veg" },
    { name: "Pandu Mirchi (Gongura)", description: "Raw chilies layered with tangy gongura leaves — heat meets sour.", image: gonguraMirchiImg, category: "veg" },
    { name: "Gongura", description: "The classic sorrel-leaf pickle every Andhra home swears by.", image: gonguraImg, badge: "Bestseller", category: "veg" },
    { name: "Lemon", description: "Zesty lemons cured with turmeric and spice — bright, tangy, addictive.", image: lemonImg, category: "veg" },
    { name: "Allam (Ginger)", description: "Fiery ginger pickle; a spoonful wakes up any meal — and digestion.", image: allamImg, category: "veg" },
    { name: "Pudina", description: "Fresh mint leaves pounded with aromatic spices — cooling with a kick.", image: pudinaImg, category: "veg" },
    { name: "Usirikaya (Amla)", description: "Vitamin-C rich amla in traditional spiced oil — health in a jar.", image: usirikayaImg, category: "veg" },
    { name: "Cauliflower", description: "Crunchy cauliflower florets in homestyle masala — texture in every bite.", image: cauliflowerImg, category: "veg" },
    { name: "Kakarakaya", description: "Bitter gourd balanced with spice — bittersweet and bold.", image: kakarakayaImg, category: "veg" },
    { name: "Munagakaya", description: "Drumstick in a traditional Andhra masala — deep, earthy flavour.", image: munagakayaImg, category: "veg" },
    { name: "Tomato", description: "Slow-cooked tomato thokku with roasted spices — sweet, sour, spicy.", image: tomatoImg, category: "veg" },
    { name: "Kanda", description: "Traditional yam pickle with rich Andhra spices — hearty and rustic.", image: kandaImg, category: "veg" },
  ];

  const nonVeg: ShopProduct[] = [
    { name: "Chicken (with Bone)", description: "Bone-in chicken steeped in fiery homestyle masala — the classic.", image: chickenBoneImg, category: "nonveg" },
    { name: "Chicken (Boneless)", description: "Tender boneless chicken pieces in rich, spicy pickle masala.", image: chickenBonelessImg, badge: "Bestseller", category: "nonveg" },
    { name: "Gongura Chicken", description: "Chicken meets tangy gongura — Andhra's most loved combination.", image: gonguraChickenImg, badge: "Bestseller", category: "nonveg" },
    { name: "Mutton (with Bone)", description: "Slow-marinated mutton on the bone in deep, traditional spices.", image: muttonImg, category: "nonveg" },
    { name: "Gongura Mutton", description: "Mutton folded into sour gongura — rich, tangy, unforgettable.", image: gonguraMuttonImg, category: "nonveg" },
    { name: "Prawns", description: "Coastal-style prawns in a fiery, aromatic pickle masala.", image: prawnsImg, badge: "Bestseller", category: "nonveg" },
    { name: "Egg", description: "Homestyle egg pickle — simple, spicy, and deeply comforting.", image: eggImg, category: "nonveg" },
    { name: "Koramenu Fish", description: "Traditional murrel fish pickle, made the old village way.", image: koramenuImg, category: "nonveg" },
    { name: "Gongura Boti", description: "Tender mutton pieces with gongura — spicy, tangy, bold.", image: botiImg, category: "nonveg" },
    { name: "Gongura Chitti Royyalu", description: "Tiny prawns in zesty gongura masala — a coastal delicacy.", image: gonguraChittiRoyyaluImg, category: "nonveg" },
  ];

  const powders: ShopProduct[] = [
    { name: "Nalla Karam", description: "Roasted black sesame & lentil podi — nutty, deep, and intensely savoury.", image: nallaKaramImg, badge: "Bestseller", category: "powder" },
    { name: "Karivepaku Karam", description: "Curry-leaf podi, stone-ground — aromatic and full of iron.", image: karivepakuKaramImg, category: "powder" },
    { name: "Velluli Karam", description: "Garlic podi with roasted lentils — bold flavour for rice and ghee.", image: velluliKaramImg, category: "powder" },
    { name: "Munagaku Karam", description: "Moringa-leaf podi — the nutritious green powder of Andhra kitchens.", image: munagakuKaramImg, category: "powder" },
    { name: "Kandhi Karam", description: "Pure red-chili & toor-dal podi — the fiery classic.", image: kandhiKaramImg, category: "powder" },
    { name: "Kakarakaya Karam", description: "Bitter-gourd podi — a healthy, bittersweet blend.", image: kakarakayaKaramImg, category: "powder" },
  ];

  const priceList = [...vegPickles, ...nonVegPickles, ...karamPowders];
  const allProducts: ShopProduct[] = [...veg, ...nonVeg, ...powders].map((item) => {
    const priceInfo = priceList.find(
      (p) => p.name.toLowerCase() === item.name.toLowerCase()
    );
    return { ...item, prices: priceInfo?.prices };
  });

  return (
    <div className="min-h-screen">
      <Navigation />
      <WhatsappPromo />
      <Hero />
      <CategoryTiles />
      <Shop products={allProducts} />
      <Craft />
      <WhyUs />
      <HowItWorks />
      <About />
      <Faq />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;

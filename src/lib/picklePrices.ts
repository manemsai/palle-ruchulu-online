export type PicklePrice = {
  id: string;
  name: string;
  prices: {
    "250": number;
    "500": number;
    "1000": number;
  };
};

export const vegPickles: PicklePrice[] = [
  { id: "avakaya", name: "Mango (Avakaya)", prices: { "250": 275, "500": 525, "1000": 850 } },
  { id: "pandu mirchi (gongura)", name: "Pandu mirchi (Gongura)", prices: { "250": 275, "500": 525, "1000": 850 } },
  { id: "gongura", name: "Gongura", prices: { "250": 275, "500": 525, "1000": 850 } },
  { id: "lemon", name: "Lemon", prices: { "250": 275, "500": 525, "1000": 850 } },
  { id: "ginger", name: "Allam (Ginger)", prices: { "250": 275, "500": 525, "1000": 850 } },
  { id: "mint", name: "Pudina", prices: { "250": 275, "500": 525, "1000": 850 } },
  { id: "amla", name: "Usirikaya (Amla)", prices: { "250": 275, "500": 525, "1000": 850 } },
  { id: "cauliflower", name: "Cauliflower", prices: { "250": 275, "500": 525, "1000": 850 } },
  { id: "kakarakay", name: "Kakarakaya", prices: { "250": 275, "500": 525, "1000": 850 } },
  { id: "pandu-mirchi", name: "Pandu Mirchi", prices: { "250": 275, "500": 525, "1000": 850 } },
  { id: "tomato", name: "Tomato", prices: { "250": 275, "500": 525, "1000": 850 } },
  { id: "kanda", name: "Kanda", prices: { "250": 275, "500": 525, "1000": 850 } },
  { id: "munagakay", name: "Munagakaya", prices: { "250": 275, "500": 525, "1000": 850 } },
];

export const nonVegPickles: PicklePrice[] = [
  { id: "chicken-boneless", name: "Chicken (Boneless)", prices: { "250": 450, "500": 775, "1000": 1450 } },
  { id: "chicken-bone", name: "Chicken (with Bone)", prices: { "250": 350, "500": 600, "1000": 1100 } },
  { id: "gongura-chicken", name: "Gongura Chicken", prices: { "250": 450, "500": 775, "1000": 1450 } },
  { id: "mutton", name: "Mutton (with bone)", prices: { "250": 725, "500": 1350, "1000": 2400 } },
  { id: "gongura-mutton", name: "Gongura Mutton", prices: { "250": 725, "500": 1350, "1000": 2400 } },
  { id: "boti-gongura", name: "Gongura Boti", prices: { "250": 350, "500": 600, "1000": 1100 } },
  { id: "egg", name: "Egg", prices: { "250": 250, "500": 500, "1000": 800 } },
  { id: "prawns", name: "Prawns", prices: { "250": 600, "500": 1100, "1000": 2000 } },
  { id: "gongura-prawns", name: "Gongura Chitti Royyalu", prices: { "250": 650, "500": 1150, "1000": 2100 } },
  { id: "koramenu", name: "Koramenu Fish", prices: { "250": 650, "500": 1150, "1000": 2100 } },
];

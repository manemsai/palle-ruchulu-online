import { createContext, useContext, useState, ReactNode } from "react";

type CartItem = {
  name: string;
  image: string;
  size: "250" | "500" | "1000";
  price: number;
  quantity: number;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  updateQuantity: (name: string, size: CartItem["size"], qty: number) => void;
  removeItem: (name: string, size: CartItem["size"]) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCart((prev) => {
      const existing = prev.find(
        (p) => p.name === item.name && p.size === item.size
      );

      if (existing) {
        return prev.map((p) =>
          p.name === item.name && p.size === item.size
            ? { ...p, quantity: p.quantity + 1 }
            : p
        );
      }

      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const updateQuantity = (
    name: string,
    size: CartItem["size"],
    qty: number
  ) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.name === name && item.size === size
            ? { ...item, quantity: qty }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (name: string, size: CartItem["size"]) => {
    setCart((prev) =>
      prev.filter(
        (item) => !(item.name === name && item.size === size)
      )
    );
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, updateQuantity, removeItem }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }
  return context;
};

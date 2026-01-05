import { X, Plus, Minus, Trash2 } from "lucide-react";
import { useCart } from "@/components/CartContext";


interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

const CartDrawer = ({ open, onClose }: CartDrawerProps) => {
  const { cart, updateQuantity, removeItem } = useCart();


  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 h-full w-full max-w-sm bg-white shadow-lg flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">

          <h2 className="text-lg font-bold">Your Cart</h2>
          <button onClick={onClose}>
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">

          {cart.length === 0 && (
            <p className="text-sm text-muted-foreground">
              Your cart is empty
            </p>
          )}

          {cart.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 border-b pb-3"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-14 h-14 rounded object-cover"
              />

              <div className="flex-1">
  <p className="font-medium">{item.name}</p>
  <p className="text-sm text-muted-foreground">
    {item.size === "1000" ? "1kg" : `${item.size}g`}

  </p>

  {/* Quantity controls */}
  <div className="flex items-center gap-2 mt-1">
    <button
      onClick={() =>
        updateQuantity(item.name, item.size, item.quantity - 1)
      }
      className="p-1 border rounded"
    >
      <Minus className="w-3 h-3" />
    </button>

    <span className="text-sm font-semibold">
      {item.quantity}
    </span>

    <button
      onClick={() =>
        updateQuantity(item.name, item.size, item.quantity + 1)
      }
      className="p-1 border rounded"
    >
      <Plus className="w-3 h-3" />
    </button>
  </div>
</div>

<div className="text-right">
  <p className="font-semibold">
    ₹{item.price * item.quantity}
  </p>

  <button
    onClick={() => removeItem(item.name, item.size)}
    className="mt-1 text-red-500 hover:text-red-600"
  >
    <Trash2 className="w-4 h-4" />
  </button>
</div>

            </div>
          ))}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="border-t p-4 bg-background">

            <div className="flex justify-between font-semibold mb-3">
              <span>Total</span>
              <span>₹{total}</span>
            </div>

            <button className="w-full bg-primary text-white py-2 rounded-md">
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;

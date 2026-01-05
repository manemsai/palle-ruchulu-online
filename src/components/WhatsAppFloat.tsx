import { Phone } from "lucide-react";

interface WhatsAppFloatProps {
  hidden?: boolean;
}

const WhatsAppFloat = ({ hidden }: WhatsAppFloatProps) => {
  if (hidden) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        onClick={() => window.open("https://wa.me/919848803193", "_blank")}
        className="bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-lg flex items-center justify-center"
      >
        <Phone className="w-5 h-5" />
      </button>
    </div>
  );
};

export default WhatsAppFloat;

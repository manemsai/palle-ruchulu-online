import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  return (
    <Button
      onClick={() => window.open("https://wa.me/919848803193", "_blank")}
      className="fixed bottom-6 right-6 rounded-full w-16 h-16 bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-lg hover:shadow-xl transition-all z-50"
      size="icon"
    >
      <MessageCircle className="w-8 h-8" />
    </Button>
  );
};

export default WhatsAppFloat;

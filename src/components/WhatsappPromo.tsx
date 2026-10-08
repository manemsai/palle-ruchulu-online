import { MessageCircle } from "lucide-react";
import { WHATSAPP_DISPLAY, waLink } from "@/lib/site";
import promoPickles from "@/assets/promo-pickles.gif";
import promoSpices from "@/assets/promo-spices.gif";

const WhatsappPromo = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#7a1a12] via-[#5c130d] to-[#2A120C] py-16 sm:py-20">
      <div className="absolute inset-0 texture-dots opacity-40" />
      <div className="relative container mx-auto px-4 text-center">
        <p className="text-amber-300 text-xs font-bold uppercase tracking-[0.3em] mb-3">
          Straight from our kitchen
        </p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#F5E9D6] mb-3">
          Craving pickles right now?
        </h2>
        <p className="text-[#F5E9D6]/80 max-w-xl mx-auto mb-10">
          Message us your favourites on WhatsApp and we pack them fresh —
          no apps, no accounts, just homemade taste.
        </p>

        <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto mb-10">
          <img
            src={promoPickles}
            alt="Fresh homemade mango pickle being packed — order on WhatsApp"
            loading="lazy"
            className="w-full rounded-2xl border border-white/10 shadow-2xl"
          />
          <img
            src={promoSpices}
            alt="Spices swirling around pickle jars — order on WhatsApp"
            loading="lazy"
            className="w-full rounded-2xl border border-white/10 shadow-2xl"
          />
        </div>

        <button
          onClick={() =>
            window.open(
              waLink("Hi! I'd like to order pickles from Palle Ruchulu."),
              "_blank"
            )
          }
          className="inline-flex items-center gap-2.5 bg-[#1FA855] hover:bg-[#178A45] text-white font-bold text-lg px-8 py-4 rounded-full shadow-2xl transition-all hover:scale-105"
        >
          <MessageCircle className="w-6 h-6" />
          Order on WhatsApp
        </button>
        <p className="text-[#F5E9D6]/70 font-mono font-semibold tracking-wider mt-4">
          {WHATSAPP_DISPLAY}
        </p>
      </div>
    </section>
  );
};

export default WhatsappPromo;

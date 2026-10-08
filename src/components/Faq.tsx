import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Do your pickles contain preservatives?",
    a: "No — never. Our pickles are preserved the traditional way with salt, oil, sun-maturing, and spices. That's it.",
  },
  {
    q: "How long does delivery take?",
    a: "Orders are prepared fresh in small batches and delivered across India in 7–10 days. Each jar is sealed and cushioned for safe travel.",
  },
  {
    q: "How do I place an order and pay?",
    a: "Add items to your cart and check out — your order details go straight to us on WhatsApp. We'll confirm your order, share the total including shipping, and collect payment then.",
  },
  {
    q: "What pack sizes are available?",
    a: "Most pickles come in 250g, 500g, and 1kg packs. Choose your size on any product card before adding it to the cart.",
  },
  {
    q: "How should I store the pickles?",
    a: "Keep jars in a cool, dry place and always use a clean, dry spoon. Refrigeration after opening keeps non-veg pickles at their best.",
  },
  {
    q: "What are the prices of the karam powders?",
    a: "Tap “Ask price on WhatsApp” on any karam powder and we'll reply with the current price right away.",
  },
];

const Faq = () => {
  return (
    <section id="faq" className="container mx-auto px-4 py-16 sm:py-20 scroll-mt-24">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <p className="eyebrow mb-3 !justify-center mx-auto">Good to know</p>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-foreground mb-4">
            Frequently asked questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-2xl border border-border bg-card px-6 shadow-card data-[state=open]:shadow-warm"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;

import aboutImage from "@/assets/about-kitchen.jpg";

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 scroll-mt-24 bg-secondary/40">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-warm">
              <img
                src={aboutImage}
                alt="Hands mixing fresh mango pickle in a traditional Indian kitchen"
                className="w-full aspect-[4/3] object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-5 -right-3 sm:right-8 rounded-2xl bg-primary text-primary-foreground px-6 py-4 shadow-warm">
              <p className="font-display text-3xl font-semibold">100%</p>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] opacity-90">
                Homemade
              </p>
            </div>
          </div>

          <div>
            <p className="eyebrow mb-3">Our story</p>
            <h2 className="font-display text-4xl sm:text-5xl font-semibold text-foreground mb-6">
              Palle Ruchulu means
              <span className="italic text-primary"> “taste of the village”</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                At Palle Ruchulu Pickles, we bring the authentic taste of Andhra
                Pradesh right to your home. Our pickles and karam powders are
                prepared using traditional family recipes passed down through
                generations.
              </p>
              <p>
                Everything is made fresh in small batches with the finest
                ingredients — each jar filled with the love and care of homemade
                cooking. From spicy avakaya mangoes to tangy gongura and aromatic
                karam podis, every product is crafted to bring back memories of
                traditional Andhra cuisine.
              </p>
              <p className="font-semibold text-foreground">
                No preservatives, no artificial flavours — just pure, authentic taste.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

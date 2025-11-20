const About = () => {
  return (
    <section id="about" className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-primary">About Us</h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg mb-6 text-foreground leading-relaxed">
            At <span className="font-semibold text-primary">Palle Ruchulu Pickles</span>, we bring you the authentic taste of Andhra Pradesh right to your home. 
            Our pickles and karam powders are prepared using traditional family recipes that have been passed down through generations.
          </p>
          <p className="text-lg mb-6 text-foreground leading-relaxed">
            We take pride in making everything fresh in small batches, using only the finest ingredients. 
            Each jar is filled with the love and care of homemade cooking, ensuring you get that genuine village flavor 
            (Palle Ruchulu) in every bite.
          </p>
          <p className="text-lg text-foreground leading-relaxed">
            From spicy Avakaya mangoes to flavorful Gongura and aromatic Karam powders, 
            every product is crafted to bring back memories of traditional Andhra cuisine. 
            No preservatives, no artificial flavors – just pure, authentic taste.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

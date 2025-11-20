import { Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Palle Ruchulu Pickles</h3>
            <p className="text-sm opacity-90">
              Authentic Andhra-style homemade pickles and powders, made with love and tradition.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <a href="#veg-pickles" className="hover:opacity-100 transition-opacity">
                  Veg Pickles
                </a>
              </li>
              <li>
                <a href="#nonveg-pickles" className="hover:opacity-100 transition-opacity">
                  Non-Veg Pickles
                </a>
              </li>
              <li>
                <a href="#powders" className="hover:opacity-100 transition-opacity">
                  Karam Powders
                </a>
              </li>
              <li>
                <a href="#about" className="hover:opacity-100 transition-opacity">
                  About Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-lg">Contact Us</h4>
            <div className="space-y-3">
              <a
                href="https://wa.me/919844803193"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:opacity-100 opacity-90 transition-opacity"
              >
                <Phone className="w-4 h-4" />
                +91 98448 03193
              </a>
              <p className="text-sm opacity-90">Order via WhatsApp for fresh, homemade pickles!</p>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-sm opacity-80">
          © 2025 Palle Ruchulu Pickles. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

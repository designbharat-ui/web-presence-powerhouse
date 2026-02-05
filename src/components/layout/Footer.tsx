import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const footerLinks = {
  products: [
    { name: "SS 304 Sheets", href: "/products/ss-sheets.html" },
    { name: "Car Operative Panels", href: "/products/panels.html" },
    { name: "Spare Parts", href: "/products/spare-parts.html" },
    { name: "Multimedia Displays", href: "/products/displays.html" },
    { name: "Safety Equipment", href: "/products/safety.html" },
  ],
  company: [
    { name: "About Us", href: "/about.html" },
    { name: "Our Projects", href: "/projects.html" },
    { name: "Our Clients", href: "/clients.html" },
    { name: "Installation Services", href: "/services/installation.html" },
    { name: "Contact", href: "/contact.html" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-footer text-white">
      {/* Newsletter section */}
      <div className="border-b border-white/10">
        <div className="container py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl mb-2 text-white">Stay Updated</h3>
              <p className="text-white/70">Subscribe to our newsletter for latest products and industry news.</p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="md:w-80 bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
              <Button className="bg-white text-primary hover:bg-white/90 shrink-0">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company info */}
          <div>
            <Link to="/index.html" className="flex items-center gap-3 mb-6">
              <img 
                src="/images/onetouch-logo.png" 
                alt="OneTouch Industrial & Power Solutions" 
               className="h-28 w-auto"
              />
            </Link>
            <p className="text-white/70 mb-6">
              ISO 9001:2015 certified company specializing in industrial solutions - elevators, building systems, and infrastructure projects. 
              Serving India with excellence since 2005.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-lg bg-white/10 hover:bg-white hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-white/10 hover:bg-white hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-white/10 hover:bg-white hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-display text-lg mb-6 text-white">Products</h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-display text-lg mb-6 text-white">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-lg mb-6 text-white">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a href="tel:+919711312081" className="flex items-start gap-3 text-white/70 hover:text-white transition-colors">
                  <Phone className="h-5 w-5 shrink-0 mt-0.5" />
                  <span>+91 9711312081</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@onetouchindustrialsolutions.com" className="flex items-start gap-3 text-white/70 hover:text-white transition-colors">
                  <Mail className="h-5 w-5 shrink-0 mt-0.5" />
                  <span>info@onetouchindustrialsolutions.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <MapPin className="h-5 w-5 shrink-0 mt-0.5" />
                <span>Delhi, India</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
          <p>© 2026 OneTouch Industrial & Power Solutions. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link to="/sitemap.html" className="hover:text-white transition-colors">Sitemap</Link>
            <span className="text-white/40">|</span>
            <span>
              Site design & maintain by{" "}
              <a 
                href="https://wa.me/919871307796?text=Hello%20Bharat%2C%20I%20visited%20OneTouch%20Industrial%20Solutions%20website%20and%20would%20like%20to%20connect%20with%20you."
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary-foreground underline transition-colors"
              >
                Bharat Arora
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

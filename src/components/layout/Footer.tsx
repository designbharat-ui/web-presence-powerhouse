import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const footerLinks = {
  products: [
    { name: "SS 304 Sheets", href: "/products/ss-sheets" },
    { name: "Car Operative Panels", href: "/products/panels" },
    { name: "Spare Parts", href: "/products/spare-parts" },
    { name: "Multimedia Displays", href: "/products/displays" },
    { name: "Safety Equipment", href: "/products/safety" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Projects", href: "/projects" },
    { name: "Our Clients", href: "/clients" },
    { name: "Installation Services", href: "/services/installation" },
    { name: "Contact", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-secondary/30 border-t border-border">
      {/* Newsletter section */}
      <div className="border-b border-border">
        <div className="container py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl mb-2">Stay Updated</h3>
              <p className="text-muted-foreground">Subscribe to our newsletter for latest products and industry news.</p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="md:w-80 bg-background"
              />
              <Button className="bg-gradient-gold text-primary-foreground shrink-0">
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
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="h-12 w-12 bg-gradient-gold rounded-lg flex items-center justify-center">
                <span className="font-display text-2xl text-primary-foreground">OT</span>
              </div>
              <div>
                <h2 className="font-display text-xl">OneTouch</h2>
                <p className="text-xs text-muted-foreground">Industrial Solutions</p>
              </div>
            </Link>
            <p className="text-muted-foreground mb-6">
              ISO 9001:2015 certified company specializing in elevator and escalator solutions. 
              21 years of expertise serving Morocco's vertical transportation industry.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-display text-lg mb-6 text-primary">Products</h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-display text-lg mb-6 text-primary">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-lg mb-6 text-primary">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a href="tel:+919711312081" className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="h-5 w-5 shrink-0 mt-0.5" />
                  <span>+91 9711312081</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@onetouchindustrialsolutions.com" className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="h-5 w-5 shrink-0 mt-0.5" />
                  <span>info@onetouchindustrialsolutions.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5 shrink-0 mt-0.5" />
                <span>Delhi, India</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2024 OneTouch Industrial & Power Solutions. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

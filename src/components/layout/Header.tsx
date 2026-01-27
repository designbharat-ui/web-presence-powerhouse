import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  {
    name: "Products & Services",
    href: "/products",
    children: [
      { name: "SS 304 Sheets", href: "/products/ss-sheets" },
      { name: "Car Operative Panels", href: "/products/panels" },
      { name: "Spare Parts", href: "/products/spare-parts" },
      { name: "Multimedia Displays", href: "/products/displays" },
      { name: "Safety Equipment", href: "/products/safety" },
      { name: "Entrances & Architraves", href: "/products/entrances" },
      { name: "Tools & Equipment", href: "/products/tools" },
      { name: "Installation Services", href: "/services/installation" },
      { name: "Building & Cladding", href: "/services/building-systems" },
      { name: "Vertical Gardens", href: "/services/vertical-gardens" },
      { name: "Scientific & Agriculture", href: "/services/scientific-agriculture" },
    ],
  },
  { name: "Projects", href: "/projects" },
  { name: "Clients", href: "/clients" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar */}
      <div className="bg-primary/10 border-b border-border/50 hidden md:block">
        <div className="container flex justify-between items-center py-2 text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+919711312081" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Phone className="h-4 w-4" />
              <span>+91 9711312081</span>
            </a>
            <a href="mailto:info@onetouchindustrialsolutions.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Mail className="h-4 w-4" />
              <span>info@onetouchindustrialsolutions.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-muted-foreground">ISO 9001:2015 Certified</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="glass border-b border-border/50">
        <div className="container flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="h-12 w-12 bg-gradient-gold rounded-lg flex items-center justify-center">
              <span className="font-display text-2xl text-primary-foreground">OT</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-display text-xl tracking-wide text-foreground">OneTouch</h1>
              <p className="text-xs text-muted-foreground">Industrial Solutions</p>
            </div>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) =>
              item.children ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className={`text-sm font-medium ${
                        location.pathname.startsWith("/products") || location.pathname.startsWith("/services")
                          ? "text-primary"
                          : "text-foreground"
                      }`}
                    >
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuItem asChild>
                      <Link to={item.href} className="w-full">
                        All Products & Services
                      </Link>
                    </DropdownMenuItem>
                    {item.children.map((child) => (
                      <DropdownMenuItem key={child.name} asChild>
                        <Link to={child.href} className="w-full">
                          {child.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link key={item.name} to={item.href}>
                  <Button
                    variant="ghost"
                    className={`text-sm font-medium ${
                      location.pathname === item.href ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {item.name}
                  </Button>
                </Link>
              )
            )}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link to="/contact">
              <Button className="bg-gradient-gold text-primary-foreground hover:opacity-90 font-semibold">
                Request Quote
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border/50 bg-background/95 backdrop-blur-lg">
            <div className="container py-4 space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className={`block py-3 px-4 rounded-lg transition-colors ${
                      location.pathname === item.href
                        ? "bg-primary/10 text-primary"
                        : "hover:bg-secondary text-foreground"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.children && (
                    <div className="pl-4 space-y-1 mt-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.href}
                          className="block py-2 px-4 text-sm text-muted-foreground hover:text-primary transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full bg-gradient-gold text-primary-foreground">
                    Request Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

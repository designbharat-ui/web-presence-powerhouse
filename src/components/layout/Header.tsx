 import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
 import { Menu, X, Phone, Mail, ChevronDown, ChevronRight, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LanguageSelector } from "./LanguageSelector";

const navigation = [
  { name: "Home", href: "/index.html" },
  { name: "About Us", href: "/about.html" },
  {
    name: "Products & Services",
    href: "/products.html",
    children: [
      { name: "SS 304 Sheets", href: "/products/ss-sheets.html" },
      { name: "Car Operative Panels", href: "/products/panels.html" },
      { name: "Spare Parts", href: "/products/spare-parts.html" },
      { name: "Multimedia Displays", href: "/products/displays.html" },
      { name: "Safety Equipment", href: "/products/safety.html" },
      { name: "Entrances & Architraves", href: "/products/entrances.html" },
      { name: "Tools & Equipment", href: "/products/tools.html" },
      { name: "Installation Services", href: "/services/installation.html" },
      { name: "Building & Cladding", href: "/services/building-systems.html" },
      { name: "Vertical Gardens", href: "/services/vertical-gardens.html" },
      { name: "Scientific & Agriculture", href: "/services/scientific-agriculture.html" },
    ],
  },
  { name: "Projects", href: "/projects.html" },
  { name: "Clients", href: "/clients.html" },
  { name: "Contact", href: "/contact.html" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);
  const location = useLocation();
   const [isMobile, setIsMobile] = useState(false);
 
   // Check if mobile
   useEffect(() => {
     const checkMobile = () => setIsMobile(window.innerWidth < 1024);
     checkMobile();
     window.addEventListener('resize', checkMobile);
     return () => window.removeEventListener('resize', checkMobile);
   }, []);

  // Close mobile menu when route changes
  React.useEffect(() => {
    setMobileMenuOpen(false);
    setExpandedMenu(null);
  }, [location.pathname]);

  const toggleSubmenu = (name: string) => {
    setExpandedMenu(expandedMenu === name ? null : name);
  };

  const isActive = (href: string) => {
    return location.pathname === href || location.pathname === href.replace('.html', '');
  };

  const isProductOrServiceActive = () => {
    return location.pathname.includes('/products') || location.pathname.includes('/services');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
       {/* Mobile Top Bar - Contact Info */}
       {isMobile && (
         <div className="bg-primary text-primary-foreground">
           <div className="container py-2">
             <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs">
               <a href="tel:+919711312081" className="flex items-center gap-1 text-primary-foreground/90 hover:text-primary-foreground">
                 <Phone className="h-3 w-3" />
                 <span>+91 9711312081</span>
               </a>
               <span className="text-primary-foreground/40">|</span>
               <a href="mailto:info@onetouchindustrialsolutions.com" className="flex items-center gap-1 text-primary-foreground/90 hover:text-primary-foreground">
                 <Mail className="h-3 w-3" />
                 <span>Email</span>
               </a>
               <span className="text-primary-foreground/40">|</span>
               <span className="flex items-center gap-1 text-primary-foreground/90">
                 <Award className="h-3 w-3" />
                 <span>ISO 9001:2015</span>
               </span>
               <span className="text-primary-foreground/40">|</span>
               <LanguageSelector />
           </div>
         </div>
         </div>
       )}
 
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground hidden md:block">
        <div className="container flex justify-between items-center py-2 text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+919711312081" className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              <Phone className="h-4 w-4" />
              <span>+91 9711312081</span>
            </a>
            <a href="mailto:info@onetouchindustrialsolutions.com" className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              <Mail className="h-4 w-4" />
              <span>info@onetouchindustrialsolutions.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-primary-foreground/90 font-medium">ISO 9001:2015 Certified | Industrial Solutions Provider</span>
            <LanguageSelector />
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="glass border-b border-border/50">
        <div className="container flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/index.html" className="flex items-center">
            <img 
              src="/images/onetouch-logo.png" 
              alt="OneTouch Industrial & Power Solutions" 
              className="h-16 md:h-20 w-auto"
            />
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
                        isProductOrServiceActive()
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
                      isActive(item.href) ? "text-primary" : "text-foreground"
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
            <Link to="/contact.html">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
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
          <div className="lg:hidden border-t border-border/50 bg-background/95 backdrop-blur-lg max-h-[70vh] overflow-y-auto">
            <div className="container py-4 space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <>
                      <button
                        onClick={() => toggleSubmenu(item.name)}
                        className={`w-full flex items-center justify-between py-3 px-4 rounded-lg transition-colors ${
                          isProductOrServiceActive()
                            ? "bg-primary/10 text-primary"
                            : "hover:bg-secondary text-foreground"
                        }`}
                      >
                        <span>{item.name}</span>
                        <ChevronRight className={`h-4 w-4 transition-transform ${expandedMenu === item.name ? "rotate-90" : ""}`} />
                      </button>
                      {expandedMenu === item.name && (
                        <div className="pl-4 space-y-1 mt-1 border-l-2 border-primary/20 ml-4">
                          <Link
                            to={item.href}
                            className="block py-2 px-4 text-sm font-medium text-primary hover:bg-primary/10 rounded-lg transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            All Products & Services
                          </Link>
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              to={child.href}
                              className="block py-2 px-4 text-sm text-muted-foreground hover:text-primary hover:bg-secondary/50 rounded-lg transition-colors"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      className={`block py-3 px-4 rounded-lg transition-colors ${
                        isActive(item.href)
                          ? "bg-primary/10 text-primary"
                          : "hover:bg-secondary text-foreground"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Link to="/contact.html" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
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

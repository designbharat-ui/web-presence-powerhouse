import { Link, useLocation } from "react-router-dom";
import { Home, Package, Phone, Mail, FileText } from "lucide-react";

const navItems = [
  { name: "Home", href: "/index.html", icon: Home },
  { name: "Products", href: "/products.html", icon: Package },
  { name: "Call", href: "tel:+919711312081", icon: Phone, external: true },
  { name: "Contact", href: "/contact.html", icon: Mail },
  { name: "Quote", href: "/contact.html#quote", icon: FileText },
];

export function MobileBottomNav() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border shadow-lg md:hidden">
      <div className="flex items-center justify-around h-16">
        {navItems.map((item) => {
          const isActive = item.href === "/index.html" 
            ? location.pathname === "/index.html" || location.pathname === "/"
            : location.pathname.startsWith(item.href.replace("#quote", "").replace(".html", ""));
          
          if (item.external) {
            return (
              <a
                key={item.name}
                href={item.href}
                className="flex flex-col items-center justify-center gap-1 flex-1 h-full text-primary hover:bg-primary/10 transition-colors"
              >
                <div className="bg-primary rounded-full p-2">
                  <item.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="text-[10px] font-medium text-primary">{item.name}</span>
              </a>
            );
          }

          return (
            <Link
              key={item.name}
              to={item.href}
              className={`flex flex-col items-center justify-center gap-1 flex-1 h-full transition-colors ${
                isActive 
                  ? "text-primary" 
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              <item.icon className={`h-5 w-5 ${isActive ? "text-primary" : ""}`} />
              <span className="text-[10px] font-medium">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

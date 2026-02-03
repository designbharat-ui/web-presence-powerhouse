import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { 
  Home, 
  Building2, 
  Package, 
  Users, 
  Phone, 
  Wrench,
  Leaf,
  Shield,
  Monitor,
  DoorOpen,
  Hammer,
  Layers,
  Settings,
  FolderOpen,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const allPages = [
  { name: "Home", href: "/", icon: Home, description: "Return to homepage" },
  { name: "About Us", href: "/about", icon: Building2, description: "Learn about our company" },
  { name: "Products & Services", href: "/products", icon: Package, description: "View all products and services" },
  { name: "SS 304 Sheets", href: "/products/ss-sheets", icon: Layers, description: "Stainless steel sheets" },
  { name: "Car Operative Panels", href: "/products/panels", icon: Monitor, description: "Elevator control panels" },
  { name: "Spare Parts", href: "/products/spare-parts", icon: Settings, description: "Elevator spare parts" },
  { name: "Multimedia Displays", href: "/products/displays", icon: Monitor, description: "Digital display solutions" },
  { name: "Safety Equipment", href: "/products/safety", icon: Shield, description: "Safety gear and equipment" },
  { name: "Entrances & Architraves", href: "/products/entrances", icon: DoorOpen, description: "Elevator entrances" },
  { name: "Tools & Equipment", href: "/products/tools", icon: Hammer, description: "Professional tools" },
  { name: "Installation Services", href: "/services/installation", icon: Wrench, description: "Expert installation" },
  { name: "Building & Cladding", href: "/services/building-systems", icon: Building2, description: "Building systems" },
  { name: "Vertical Gardens", href: "/services/vertical-gardens", icon: Leaf, description: "Green wall solutions" },
  { name: "Scientific & Agriculture", href: "/services/scientific-agriculture", icon: Leaf, description: "Scientific equipment" },
  { name: "Our Projects", href: "/projects", icon: FolderOpen, description: "View our completed projects" },
  { name: "Our Clients", href: "/clients", icon: Users, description: "Our valued clients" },
  { name: "Contact Us", href: "/contact", icon: Phone, description: "Get in touch with us" },
];

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <div className="container py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-8xl md:text-9xl font-bold text-primary mb-4">404</h1>
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4 text-foreground">
            Page Not Found
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
            The page you're looking for doesn't exist or has been moved. 
            Don't worry, here are all the pages you can explore:
          </p>
          <Link to="/">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Home className="mr-2 h-5 w-5" />
              Back to Home
            </Button>
          </Link>
        </div>

        {/* All Pages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {allPages.map((page) => (
            <Link
              key={page.href}
              to={page.href}
              className="group bg-card rounded-xl p-5 shadow-sm border border-border hover:border-primary hover:shadow-md transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <page.icon className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                    {page.name}
                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-sm text-muted-foreground truncate">
                    {page.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;

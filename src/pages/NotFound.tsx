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
   ArrowRight,
   ExternalLink
 } from "lucide-react";
 import { Button } from "@/components/ui/button";
 import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
 import { SEOHead } from "@/components/seo/SEOHead";

const allPages = [
   { name: "Home", href: "/index.html", icon: Home, description: "Return to our homepage and explore our complete elevator and escalator solutions." },
   { name: "About Us", href: "/about.html", icon: Building2, description: "Learn about our 21+ years of experience in the elevator industry and ISO certification." },
   { name: "Products & Services", href: "/products.html", icon: Package, description: "Browse our comprehensive range of elevator products and professional services." },
   { name: "SS 304 Sheets", href: "/products/ss-sheets.html", icon: Layers, description: "Premium stainless steel sheets for lift cabins, escalator cladding, and architrave finishes." },
   { name: "Car Operative Panels", href: "/products/panels.html", icon: Monitor, description: "Touch and push button panels with custom engraving and braille integration." },
   { name: "Spare Parts", href: "/products/spare-parts.html", icon: Settings, description: "Complete range of elevator spare parts including motors, controllers, and safety devices." },
   { name: "Multimedia Displays", href: "/products/displays.html", icon: Monitor, description: "LCD/LED screens for in-car advertising and floor indicator integration." },
   { name: "Safety Equipment", href: "/products/safety.html", icon: Shield, description: "Comprehensive safety gear including harnesses, helmets, and rescue equipment." },
   { name: "Entrances & Architraves", href: "/products/entrances.html", icon: DoorOpen, description: "Designer elevator entrances and architraves in various finishes and materials." },
   { name: "Tools & Equipment", href: "/products/tools.html", icon: Hammer, description: "Professional tools and equipment for elevator installation and maintenance." },
   { name: "Installation Services", href: "/services/installation.html", icon: Wrench, description: "Expert installation with 30+ mechanics and 3000+ units installed across India." },
   { name: "Building & Cladding", href: "/services/building-systems.html", icon: Building2, description: "Building cladding, facade systems, and infrastructure solutions." },
   { name: "Vertical Gardens", href: "/services/vertical-gardens.html", icon: Leaf, description: "Green wall solutions for sustainable building aesthetics." },
   { name: "Scientific & Agriculture", href: "/services/scientific-agriculture.html", icon: Leaf, description: "Scientific and agricultural equipment solutions." },
   { name: "Our Projects", href: "/projects.html", icon: FolderOpen, description: "View our portfolio of successful installations in prestigious buildings across India." },
   { name: "Our Clients", href: "/clients.html", icon: Users, description: "Trusted by leading developers, hotels, and infrastructure companies." },
   { name: "Contact Us", href: "/contact.html", icon: Phone, description: "Get in touch for quotes, inquiries, or technical support." },
];

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
       <SEOHead 
         title="Page Not Found"
         description="The page you're looking for doesn't exist. Explore our complete range of elevator products, services, and solutions."
         canonicalUrl="/404"
       />
      {/* Hero Section */}
      <section className="py-12 hero-gradient">
        <div className="container text-center">
          <h1 className="text-8xl md:text-9xl font-bold text-primary mb-4">404</h1>
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4 text-foreground">
            Page Not Found
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
            The page you're looking for doesn't exist or has been moved. 
            Don't worry, here are all the pages you can explore:
          </p>
          <Link to="/index.html">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Home className="mr-2 h-5 w-5" />
              Back to Home
            </Button>
          </Link>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="container">
        <Breadcrumbs />
      </div>

      <div className="container py-12">
        {/* All Pages Grid */}
         <h2 className="font-display text-2xl mb-8 text-center">Explore Our Website</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allPages.map((page) => (
            <Link
              key={page.href}
              to={page.href}
               className="group bg-card rounded-2xl p-6 shadow-sm border border-border hover:border-primary hover:shadow-lg transition-all duration-300"
            >
               <div className="flex items-start gap-5">
                 <div className="p-4 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                   <page.icon className="h-6 w-6" />
                </div>
                 <div className="flex-1">
                   <h3 className="font-display text-lg text-foreground group-hover:text-primary transition-colors mb-2">
                    {page.name}
                  </h3>
                   <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {page.description}
                  </p>
                   <span className="inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:underline">
                     Learn More
                     <ExternalLink className="h-4 w-4" />
                   </span>
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

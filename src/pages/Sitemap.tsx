import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { Link } from "react-router-dom";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
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
  FolderOpen
} from "lucide-react";

const sitemapData = [
  {
    title: "Main Pages",
    links: [
      { name: "Home", href: "/index.html", icon: Home },
      { name: "About Us", href: "/about.html", icon: Building2 },
      { name: "Products & Services", href: "/products.html", icon: Package },
      { name: "Our Projects", href: "/projects.html", icon: FolderOpen },
      { name: "Our Clients", href: "/clients.html", icon: Users },
      { name: "Contact Us", href: "/contact.html", icon: Phone },
    ]
  },
  {
    title: "Products",
    links: [
      { name: "SS 304 Sheets", href: "/products/ss-sheets.html", icon: Layers },
      { name: "Car Operative Panels", href: "/products/panels.html", icon: Monitor },
      { name: "Spare Parts", href: "/products/spare-parts.html", icon: Settings },
      { name: "Multimedia Displays", href: "/products/displays.html", icon: Monitor },
      { name: "Safety Equipment", href: "/products/safety.html", icon: Shield },
      { name: "Entrances & Architraves", href: "/products/entrances.html", icon: DoorOpen },
      { name: "Tools & Equipment", href: "/products/tools.html", icon: Hammer },
    ]
  },
  {
    title: "Services",
    links: [
      { name: "Installation Services", href: "/services/installation.html", icon: Wrench },
      { name: "Building & Cladding Systems", href: "/services/building-systems.html", icon: Building2 },
      { name: "Vertical Gardens", href: "/services/vertical-gardens.html", icon: Leaf },
      { name: "Scientific & Agriculture", href: "/services/scientific-agriculture.html", icon: Leaf },
    ]
  }
];

const Sitemap = () => {
  return (
    <Layout>
      <SEOHead 
        title="Sitemap | OneTouch Industrial Solutions"
        description="Navigate through all pages of OneTouch Industrial Solutions website. Find products, services, and information easily."
        canonicalUrl="/sitemap.html"
      />
      
      {/* Hero */}
      <section className="py-12 hero-gradient">
        <div className="container">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Sitemap
          </h1>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="container">
        <Breadcrumbs />
      </div>
      
      <div className="container py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sitemapData.map((section) => (
            <div key={section.title} className="bg-card rounded-xl p-6 shadow-sm border border-border">
              <h2 className="font-display text-xl font-semibold mb-4 text-primary border-b border-border pb-2">
                {section.title}
              </h2>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link 
                      to={link.href}
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                    >
                      <link.icon className="h-4 w-4 text-primary/60 group-hover:text-primary" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Sitemap;

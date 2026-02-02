import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { SectionHeader } from "@/components/ui/section-header";
import { Link } from "react-router-dom";
import { ArrowRight, Layers, Grid3X3, Monitor, Cog, HardHat, Wrench, DoorOpen, Settings, Building2, Leaf, FlaskConical } from "lucide-react";

const categories = [
  { icon: Layers, title: "Designer SS 304 Sheets", description: "Premium stainless steel for lift cabins, escalator cladding, and architrave finishes.", href: "/products/ss-sheets", image: "/images/ss-sheet-1.jpg" },
  { icon: Grid3X3, title: "Car Operating Panels", description: "Touch and push button panels with custom engraving and braille integration.", href: "/products/panels", image: "/images/panel-1.jpg" },
  { icon: Monitor, title: "Multimedia Displays", description: "LCD/LED screens for in-car advertising and floor indicator integration.", href: "/products/displays", image: "/images/display-1.jpg" },
  { icon: DoorOpen, title: "Entrances & Signage", description: "Lift entrances, architraves, do's & don'ts signage for safety.", href: "/products/entrances", image: "/images/entrance-1.jpg" },
  { icon: Cog, title: "Spare Parts", description: "Complete range of elevator and escalator spare parts from trusted manufacturers.", href: "/products/spare-parts", image: "/images/spare-drive.jpg" },
  { icon: HardHat, title: "Safety Equipment & PPE", description: "Full body harness, hard hats, safety shoes, and specialized PPE.", href: "/products/safety", image: "/images/safety-1.jpg" },
  { icon: Wrench, title: "Industrial Tools", description: "Specialized elevator tools and testing equipment.", href: "/products/tools", image: "/images/tool-1.jpg" },
  { icon: Settings, title: "Installation Services", description: "Expert installation with 30+ mechanics and project management.", href: "/services/installation", image: "/images/cabin-5.jpg" },
  { icon: Building2, title: "Building & Cladding", description: "ACP, HPL, glass glazing, and tensile structure solutions.", href: "/services/building-systems", image: "/images/building-systems.jpg" },
  { icon: Leaf, title: "Vertical Gardens", description: "Transform walls into beautiful living gardens for indoor/outdoor spaces.", href: "/services/vertical-gardens", image: "/images/vertical-transportation.jpg" },
  { icon: FlaskConical, title: "Scientific & Agriculture", description: "Green houses, growth facilities, and prefabricated laboratories.", href: "/services/scientific-agriculture", image: "/images/scientific-agriculture.jpg" },
];

const Products = () => {
  return (
    <Layout>
      <SEOHead 
        canonicalUrl="/products"
        title="Products & Services"
        description="Complete elevator and escalator solutions - Designer SS 304 sheets, car operating panels, spare parts, multimedia displays, safety equipment, and installation services."
        keywords="elevator products, escalator parts, SS 304 sheets, car panels, spare parts, safety equipment, installation services, Delhi"
      />
      {/* Hero */}
      <section className="py-20 hero-gradient">
        <div className="container">
          <SectionHeader 
            eyebrow="Products & Services" 
            title="Complete Elevator Solutions" 
            description="From premium materials to expert installation, we deliver comprehensive vertical transportation solutions for India's infrastructure."
          />
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link
                key={category.title}
                to={category.href}
                className="group relative rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-500 hover-lift"
              >
                <div className="aspect-square overflow-hidden">
                  <img src={category.image} alt={category.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <category.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-xl mb-2 group-hover:text-primary transition-colors">{category.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{category.description}</p>
                  <span className="inline-flex items-center text-primary text-sm font-medium">
                    Explore <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-2" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-24 section-gradient">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">Quality Assurance</span>
              <h2 className="font-display text-4xl md:text-5xl mb-6">Premium Materials, Trusted Partners</h2>
              <p className="text-muted-foreground text-lg mb-6">
                We source our materials from trusted global partners to ensure quality and consistency in every order. 
                All our stainless steel products are Grade 304, meeting international standards.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <div>
                    <strong>Grade 304 Stainless Steel</strong>
                    <p className="text-muted-foreground text-sm">Industry-standard material for durability and corrosion resistance</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <div>
                    <strong>OEM & Compatible Parts</strong>
                    <p className="text-muted-foreground text-sm">Clear labeling for Otis, Kone, Schindler compatibility</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <div>
                    <strong>2-Year Warranty</strong>
                    <p className="text-muted-foreground text-sm">Standard warranty on all car operative panels</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="/images/cabin-2.jpg" alt="Quality elevator" className="rounded-xl" />
              <img src="/images/panel-2.jpg" alt="Control panel" className="rounded-xl mt-8" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;

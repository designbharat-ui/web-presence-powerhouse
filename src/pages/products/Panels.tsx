import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Download, CheckCircle, Shield } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

const panels = [
  { image: "/images/panel-1.jpg", name: "Touch Button Panel", type: "Modern LED backlight" },
  { image: "/images/panel-2.jpg", name: "Push Button Panel", type: "Classic vandal-proof" },
  { image: "/images/panel-3.jpg", name: "Designer Panel", type: "Custom engraving" },
  { image: "/images/panel-4.jpg", name: "Braille Panel", type: "Accessibility compliant" },
  { image: "/images/panel-5.jpg", name: "Stainless Panel", type: "SS 304 construction" },
  { image: "/images/panel-6.jpg", name: "ABS Panel", type: "Lightweight durable" },
  { image: "/images/panel-7.jpg", name: "High-Rise Panel", type: "2-64 floors config" },
];

const features = [
  { title: "Touch Button", desc: "Modern LED backlit buttons with sleek design" },
  { title: "Push Button", desc: "Classic durable buttons, vandal-proof construction" },
  { title: "Custom Engraving", desc: "Personalized branding and floor markings" },
  { title: "Braille Integration", desc: "ADA/accessibility compliant features" },
  { title: "Multiple Materials", desc: "Stainless steel or ABS construction" },
  { title: "Floor Configurations", desc: "Support for 2 to 64 floors" },
];

const Panels = () => {
  return (
    <Layout>
      <SEOHead 
        canonicalUrl="/products/panels.html"
         title="Car Operative Panels - Touch & Push Button"
         description="Car operating panels with touch and push button options. Custom engraving, braille integration, 2-64 floor configurations. ISO certified quality. Delhi."
         keywords="car operating panel Delhi, elevator panel India, touch button panel, push button panel, braille panel, lift panel"
         pageType="ItemPage"
         breadcrumbs={[{ name: "Products", url: "/products.html" }, { name: "Car Operative Panels", url: "/products/panels.html" }]}
      />
      {/* Hero */}
      <section className="py-20 hero-gradient">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">Car Operative Panels</span>
              <h1 className="font-display text-5xl md:text-6xl mb-6">Touch & Push Button Panels</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Premium car operating panels with touch and push button options. Available with custom engraving, 
                braille integration, and configurations for 2 to 64 floors.
              </p>
              <div className="flex gap-4">
                <Link to="/contact.html">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Request Quote</Button>
                </Link>
                <Button variant="outline" className="border-primary/50">
                  <Download className="mr-2 h-4 w-4" /> CAD Drawings
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="/images/panel-1.jpg" alt="Touch panel" className="rounded-xl" />
              <img src="/images/panel-2.jpg" alt="Push panel" className="rounded-xl mt-8" />
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="container">
        <Breadcrumbs />
      </div>

      {/* Features */}
      <section className="py-24">
        <div className="container">
          <SectionHeader eyebrow="Features" title="Customization Options" description="Tailored solutions for every elevator requirement." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover-lift">
                <CheckCircle className="h-8 w-8 text-primary mb-4" />
                <h4 className="font-display text-xl mb-2">{feature.title}</h4>
                <p className="text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Gallery */}
      <section className="py-24 section-gradient">
        <div className="container">
          <SectionHeader eyebrow="Product Range" title="Panel Collection" description="Explore our range of car operative panels." />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {panels.map((panel) => (
              <div key={panel.name} className="group rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all hover-lift">
                <div className="aspect-[3/4] overflow-hidden">
                  <img src={panel.image} alt={panel.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="p-4">
                  <h4 className="font-medium">{panel.name}</h4>
                  <p className="text-muted-foreground text-sm">{panel.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warranty */}
      <section className="py-24">
        <div className="container">
          <div className="rounded-2xl bg-primary p-12 text-center">
            <Shield className="h-16 w-16 mx-auto mb-6 text-primary-foreground" />
            <h2 className="font-display text-4xl mb-4 text-primary-foreground">2 Year Warranty</h2>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
              All our car operative panels come with a standard 2-year warranty covering manufacturing defects and component failures.
            </p>
            <Link to="/contact.html">
              <Button size="lg" variant="secondary">Contact Sales <ArrowRight className="ml-2 h-5 w-5" /></Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Panels;

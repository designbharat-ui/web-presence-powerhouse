import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Download, CheckCircle } from "lucide-react";

const designs = [
  { image: "/images/cabin-1.jpg", name: "Gold Mirror Finish" },
  { image: "/images/cabin-2.jpg", name: "Hairline Finish" },
  { image: "/images/cabin-3.jpg", name: "Etched Pattern" },
  { image: "/images/cabin-4.jpg", name: "Custom Design" },
  { image: "/images/cabin-5.jpg", name: "Rose Gold" },
  { image: "/images/cabin-6.jpg", name: "Bronze Mirror" },
  { image: "/images/cabin-7.jpg", name: "Champagne Gold" },
  { image: "/images/cabin-8.jpg", name: "Black Mirror" },
];

const specs = [
  { label: "Material Grade", value: "SS 304" },
  { label: "Thickness Range", value: "0.8mm - 3.0mm" },
  { label: "Standard Size", value: "1219mm x 2438mm" },
  { label: "Custom Sizes", value: "Cut-to-size available" },
  { label: "Finishes", value: "Mirror, Hairline, Etched, Custom" },
];

const applications = [
  "Lift Cabins Interior",
  "Escalator Cladding",
  "Architrave Finishes",
  "Wall Cladding",
  "Decorative Panels",
  "Custom Branding",
];

const SSSheets = () => {
  return (
    <Layout>
      <SEOHead 
        canonicalUrl="/products/ss-sheets"
        title="Designer SS 304 Sheets"
        description="Premium Grade 304 stainless steel sheets for lift cabins, escalator cladding, and architrave finishes. 20+ designer finishes available including gold mirror and custom etched patterns."
        keywords="SS 304 sheets, stainless steel elevator, lift cabin finish, designer SS sheets, gold mirror finish, escalator cladding, Delhi"
      />
      {/* Hero */}
      <section className="py-20 hero-gradient">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">Designer Stainless Steel</span>
              <h1 className="font-display text-5xl md:text-6xl mb-6">SS 304 Premium Sheets</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Premium Grade 304 stainless steel sheets for lift cabins, escalator cladding, and architrave finishes. 
                Available in 20+ designer finishes including gold mirror, hairline, and custom etched patterns.
              </p>
              <div className="flex gap-4">
                <Link to="/contact">
                  <Button className="bg-gradient-gold text-primary-foreground">Request Quote</Button>
                </Link>
                <Button variant="outline" className="border-primary/50">
                  <Download className="mr-2 h-4 w-4" /> Download Catalog
                </Button>
              </div>
            </div>
            <div className="relative">
              <img src="/images/ss-sheet-1.jpg" alt="Designer SS sheets" className="rounded-2xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-3xl mb-6">Technical Specifications</h2>
              <div className="space-y-4">
                {specs.map((spec) => (
                  <div key={spec.label} className="flex justify-between py-3 border-b border-border">
                    <span className="text-muted-foreground">{spec.label}</span>
                    <span className="font-medium">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="font-display text-3xl mb-6">Applications</h2>
              <div className="grid grid-cols-2 gap-4">
                {applications.map((app) => (
                  <div key={app} className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>{app}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Gallery */}
      <section className="py-24 section-gradient">
        <div className="container">
          <SectionHeader eyebrow="Design Gallery" title="20+ Designer Finishes" description="Choose from our extensive collection of premium finishes." />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {designs.map((design) => (
              <div key={design.name} className="group relative rounded-xl overflow-hidden hover-lift">
                <div className="aspect-square">
                  <img src={design.image} alt={design.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform">
                  <span className="font-medium">{design.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project References */}
      <section className="py-24">
        <div className="container">
          <SectionHeader eyebrow="Project References" title="India Installations" description="Our SS 304 sheets featured in prestigious projects." />
          <div className="grid md:grid-cols-3 gap-8">
            {["Grand Théâtre de Rabat", "Hotel Fermont Rabat", "Hotel Tazi Palace"].map((project) => (
              <div key={project} className="p-6 rounded-2xl bg-card border border-border text-center">
                <h4 className="font-display text-xl mb-2">{project}</h4>
                <p className="text-muted-foreground text-sm">Custom gold mirror finish installation</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 section-gradient">
        <div className="container text-center">
          <h2 className="font-display text-4xl mb-6">Need Custom Designs?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">Upload your design specifications and we'll provide a custom quote.</p>
          <Link to="/contact">
            <Button size="lg" className="bg-gradient-gold text-primary-foreground">
              Get Custom Quote <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default SSSheets;

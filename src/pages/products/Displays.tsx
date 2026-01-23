import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Monitor, Wifi, Cloud, DollarSign } from "lucide-react";

const displays = [
  { image: "/images/display-1.jpg", size: "7 inch", features: "Basic floor indicator" },
  { image: "/images/display-2.jpg", size: "10.4 inch", features: "Advertising capable" },
  { image: "/images/display-3.jpg", size: "15.6 inch", features: "Full HD, remote management" },
];

const features = [
  { icon: Monitor, title: "Multiple Sizes", desc: "7\" to 21\" LCD/LED screens available" },
  { icon: Wifi, title: "Remote Management", desc: "Cloud-based content management system" },
  { icon: Cloud, title: "Easy Integration", desc: "Compatible with all elevator systems" },
  { icon: DollarSign, title: "Revenue Generation", desc: "Advertising network partnerships" },
];

const useCases = [
  { title: "Commercial Buildings", desc: "Generate ad revenue while providing information" },
  { title: "Residential Buildings", desc: "Community notices and announcements" },
  { title: "Hotels", desc: "Welcome messages and facility information" },
  { title: "Hospitals", desc: "Wayfinding and health information" },
];

const Displays = () => {
  return (
    <Layout>
      <SEOHead 
        canonicalUrl="/products/displays"
        title="Multimedia Displays"
        description="In-car digital screens and multimedia displays for elevators. Floor indicators, advertising screens with remote content management. 7 to 21 inch LCD/LED screens."
        keywords="elevator display, lift display, multimedia display, floor indicator, elevator advertising screen, digital signage"
      />
      {/* Hero */}
      <section className="py-20 hero-gradient">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">Multimedia Displays</span>
              <h1 className="font-display text-5xl md:text-6xl mb-6">In-Car Digital Screens</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Transform your elevator experience with multimedia displays. From floor indicators to advertising screens, 
                we offer complete solutions with remote content management.
              </p>
              <div className="flex gap-4">
                <Link to="/contact">
                  <Button className="bg-gradient-gold text-primary-foreground">Request Demo</Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img src="/images/display-1.jpg" alt="Multimedia display" className="rounded-2xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="container">
          <SectionHeader eyebrow="Features" title="Smart Display Solutions" description="Modern features for the connected building." />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover-lift text-center">
                <div className="w-14 h-14 rounded-xl bg-gradient-gold flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h4 className="font-display text-xl mb-2">{feature.title}</h4>
                <p className="text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Range */}
      <section className="py-24 section-gradient">
        <div className="container">
          <SectionHeader eyebrow="Product Range" title="Display Sizes" description="Choose the perfect size for your installation." />
          <div className="grid md:grid-cols-3 gap-8">
            {displays.map((display) => (
              <div key={display.size} className="rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all hover-lift bg-card">
                <div className="aspect-video overflow-hidden">
                  <img src={display.image} alt={display.size} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h4 className="font-display text-2xl mb-2">{display.size}</h4>
                  <p className="text-muted-foreground">{display.features}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24">
        <div className="container">
          <SectionHeader eyebrow="Use Cases" title="Applications" description="Versatile solutions for different building types." />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase) => (
              <div key={useCase.title} className="p-6 rounded-2xl bg-card border border-border">
                <h4 className="font-display text-xl mb-2">{useCase.title}</h4>
                <p className="text-muted-foreground text-sm">{useCase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 section-gradient">
        <div className="container text-center">
          <h2 className="font-display text-4xl mb-6">Ready to Modernize?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us for a demonstration of our content management system and pricing.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-gradient-gold text-primary-foreground">
              Schedule Demo <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Displays;

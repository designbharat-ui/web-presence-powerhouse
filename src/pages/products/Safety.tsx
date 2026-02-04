import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, CheckCircle } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

const equipment = [
  { image: "/images/safety-1.jpg", name: "Safety Helmets", desc: "Hard hats with EN397 certification" },
  { image: "/images/safety-2.jpg", name: "Full Body Harness", desc: "Fall protection equipment" },
  { image: "/images/safety-3.jpg", name: "Safety Shoes", desc: "Steel toe protective footwear" },
  { image: "/images/safety-4.jpg", name: "Work Gloves", desc: "Cut and shock resistant" },
  { image: "/images/safety-5.jpg", name: "Safety Goggles", desc: "Eye protection" },
  { image: "/images/safety-6.jpg", name: "Ear Protection", desc: "Noise reducing ear buds" },
  { image: "/images/safety-7.jpg", name: "High-Vis Vest", desc: "Reflective safety vests" },
  { image: "/images/safety-8.jpg", name: "First Aid Kit", desc: "Industrial first aid supplies" },
];

const tools = [
  { image: "/images/tool-1.jpg", name: "Testing Equipment" },
  { image: "/images/tool-2.jpg", name: "Installation Tools" },
  { image: "/images/tool-3.jpg", name: "Measuring Devices" },
  { image: "/images/tool-4.jpg", name: "Power Tools" },
  { image: "/images/tool-5.jpg", name: "Hand Tools" },
  { image: "/images/tool-6.jpg", name: "Specialized Tools" },
];

const Safety = () => {
  return (
    <Layout>
      <SEOHead 
        canonicalUrl="/products/safety.html"
        title="Safety Equipment & Tools"
        description="Complete range of PPE and industrial tools for elevator and escalator work. Safety helmets, harness, safety shoes, and specialized tools meeting EN81 standards."
        keywords="safety equipment, PPE, elevator safety, harness, safety helmet, industrial tools, elevator tools"
      />
      {/* Hero */}
      <section className="py-20 hero-gradient">
        <div className="container">
          <SectionHeader 
            eyebrow="Safety Equipment & Tools" 
            title="Safety First, Always" 
            description="Complete range of PPE and industrial tools meeting EN81 and Indian safety standards."
          />
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="container">
        <Breadcrumbs />
      </div>

      {/* PPE Catalog */}
      <section className="py-24">
        <div className="container">
          <h2 className="font-display text-3xl mb-8">Personal Protective Equipment</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {equipment.map((item) => (
              <div key={item.name} className="group rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all hover-lift bg-card">
                <div className="aspect-square overflow-hidden p-4 bg-secondary/50">
                  <img src={item.image} alt={item.name} className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="p-4">
                  <h4 className="font-medium mb-1">{item.name}</h4>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industrial Tools */}
      <section className="py-24 section-gradient">
        <div className="container">
          <h2 className="font-display text-3xl mb-8">Industrial & Engineering Tools</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {tools.map((tool) => (
              <div key={tool.name} className="group rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all hover-lift bg-card">
                <div className="aspect-square overflow-hidden p-4 bg-secondary/50">
                  <img src={tool.image} alt={tool.name} className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="p-3 text-center">
                  <h4 className="text-sm font-medium">{tool.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">Compliance</span>
              <h2 className="font-display text-4xl md:text-5xl mb-6">Meeting Global Standards</h2>
              <p className="text-muted-foreground text-lg mb-6">
                All our safety equipment meets international and local safety standards for elevator and escalator work.
              </p>
              <ul className="space-y-3">
                {["EN81 European Standards", "Indian Safety Regulations", "ISO Certified Products", "CE Marking"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 rounded-2xl bg-primary text-center">
              <Shield className="h-20 w-20 mx-auto mb-6 text-primary-foreground" />
              <h3 className="font-display text-3xl mb-4 text-primary-foreground">Corporate Safety Kits</h3>
              <p className="text-primary-foreground/80 mb-6">Complete safety packages for your maintenance team at bulk pricing.</p>
              <Link to="/contact.html">
                <Button variant="secondary" size="lg">Get Bulk Quote</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Safety;

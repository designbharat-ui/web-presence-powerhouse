import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Wrench, Shield, HardHat, ArrowRight, CheckCircle2 } from "lucide-react";

const tools = [
  {
    image: "/images/tool-1.jpg",
    title: "Elevator Tools",
    description: "Professional grade tools for elevator installation and maintenance."
  },
  {
    image: "/images/tool-2.jpg",
    title: "Escalator Tools",
    description: "Specialized tools for escalator and moving walkway servicing."
  },
  {
    image: "/images/tool-3.jpg",
    title: "Safety Equipment",
    description: "Complete range of safety equipment for technicians."
  },
  {
    image: "/images/tool-4.jpg",
    title: "Measuring Instruments",
    description: "Precision measuring instruments for accurate installations."
  },
  {
    image: "/images/tool-5.jpg",
    title: "Hand Tools",
    description: "High-quality hand tools for everyday maintenance work."
  },
  {
    image: "/images/tool-6.jpg",
    title: "Power Tools",
    description: "Industrial grade power tools for heavy-duty applications."
  }
];

const safetyPartner = {
  name: "Aktion Safety Solutions",
  description: "One Touch Industrial And Power Solutions is an Authorised Dealer And Distributor of M/s Aktion Safety Solutions.",
  products: [
    "Safety Helmets",
    "Safety Harnesses",
    "Safety Shoes",
    "Protective Gloves",
    "Safety Goggles",
    "Reflective Vests"
  ]
};

export default function Tools() {
  return (
    <Layout>
      <SEOHead
        title="Professional Tools & Equipment | One Touch Industrial Solutions"
        description="Professional tools and equipment for elevator and escalator installation and maintenance. Authorized dealer of Aktion Safety Solutions."
        keywords="elevator tools, escalator tools, safety equipment, professional tools, Delhi, India"
        canonicalUrl="/products/tools"
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-navy text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/tool-1.jpg')] bg-cover bg-center opacity-20" />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-6">
              Tools & Equipment
            </span>
            <h1 className="font-display text-5xl md:text-6xl mb-6">
              Professional Tools & Safety Equipment
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Complete range of professional tools and safety equipment for elevator and escalator industry. Authorized dealer of Aktion Safety Solutions.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                View Catalog
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-20 section-gradient">
        <div className="container">
          <SectionHeader
            title="Our Tool Range"
            description="Professional grade tools for every requirement"
            className="mb-16"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <Card key={index} className="overflow-hidden hover-lift">
                <div className="aspect-square relative">
                  <img 
                    src={tool.image} 
                    alt={tool.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-display text-xl mb-2">{tool.title}</h3>
                  <p className="text-muted-foreground text-sm">{tool.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Partner Section */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Authorized Dealer
              </span>
              <h2 className="font-display text-4xl mb-4">{safetyPartner.name}</h2>
              <p className="text-muted-foreground mb-6">{safetyPartner.description}</p>
              <div className="grid grid-cols-2 gap-3">
                {safetyPartner.products.map((product, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span className="text-sm">{product}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <Card className="p-6 text-center">
                <HardHat className="h-10 w-10 mx-auto mb-3 text-primary" />
                <h4 className="font-semibold text-sm">Helmets</h4>
              </Card>
              <Card className="p-6 text-center">
                <Shield className="h-10 w-10 mx-auto mb-3 text-primary" />
                <h4 className="font-semibold text-sm">Protection</h4>
              </Card>
              <Card className="p-6 text-center">
                <Wrench className="h-10 w-10 mx-auto mb-3 text-primary" />
                <h4 className="font-semibold text-sm">Tools</h4>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="font-display text-4xl mb-4">Need Professional Tools?</h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Contact us for bulk orders and special pricing on professional tools and safety equipment.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="font-semibold">
              Request Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}

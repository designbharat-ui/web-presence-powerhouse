import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Building2, Layers, Grid3X3, Tent, ArrowRight, CheckCircle2 } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

const services = [
  {
    icon: Layers,
    title: "HPL Panels",
    description: "High Pressure Laminates - the direct descendant of the original plastic laminates. One of the most durable creative surface materials available with special performance properties including chemical and wear resistance.",
    features: ["Chemical Resistant", "Wear Resistant", "Durable Surface", "Creative Designs"]
  },
  {
    icon: Grid3X3,
    title: "ACP Panels",
    description: "Aluminium Composite Panels (ACP), also known as aluminium composite metal (ACM), consists of two thin aluminium sheets bonded to a non-aluminium core. Frequently used for external cladding, facades, insulation, and signages.",
    features: ["External Cladding", "Building Facades", "Thermal Insulation", "Signage Solutions"]
  },
  {
    icon: Building2,
    title: "Glass Glazing",
    description: "Professional glass glazing solutions with almost infinite combination of colour, thickness, and opacity. We offer both monolithic and laminated glass options for commercial and residential construction.",
    features: ["Commercial Grade", "Multiple Thicknesses", "Color Options", "Safety Glass"]
  },
  {
    icon: Tent,
    title: "Tensile Structures",
    description: "We provide secure different designs and bright colours tensile structures for restaurants, terraces, and outdoor spaces. Modern architectural solutions for shade and aesthetics.",
    features: ["Restaurant Covers", "Terrace Shades", "Custom Designs", "Weather Resistant"]
  }
];

export default function BuildingSystems() {
  return (
    <Layout>
      <SEOHead
         title="Building & Cladding Systems"
         description="Building cladding solutions - HPL, ACP panels, glass glazing, tensile structures. Professional facade solutions. Quality materials, expert installation. Delhi, India."
         keywords="ACP panels Delhi, HPL panels India, glass glazing, tensile structures, building facade, cladding solutions"
        canonicalUrl="/services/building-systems.html"
         pageType="ItemPage"
         breadcrumbs={[{ name: "Services", url: "/products.html" }, { name: "Building & Cladding", url: "/services/building-systems.html" }]}
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-navy text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/building-systems.jpg')] bg-cover bg-center opacity-20" />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-6">
              Building & Industrial Systems
            </span>
            <h1 className="font-display text-5xl md:text-6xl mb-6">
              Architectural & Building Cladding Solutions
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Complete solutions for interior and exterior cladding including ACP, HPL, Glass façade, and stainless steel facade with wooden cladding options.
            </p>
            <Link to="/contact.html">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="container">
        <Breadcrumbs />
      </div>

      {/* Services Grid */}
      <section className="py-20 section-gradient">
        <div className="container">
          <SectionHeader
            title="Our Cladding Solutions"
            description="Comprehensive range of building facade and cladding services"
            className="mb-16"
          />

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover-lift border-border/50 overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="p-4 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <service.icon className="h-8 w-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-2xl mb-3">{service.title}</h3>
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                      <div className="grid grid-cols-2 gap-2">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm">
                            <CheckCircle2 className="h-4 w-4 text-accent" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="font-display text-4xl mb-4">Ready to Transform Your Building?</h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Contact us for a free consultation and quote on your building cladding project.
          </p>
          <Link to="/contact.html">
            <Button size="lg" variant="secondary" className="font-semibold">
              Request Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}

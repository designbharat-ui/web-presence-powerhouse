import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { DoorOpen, Shield, Cog, ArrowRight, CheckCircle2 } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

const entranceTypes = [
  {
    image: "/images/entrance-1.jpg",
    title: "Elevator Architraves",
    description: "Premium architrave solutions for elevator entrances with various finishes and designs."
  },
  {
    image: "/images/entrance-2.jpg",
    title: "Safety Barricades",
    description: "All types of safety barricades for elevator and escalator installations."
  },
  {
    image: "/images/entrance-3.jpg",
    title: "Door Systems",
    description: "Complete door systems including automatic and manual operation."
  },
  {
    image: "/images/entrance-4.jpg",
    title: "Custom Finishes",
    description: "Special finishes for all types of elevator and escalator claddings."
  }
];

const features = [
  "Premium quality materials",
  "Custom designs available",
  "Multiple finish options",
  "Professional installation",
  "Long-lasting durability",
  "Competitive pricing"
];

export default function Entrances() {
  return (
    <Layout>
      <SEOHead
        title="Elevator Entrances & Architraves | One Touch Industrial Solutions"
        description="Premium elevator entrance solutions including architraves, safety barricades, and custom finishes. Quality entrance systems for all types of elevators."
        keywords="elevator entrances, architraves, safety barricades, elevator doors, Delhi, India"
        canonicalUrl="/products/entrances.html"
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-navy text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/entrance-1.jpg')] bg-cover bg-center opacity-20" />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-6">
              Entrance Solutions
            </span>
            <h1 className="font-display text-5xl md:text-6xl mb-6">
              Elevator Entrances & Architraves
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Complete solutions for elevator architraves, safety barricades, and custom entrance finishes. We provide art-of-class interiors for elevator cabins.
            </p>
            <Link to="/contact.html">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Get Quote
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

      {/* Products Grid */}
      <section className="py-20 section-gradient">
        <div className="container">
          <SectionHeader
            title="Entrance Solutions"
            description="Complete range of elevator entrance products"
            className="mb-16"
          />

          <div className="grid md:grid-cols-2 gap-8">
            {entranceTypes.map((entrance, index) => (
              <Card key={index} className="overflow-hidden hover-lift">
                <div className="aspect-video relative">
                  <img 
                    src={entrance.image} 
                    alt={entrance.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-display text-2xl mb-2">{entrance.title}</h3>
                  <p className="text-muted-foreground">{entrance.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                title="Why Choose Us"
                eyebrow="Quality Assurance"
                centered={false}
                className="mb-8"
              />
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link to="/contact.html">
                  <Button className="bg-primary text-primary-foreground">
                    Request Catalog
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <Card className="p-6 text-center">
                <DoorOpen className="h-10 w-10 mx-auto mb-3 text-primary" />
                <h4 className="font-semibold">Architraves</h4>
              </Card>
              <Card className="p-6 text-center">
                <Shield className="h-10 w-10 mx-auto mb-3 text-primary" />
                <h4 className="font-semibold">Barricades</h4>
              </Card>
              <Card className="p-6 text-center">
                <Cog className="h-10 w-10 mx-auto mb-3 text-primary" />
                <h4 className="font-semibold">Custom</h4>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="font-display text-4xl mb-4">Need Custom Entrance Solutions?</h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Contact us for custom architrave designs and entrance solutions.
          </p>
          <Link to="/contact.html">
            <Button size="lg" variant="secondary" className="font-semibold">
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}

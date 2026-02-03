import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Quote, CheckCircle } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

const clients = [
  "OTIS", "KONE", "Schindler", "ThyssenKrupp", "Mitsubishi", "Hitachi",
  "M3M Group", "ACE Group", "3C Group", "Amrapali", "Vikas Surya", "Bhamu Biotech",
];

const testimonials = [
  { name: "Ahmed K.", company: "Grand Théâtre de Rabat", quote: "Exceptional quality and professional installation. The custom gold finish exceeded our expectations.", rating: 5 },
  { name: "Sarah M.", company: "Hotel Fermont", quote: "Their attention to detail and timely delivery made our hotel opening a success.", rating: 5 },
  { name: "Hassan L.", company: "Real Estate Developer", quote: "Reliable partner for our multi-project requirements. Excellent bulk pricing and support.", rating: 5 },
  { name: "Fatima B.", company: "Property Management", quote: "Great spare parts availability and technical support. Our maintenance team relies on them.", rating: 5 },
];

const partnerTiers = [
  { tier: "Strategic Partners", desc: "OEM manufacturers and authorized distributors", benefits: ["Priority pricing", "Technical training", "Co-marketing"] },
  { tier: "Channel Partners", desc: "Regional distributors and resellers", benefits: ["Volume discounts", "Sales support", "Inventory management"] },
  { tier: "Authorized Installers", desc: "Certified installation companies", benefits: ["Installation contracts", "Technical support", "Warranty backing"] },
];

const Clients = () => {
  return (
    <Layout>
      <SEOHead 
        canonicalUrl="/clients"
        title="Our Clients & Partners"
        description="Working with leading elevator manufacturers and real estate developers across India. View our trusted partnerships and client testimonials."
        keywords="elevator clients India, escalator partners, OTIS, KONE, Schindler, ThyssenKrupp, real estate developers"
      />
      {/* Hero */}
      <section className="py-20 hero-gradient">
        <div className="container">
          <Breadcrumbs />
          <SectionHeader 
            eyebrow="Our Clients" 
            title="Trusted Partnerships" 
            description="Working with leading elevator manufacturers and real estate developers across India and beyond."
          />
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-24">
        <div className="container">
          <h2 className="font-display text-3xl mb-12 text-center">Companies We Work With</h2>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {clients.map((client) => (
              <div key={client} className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all hover-lift text-center">
                <span className="font-display text-xl text-muted-foreground hover:text-foreground transition-colors">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 section-gradient">
        <div className="container">
          <SectionHeader eyebrow="Testimonials" title="What Our Clients Say" description="Real feedback from our valued partners and customers." />
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="p-8 rounded-2xl bg-card border border-border">
                <Quote className="h-10 w-10 text-primary/30 mb-4" />
                <p className="text-lg mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                  <div className="flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Tiers */}
      <section className="py-24">
        <div className="container">
          <SectionHeader eyebrow="Partner Program" title="Partnership Opportunities" description="Join our network of trusted partners and grow together." />
          <div className="grid md:grid-cols-3 gap-8">
            {partnerTiers.map((partner) => (
              <div key={partner.tier} className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all">
                <h3 className="font-display text-2xl mb-3 text-primary">{partner.tier}</h3>
                <p className="text-muted-foreground mb-6">{partner.desc}</p>
                <ul className="space-y-3">
                  {partner.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become Partner */}
      <section className="py-24 section-gradient">
        <div className="container">
          <div className="rounded-2xl bg-gradient-gold p-12 text-center">
            <h2 className="font-display text-4xl mb-4 text-primary-foreground">Become a Partner</h2>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
              Interested in becoming a dealer, distributor, or authorized installer? 
              Let's discuss how we can work together.
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary">
                Apply Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Clients;

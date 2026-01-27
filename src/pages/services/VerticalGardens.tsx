import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Leaf, Droplets, Wind, Sun, ArrowRight, CheckCircle2 } from "lucide-react";

const benefits = [
  {
    icon: Leaf,
    title: "Enhanced Aesthetics",
    description: "Transform plain walls into beautiful living gardens that create stunning visual impact."
  },
  {
    icon: Wind,
    title: "Improved Air Quality",
    description: "Plants naturally filter air, removing pollutants and increasing oxygen levels."
  },
  {
    icon: Droplets,
    title: "Temperature Regulation",
    description: "Natural insulation helps reduce energy costs by regulating indoor temperature."
  },
  {
    icon: Sun,
    title: "Noise Reduction",
    description: "Living walls act as natural sound barriers, creating quieter environments."
  }
];

const applications = [
  "Corporate Offices",
  "Shopping Malls",
  "Hotels & Restaurants",
  "Residential Buildings",
  "Healthcare Facilities",
  "Educational Institutions",
  "Public Spaces",
  "Commercial Complexes"
];

export default function VerticalGardens() {
  return (
    <Layout>
      <SEOHead
        title="Vertical Gardens | One Touch Industrial Solutions"
        description="Transform your indoor and outdoor walls into beautiful vertical gardens. Comprehensive solutions for living walls that improve air quality and aesthetics."
        keywords="vertical gardens, living walls, green walls, indoor plants, outdoor gardens, Delhi, India"
        canonicalUrl="/services/vertical-gardens"
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-900 via-green-800 to-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/vertical-transportation.jpg')] bg-cover bg-center opacity-20" />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-green-500/20 text-green-300 rounded-full text-sm font-medium mb-6">
              Vertical Gardens
            </span>
            <h1 className="font-display text-5xl md:text-6xl mb-6">
              Living Walls & Vertical Garden Solutions
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              We provide comprehensive solutions for converting your indoor/outdoor walls into beautiful gardens. We create Vertical Garden Art using plants to enhance the built environment and increase air quality.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-green-500 text-white hover:bg-green-600">
                Start Your Garden Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 section-gradient">
        <div className="container">
          <SectionHeader
            title="Benefits of Vertical Gardens"
            description="Why choose living walls for your space"
            className="mb-16"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover-lift">
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                    <benefit.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-display text-xl mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
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
                title="Durable & Long-lasting"
                eyebrow="Our System"
                centered={false}
                className="mb-8"
              />
              <p className="text-muted-foreground mb-6">
                Our vertical garden system has been designed and manufactured to be durable for long-lasting installations. We use high-quality materials and proven techniques to ensure your living wall thrives for years.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span>Automated irrigation systems</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span>Low maintenance requirements</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span>Custom plant selection</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span>Weather-resistant materials</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span>Professional installation</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-2xl p-8">
              <h3 className="font-display text-2xl mb-6">Applications</h3>
              <div className="grid grid-cols-2 gap-4">
                {applications.map((app, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Leaf className="h-4 w-4 text-green-600" />
                    <span className="text-sm">{app}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-700 text-white">
        <div className="container text-center">
          <h2 className="font-display text-4xl mb-4">Bring Nature to Your Space</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation on your vertical garden project.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-green-700 hover:bg-white/90 font-semibold">
              Get Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}

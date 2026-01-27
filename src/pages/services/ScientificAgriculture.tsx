import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Leaf, Thermometer, FlaskConical, Building, ArrowRight, CheckCircle2 } from "lucide-react";

const solutions = [
  {
    icon: Leaf,
    title: "Green Houses",
    description: "Our range of Green Houses provide perfect conditions for plants all through their growth stages providing biotechnological feeds, creating near to natural parameters for healthy growth.",
    features: [
      "State of the Art technology",
      "Temperature control",
      "Humidity management",
      "Light optimization",
      "Healthy plant growth"
    ]
  },
  {
    icon: Thermometer,
    title: "Growth Facilities",
    description: "Exclusive Intelligence module gives your cold room completely new functionalities, providing monitoring that can warn you of any abnormal operating condition.",
    features: [
      "Digital temperature display",
      "High/low temperature alarms",
      "Open-door alarm",
      "Safety alarm systems",
      "Door-defrost power"
    ]
  },
  {
    icon: FlaskConical,
    title: "Tissue Culture Labs",
    description: "Simulated and controlled environment in converted rooms for carrying Tissue Culture and allied work. Parameters controlled with State of the Art Microprocessor based controllers.",
    features: [
      "Temperature control",
      "Relative Humidity management",
      "Photoperiodic simulation",
      "Microprocessor controllers",
      "Insulated environments"
    ]
  },
  {
    icon: Building,
    title: "Porta Cabins / Prefab Labs",
    description: "Manufacturer of Modular Portable Cabins that are easily movable or shiftable for laboratories. Fully insulated cabins that protect from outside temperature variations.",
    features: [
      "Easily movable",
      "Fully insulated",
      "Multiple flooring options",
      "Lab ready",
      "Office configurations"
    ]
  }
];

export default function ScientificAgriculture() {
  return (
    <Layout>
      <SEOHead
        title="Scientific & Agricultural Solutions | One Touch Industrial Solutions"
        description="Green houses, growth facilities, tissue culture labs, and porta cabins for scientific and agricultural applications. State of the art controlled environment solutions."
        keywords="green house, growth facility, tissue culture lab, porta cabin, prefab laboratory, Delhi, India"
        canonicalUrl="/services/scientific-agriculture"
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-navy text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/scientific-agriculture.jpg')] bg-cover bg-center opacity-20" />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-6">
              Scientific & Agricultural
            </span>
            <h1 className="font-display text-5xl md:text-6xl mb-6">
              Scientific & Agricultural Implements
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Complete solutions for green houses, growth facilities, environmental controlled culture labs, and prefabricated laboratories with state of the art technology.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Explore Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 section-gradient">
        <div className="container">
          <SectionHeader
            title="Our Scientific Solutions"
            description="Comprehensive range of controlled environment systems"
            className="mb-16"
          />

          <div className="grid lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="hover-lift overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="p-4 rounded-xl bg-primary/10 text-primary">
                      <solution.icon className="h-8 w-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-2xl mb-3">{solution.title}</h3>
                      <p className="text-muted-foreground mb-4">{solution.description}</p>
                      <div className="space-y-2">
                        {solution.features.map((feature, idx) => (
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

      {/* Porta Cabin Details */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                title="Modular Porta Cabins"
                eyebrow="Flexible Solutions"
                centered={false}
                className="mb-8"
              />
              <p className="text-muted-foreground mb-6">
                Our Porta cabins are fully insulated to protect from outside temperature. They come with different flooring options like wooden floor, tiles, marble etc. Porta cabins can be used for offices, labs, and various other purposes.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-card p-4 rounded-lg">
                  <h4 className="font-semibold mb-1">Flooring Options</h4>
                  <p className="text-sm text-muted-foreground">Wooden, Tiles, Marble</p>
                </div>
                <div className="bg-card p-4 rounded-lg">
                  <h4 className="font-semibold mb-1">Applications</h4>
                  <p className="text-sm text-muted-foreground">Labs, Offices, Industries</p>
                </div>
                <div className="bg-card p-4 rounded-lg">
                  <h4 className="font-semibold mb-1">Insulation</h4>
                  <p className="text-sm text-muted-foreground">Fully Temperature Protected</p>
                </div>
                <div className="bg-card p-4 rounded-lg">
                  <h4 className="font-semibold mb-1">Mobility</h4>
                  <p className="text-sm text-muted-foreground">Easily Movable/Shiftable</p>
                </div>
              </div>
              <Link to="/contact">
                <Button className="bg-primary text-primary-foreground">
                  Get Custom Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img 
                src="/images/scientific-agriculture.jpg" 
                alt="Porta Cabin Solutions" 
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="font-display text-4xl mb-4">Need a Custom Scientific Solution?</h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Contact us for specialized solutions tailored to your scientific and agricultural needs.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="font-semibold">
              Contact Our Experts
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}

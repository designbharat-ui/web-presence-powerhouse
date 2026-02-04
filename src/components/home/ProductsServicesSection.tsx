import { Link } from "react-router-dom";
import { ArrowRight, Layers, Grid3X3, Monitor, DoorOpen, Cog, HardHat, Wrench, Settings, Building2, Leaf, FlaskConical } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";

const products = [
  {
    icon: Layers,
    title: "Designer SS 304 Sheets",
    description: "Premium stainless steel sheets for lift cabins, escalator cladding, and architrave finishes with various patterns and textures.",
    image: "/images/ss-sheet-1.jpg",
    href: "/products/ss-sheets.html",
  },
  {
    icon: Grid3X3,
    title: "Car Operating Panels",
    description: "Touch and push button panels with custom engraving, braille integration, and modern digital displays.",
    image: "/images/panel-1.jpg",
    href: "/products/panels.html",
  },
  {
    icon: Monitor,
    title: "Multimedia Displays",
    description: "LCD/LED screens for in-car advertising, floor indicators, and digital signage solutions.",
    image: "/images/display-1.jpg",
    href: "/products/displays.html",
  },
  {
    icon: DoorOpen,
    title: "Entrances & Signage",
    description: "Lift entrances, architraves, do's & don'ts signage, and custom safety signs.",
    image: "/images/entrance-1.jpg",
    href: "/products/entrances.html",
  },
  {
    icon: Cog,
    title: "Spare Parts",
    description: "Complete range of elevator and escalator spare parts from trusted OEM and compatible manufacturers.",
    image: "/images/spare-drive.jpg",
    href: "/products/spare-parts.html",
  },
  {
    icon: HardHat,
    title: "Safety Equipment",
    description: "Full body harness, hard hats, safety shoes, gloves, and specialized PPE for industrial work.",
    image: "/images/safety-1.jpg",
    href: "/products/safety.html",
  },
  {
    icon: Wrench,
    title: "Industrial Tools",
    description: "Specialized elevator tools, testing equipment, and maintenance instruments.",
    image: "/images/tool-1.jpg",
    href: "/products/tools.html",
  },
];

const services = [
  {
    icon: Settings,
    title: "Installation Services",
    description: "Expert elevator and escalator installation with 30+ mechanics and dedicated project management team.",
    image: "/images/cabin-5.jpg",
    href: "/services/installation.html",
  },
  {
    icon: Building2,
    title: "Building & Cladding",
    description: "ACP, HPL, glass glazing, curtain walls, tensile structures, and complete facade solutions.",
    image: "/images/building-systems.jpg",
    href: "/services/building-systems.html",
  },
  {
    icon: Leaf,
    title: "Vertical Gardens",
    description: "Transform walls into beautiful living gardens for indoor and outdoor spaces with low maintenance.",
    image: "/images/vertical-transportation.jpg",
    href: "/services/vertical-gardens.html",
  },
  {
    icon: FlaskConical,
    title: "Scientific & Agriculture",
    description: "Green houses, poly houses, growth facilities, and prefabricated modular laboratories.",
    image: "/images/scientific-agriculture.jpg",
    href: "/services/scientific-agriculture.html",
  },
];

export function ProductsServicesSection() {
  return (
    <>
      {/* Products Section */}
      <section className="py-24">
        <div className="container">
          <SectionHeader
            eyebrow="Our Products"
            title="Premium Industrial Products"
            description="High-quality products for elevator, escalator, and building infrastructure needs."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Link
                key={product.title}
                to={product.href}
                className="group relative rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-500 hover-lift bg-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <product.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-lg mb-2 group-hover:text-primary transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                    {product.description}
                  </p>
                  <span className="inline-flex items-center text-primary text-sm font-medium">
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-2" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/products.html">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                View All Products <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 section-gradient">
        <div className="container">
          <SectionHeader
            eyebrow="Our Services"
            title="Professional Industrial Services"
            description="Comprehensive services from installation to building infrastructure solutions."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Link
                key={service.title}
                to={service.href}
                className="group relative rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-500 hover-lift bg-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <service.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-lg mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center text-primary text-sm font-medium">
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-2" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/products.html">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                View All Services <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

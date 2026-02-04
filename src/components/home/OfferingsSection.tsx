import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";

const offerings = [
  {
    title: "Designer SS 304 Sheets",
    description: "Premium stainless steel sheets for lift cabins, escalator cladding, and architrave finishes.",
    image: "/images/ss-sheet-1.jpg",
    href: "/products/ss-sheets.html",
  },
  {
    title: "Car Operating Panels",
    description: "Touch and push button panels with custom engraving and braille integration.",
    image: "/images/panel-1.jpg",
    href: "/products/panels.html",
  },
  {
    title: "Multimedia Displays",
    description: "LCD/LED screens for in-car advertising and floor indicator integration.",
    image: "/images/display-1.jpg",
    href: "/products/displays.html",
  },
  {
    title: "Spare Parts",
    description: "Complete range of elevator and escalator spare parts from trusted manufacturers.",
    image: "/images/spare-drive.jpg",
    href: "/products/spare-parts.html",
  },
  {
    title: "Safety Equipment",
    description: "Full body harness, hard hats, safety shoes, and specialized PPE.",
    image: "/images/safety-1.jpg",
    href: "/products/safety.html",
  },
  {
    title: "Installation Services",
    description: "Expert installation with 30+ mechanics and project management team.",
    image: "/images/cabin-5.jpg",
    href: "/services/installation.html",
  },
];

export function OfferingsSection() {
  return (
    <section className="py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Our Offerings"
          title="Complete Elevator Solutions"
          description="From premium materials to expert installation, we deliver comprehensive vertical transportation solutions."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((offering, index) => (
            <Link
              key={offering.title}
              to={offering.href}
              className="group relative rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-500 hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={offering.image}
                  alt={offering.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-display text-2xl mb-2 group-hover:text-primary transition-colors">
                  {offering.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {offering.description}
                </p>
                <span className="inline-flex items-center text-primary font-medium">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

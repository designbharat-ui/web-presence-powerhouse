import { Award, Shield, Lightbulb, Handshake } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";

const values = [
  {
    icon: Award,
    title: "21 Years of Expertise",
    description: "Two decades of experience in industrial solutions - elevators, building systems, and infrastructure.",
  },
  {
    icon: Shield,
    title: "500+ Projects Delivered",
    description: "Successfully completed projects across verticals including elevators, ACP, glazing, and gardens.",
  },
  {
    icon: Lightbulb,
    title: "Premium Quality Materials",
    description: "Grade 304 stainless steel and certified components from trusted global partners.",
  },
  {
    icon: Handshake,
    title: "End-to-End Solutions",
    description: "Complete turnkey services from planning and supply to installation and support.",
  },
];

export function CoreValuesSection() {
  return (
    <section className="py-24 section-gradient">
      <div className="container">
        <SectionHeader
          eyebrow="Why Choose Us"
          title="Excellence in Every Project"
          description="Built on trust, transparency, and technical excellence to serve India's industrial and infrastructure needs."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <value.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl mb-3">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

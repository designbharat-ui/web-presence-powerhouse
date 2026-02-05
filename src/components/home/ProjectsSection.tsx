 import { Link } from "react-router-dom";
 import { Button } from "@/components/ui/button";
 import { ArrowRight, Building2, Clock } from "lucide-react";
 import { SectionHeader } from "@/components/ui/section-header";

const projects = [
  {
    title: "Grand Théâtre de Rabat",
     description: "12 elevators with custom SS 304 gold finish",
    image: "/images/project-1.jpg",
     stats: { units: "12 Units", duration: "18 Months" },
  },
  {
    title: "Hotel Fermont Rabat",
    description: "8 luxury elevators with designer architraves and multimedia displays",
    image: "/images/cabin-3.jpg",
     stats: { units: "8 Units", duration: "12 Months" },
  },
  {
    title: "Hotel Tazi Palace",
    description: "6 elevators and 2 escalators with heritage integration",
    image: "/images/cabin-6.jpg",
     stats: { units: "8 Units", duration: "15 Months" },
  },
];

export function ProjectsSection() {
  return (
    <section className="py-24 section-gradient">
      <div className="container">
        <SectionHeader
          eyebrow="Featured Projects"
          title="Our Landmark Installations"
          description="Delivering excellence in India's most prestigious buildings."
        />

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-300 hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                 <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                  <div className="text-center">
                    <Building2 className="h-5 w-5 text-primary mx-auto mb-1" />
                    <p className="text-sm font-medium">{project.stats.units}</p>
                  </div>
                  <div className="text-center">
                    <Clock className="h-5 w-5 text-primary mx-auto mb-1" />
                    <p className="text-sm font-medium">{project.stats.duration}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/projects.html">
            <Button size="lg" variant="outline" className="border-primary/50">
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

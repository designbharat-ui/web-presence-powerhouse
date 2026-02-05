import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
 import { ArrowRight, Building2, Clock, MapPin } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

const featuredProjects = [
  {
    title: "Grand Théâtre de Rabat",
     description: "Morocco's iconic cultural landmark featuring 12 elevators with custom SS 304 gold finish. A showcase of precision engineering and aesthetic excellence.",
    image: "/images/project-1.jpg",
     stats: { units: 12, duration: "18 Months", type: "Infrastructure" },
     features: ["Custom gold mirror finish", "VIP elevator cabins", "Integrated multimedia", "Advanced safety systems"],
  },
  {
    title: "Hotel Fermont Rabat",
     description: "Luxury hospitality project with 8 elevators featuring designer architraves and in-car multimedia displays for guest information.",
    image: "/images/cabin-3.jpg",
     stats: { units: 8, duration: "12 Months", type: "Hotel" },
    features: ["Designer architraves", "Multimedia displays", "Silent operation", "Custom branding"],
  },
  {
    title: "Hotel Tazi Palace",
    description: "Heritage integration project combining 6 elevators and 2 escalators while preserving the architectural character of this historic property.",
    image: "/images/cabin-6.jpg",
     stats: { units: 8, duration: "15 Months", type: "Hotel" },
    features: ["Heritage design integration", "6 elevators + 2 escalators", "Custom finishes", "Minimal visual impact"],
  },
];

const moreProjects = [
  { title: "M3M Smart World", units: 83, image: "/images/cabin-1.jpg", type: "Commercial" },
  { title: "Signature Tower", units: 12, image: "/images/cabin-2.jpg", type: "Commercial" },
  { title: "Amrapali Platinum", units: 30, image: "/images/cabin-4.jpg", type: "Residential" },
  { title: "3C Group", units: 40, image: "/images/cabin-7.jpg", type: "Commercial" },
  { title: "ACE City", units: 32, image: "/images/cabin-8.jpg", type: "Residential" },
  { title: "Vikas Surya", units: 24, image: "/images/project-2.jpg", type: "Commercial" },
];

const Projects = () => {
  return (
    <Layout>
      <SEOHead 
        canonicalUrl="/projects.html"
         title="Our Projects - 3000+ Successful Installations"
         description="View our portfolio of successful elevator and escalator installations. From Grand Théâtre de Rabat to M3M Smart World - 3000+ units installed across prestigious buildings."
         keywords="elevator projects India, escalator installation portfolio, lift installation projects, commercial elevator projects, residential elevator Delhi"
         pageType="CollectionPage"
         breadcrumbs={[{ name: "Projects", url: "/projects.html" }]}
      />
      {/* Hero */}
      <section className="py-20 hero-gradient">
        <div className="container">
          <SectionHeader
            eyebrow="Our Projects" 
            title="Portfolio of Excellence" 
            description="Showcasing our expertise across India's most prestigious buildings and infrastructure projects."
          />
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="container">
        <Breadcrumbs />
      </div>

      {/* Featured Projects */}
      <section className="py-24">
        <div className="container">
          <h2 className="font-display text-3xl mb-12">Featured Case Studies</h2>
          <div className="space-y-24">
            {featuredProjects.map((project, index) => (
              <div key={project.title} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">{project.stats.type}</span>
                  <h3 className="font-display text-4xl mb-4">{project.title}</h3>
                  <p className="text-muted-foreground text-lg mb-6">{project.description}</p>
                  
                   <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-3 rounded-lg bg-card border border-border">
                      <Building2 className="h-5 w-5 text-primary mx-auto mb-1" />
                      <div className="font-display text-xl">{project.stats.units}</div>
                      <p className="text-xs text-muted-foreground">Units</p>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-card border border-border">
                      <Clock className="h-5 w-5 text-primary mx-auto mb-1" />
                      <div className="font-display text-lg">{project.stats.duration}</div>
                      <p className="text-xs text-muted-foreground">Duration</p>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-card border border-border">
                      <MapPin className="h-5 w-5 text-primary mx-auto mb-1" />
                      <div className="font-display text-lg">India</div>
                      <p className="text-xs text-muted-foreground">Location</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature) => (
                      <span key={feature} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <img src={project.image} alt={project.title} className="rounded-2xl shadow-xl" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More Projects */}
      <section className="py-24 section-gradient">
        <div className="container">
          <h2 className="font-display text-3xl mb-12">More Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {moreProjects.map((project) => (
              <div key={project.title} className="group rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all hover-lift bg-card">
                <div className="aspect-video overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="p-6">
                  <span className="text-xs text-primary font-medium">{project.type}</span>
                  <h4 className="font-display text-xl mt-1 mb-2">{project.title}</h4>
                  <p className="text-muted-foreground">{project.units} elevator units installed</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container text-center">
          <h2 className="font-display text-4xl mb-6">Start Your Project With Us</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our portfolio of successful installations across India.
          </p>
          <Link to="/contact.html">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Discuss Your Project <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;

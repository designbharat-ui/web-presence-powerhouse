import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Users, ClipboardList, Settings, CheckCircle, Shield, Clock, Award } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

const process = [
  { icon: ClipboardList, step: "01", title: "Site Survey", desc: "Comprehensive assessment of installation requirements" },
  { icon: Settings, step: "02", title: "Design & Planning", desc: "Custom solutions tailored to your specifications" },
  { icon: Users, step: "03", title: "Installation", desc: "Expert team deployment with safety protocols" },
  { icon: CheckCircle, step: "04", title: "Testing & Handover", desc: "Rigorous testing and client training" },
];

const projects = [
  { name: "M3M Smart World", units: "83 Units", stops: "7 Stops" },
  { name: "Signature Tower", units: "12 Units", stops: "28 Stops" },
  { name: "Amrapali Platinum", units: "30 Units", stops: "17 Stops" },
  { name: "3C Group", units: "40 Units", stops: "24 Stops" },
  { name: "ACE City", units: "32 Units", stops: "27 Stops" },
];

const Installation = () => {
  return (
    <Layout>
      <SEOHead 
        canonicalUrl="/services/installation.html"
        title="Installation Services"
        description="Expert elevator and escalator installation with 21 years of experience and 3000+ units installed. From standard residential to high-speed infrastructure projects."
        keywords="elevator installation, escalator installation, lift installation Delhi, high-speed elevator, infrastructure project, commercial elevator installation"
      />
      {/* Hero */}
      <section className="py-20 hero-gradient">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">Installation Services</span>
              <h1 className="font-display text-5xl md:text-6xl mb-6">Expert Installation Team</h1>
              <p className="text-xl text-muted-foreground mb-8">
                With 21 years of experience and 3000+ units installed, our expert team handles everything from standard residential 
                elevators to high-speed infrastructure projects.
              </p>
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center p-4 rounded-xl bg-card border border-border">
                  <div className="font-display text-3xl text-primary">30+</div>
                  <p className="text-sm text-muted-foreground">Expert Mechanics</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-card border border-border">
                  <div className="font-display text-3xl text-primary">2</div>
                  <p className="text-sm text-muted-foreground">Supervisors</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-card border border-border">
                  <div className="font-display text-3xl text-primary">2</div>
                  <p className="text-sm text-muted-foreground">Project Managers</p>
                </div>
              </div>
              <Link to="/contact.html">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Request Installation Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img src="/images/cabin-5.jpg" alt="Installation team at work" className="rounded-2xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="container">
        <Breadcrumbs />
      </div>

      {/* Process */}
      <section className="py-24">
        <div className="container">
          <SectionHeader eyebrow="Our Process" title="How We Work" description="A systematic approach ensuring quality and timely delivery." />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={item.title} className="relative p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover-lift">
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <span className="font-display text-sm text-primary-foreground">{item.step}</span>
                </div>
                <item.icon className="h-10 w-10 text-primary mb-4 mt-2" />
                <h4 className="font-display text-xl mb-2">{item.title}</h4>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 section-gradient">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">Capabilities</span>
              <h2 className="font-display text-4xl md:text-5xl mb-6">What We Can Handle</h2>
              <ul className="space-y-4">
                {[
                  { icon: Award, text: "High-speed elevators for all building types" },
                  { icon: Shield, text: "ISO safety standards compliance" },
                  { icon: Clock, text: "On-time project delivery" },
                  { icon: Users, text: "Infrastructure and commercial projects" },
                ].map((item) => (
                  <li key={item.text} className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
                    <item.icon className="h-6 w-6 text-primary" />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-2xl mb-6">Reference Projects</h3>
              <div className="space-y-4">
                {projects.map((project) => (
                  <div key={project.name} className="flex items-center justify-between p-4 rounded-xl bg-card border border-border">
                    <span className="font-medium">{project.name}</span>
                    <div className="flex gap-4 text-sm text-muted-foreground">
                      <span>{project.units}</span>
                      <span>{project.stops}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container text-center">
          <h2 className="font-display text-4xl mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our project managers are ready to discuss your requirements and provide a detailed proposal.
          </p>
          <Link to="/contact.html">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Contact Project Team <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Installation;

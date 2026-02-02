import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, Shield, Users, Target, Lightbulb, Handshake, CheckCircle, ArrowRight } from "lucide-react";

const coreValues = [
  { icon: Shield, title: "Trust & Transparency", description: "We build lasting relationships through open communication and honest dealings." },
  { icon: Award, title: "Ethics & Integrity", description: "We conduct business with the highest ethical standards and compliance." },
  { icon: Users, title: "Teamwork", description: "Our success stems from collaborative effort and shared objectives." },
  { icon: Target, title: "Reliability", description: "We honor commitments by delivering on time and within budget." },
  { icon: Lightbulb, title: "Quality Excellence", description: "We never compromise on safety and quality in any aspect of our work." },
  { icon: Handshake, title: "Customer-Centric", description: "We deliver customized solutions tailored to each client's unique needs." },
];

const team = [
  { role: "Expert Mechanics", count: 30, description: "Skilled technicians with elevator installation expertise" },
  { role: "Supervisors", count: 2, description: "Overseeing quality and safety standards" },
  { role: "Project Managers", count: 2, description: "Ensuring timely delivery and client satisfaction" },
];

const About = () => {
  return (
    <Layout>
      <SEOHead 
        canonicalUrl="/about"
        title="About Us"
        description="One Touch Industrial Solutions - Building trust since 2017. ISO-certified company specializing in turnkey civil works, project management, and trading of industrial solutions in Delhi, India."
        keywords="about one touch, elevator company Delhi, industrial solutions India, ISO certified, elevator installation company"
      />
      {/* Hero */}
      <section className="py-20 hero-gradient">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">About Us</span>
              <h1 className="font-display text-5xl md:text-6xl mb-6">Building Trust Since 2017</h1>
              <p className="text-xl text-muted-foreground mb-8">
                At OneTouch Industrial & Power Solutions, we believe great business is built on trust, transparency, and teamwork. 
                As an ISO-certified company, we specialize in turnkey civil works, project management, and trading of industrial solutions.
              </p>
              <div className="flex gap-4">
                <Link to="/projects">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90">View Our Projects</Button>
                </Link>
                <Link to="/contact">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Contact Us</Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img src="/images/cabin-1.jpg" alt="Premium elevator cabin" className="rounded-2xl shadow-2xl" />
              <div className="absolute -bottom-6 -right-6 glass rounded-xl p-6">
                <div className="font-display text-4xl text-primary">21+</div>
                <p className="text-muted-foreground">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-8 rounded-2xl bg-card border border-border">
              <h3 className="font-display text-3xl mb-4 text-primary">Our Mission</h3>
              <p className="text-muted-foreground text-lg">
                To deliver dependable, customized solutions that help our clients succeed. From initial planning to final execution, 
                we handle it all—on time and within budget, while never compromising on safety & quality.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-card border border-border">
              <h3 className="font-display text-3xl mb-4 text-primary">Our Vision</h3>
              <p className="text-muted-foreground text-lg">
                To be the leading provider of vertical transportation solutions in India, recognized for our commitment to excellence, 
                innovation, and long-term partnerships with clients across the region.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 section-gradient">
        <div className="container">
          <SectionHeader eyebrow="Our Values" title="What Drives Us" description="The principles that guide every decision we make." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div key={value.title} className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover-lift">
                <value.icon className="h-10 w-10 text-primary mb-4" />
                <h4 className="font-display text-xl mb-2">{value.title}</h4>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24">
        <div className="container">
          <SectionHeader eyebrow="Our Team" title="Expert Professionals" description="A dedicated team committed to delivering excellence." />
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.role} className="text-center p-8 rounded-2xl bg-card border border-border">
                <div className="w-20 h-20 rounded-full bg-primary mx-auto mb-4 flex items-center justify-center">
                  <span className="font-display text-3xl text-primary-foreground">{member.count}</span>
                </div>
                <h4 className="font-display text-2xl mb-2">{member.role}</h4>
                <p className="text-muted-foreground">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 section-gradient">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">Certifications</span>
              <h2 className="font-display text-4xl md:text-5xl mb-6">ISO 9001:2015 Certified</h2>
              <p className="text-muted-foreground text-lg mb-6">
                Our quality management system has been assessed and certified to comply with ISO 9001:2015 standards for 
                supply and installation of building facades, escalators, walkways spares, and more.
              </p>
              <ul className="space-y-3">
                {["Quality Management System", "Safety Standards Compliance", "Partner Authorizations", "MSME Certified"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center">
              <img src="/images/iso-cert.png" alt="ISO Certification" className="max-w-sm rounded-xl shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container text-center">
          <h2 className="font-display text-4xl md:text-5xl mb-6">Ready to Work Together?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help elevate your next project.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default About;

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center hero-gradient overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-primary font-medium">ISO 9001:2015 Certified</span>
            </div>
            
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight mb-6">
              Elevating Morocco's{" "}
              <span className="text-gradient">Infrastructure</span>{" "}
              Since 2005
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-xl">
              Premium elevator and escalator solutions with 21 years of expertise. 
              From designer stainless steel to complete installation services.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/projects">
                <Button size="lg" className="bg-gradient-gold text-primary-foreground hover:opacity-90 text-lg px-8">
                  View Our Projects
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="text-lg px-8 border-primary/50 hover:bg-primary/10">
                  Request Quote
                </Button>
              </Link>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-border/50">
              <div>
                <div className="font-display text-4xl text-primary">21+</div>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <div className="font-display text-4xl text-primary">3000+</div>
                <p className="text-sm text-muted-foreground">Units Installed</p>
              </div>
              <div>
                <div className="font-display text-4xl text-primary">30+</div>
                <p className="text-sm text-muted-foreground">Expert Mechanics</p>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-border/50 shadow-2xl shadow-primary/10">
              <img
                src="/images/cabin-1.jpg"
                alt="Premium elevator cabin with designer stainless steel finish"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 glass rounded-xl p-6 shadow-xl">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-gold flex items-center justify-center">
                  <Play className="h-6 w-6 text-primary-foreground fill-current" />
                </div>
                <div>
                  <p className="font-semibold">Watch Our Work</p>
                  <p className="text-sm text-muted-foreground">2 min overview</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

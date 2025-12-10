import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0">
            <img
              src="/images/cabin-7.jpg"
              alt="Premium elevator interior"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" />
          </div>

          {/* Content */}
          <div className="relative py-20 px-8 md:px-16">
            <div className="max-w-2xl">
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6">
                Ready to Elevate Your Project?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Get a free consultation and quote from our expert team. 
                We'll help you find the perfect solution for your vertical transportation needs.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button size="lg" className="bg-gradient-gold text-primary-foreground hover:opacity-90">
                    Request Free Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <a href="tel:+212600000000">
                  <Button size="lg" variant="outline" className="border-primary/50">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Us Now
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

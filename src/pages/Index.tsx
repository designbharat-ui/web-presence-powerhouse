import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { HeroSection } from "@/components/home/HeroSection";
import { CoreValuesSection } from "@/components/home/CoreValuesSection";
import { ProductsServicesSection } from "@/components/home/ProductsServicesSection";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { StatsSection } from "@/components/home/StatsSection";
import { ClientsMarquee } from "@/components/home/ClientsMarquee";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <SEOHead 
        canonicalUrl="/"
        title="Premium Elevator & Escalator Solutions"
        description="One Touch Industrial Solutions - Premium elevator and escalator solutions in Delhi, India. 21 years of expertise in designer SS sheets, car operating panels, spare parts, and complete installation services."
        keywords="elevator solutions, escalator solutions, lift installation, SS 304 sheets, car operating panels, spare parts, Delhi, India, industrial solutions"
      />
      <HeroSection />
      <CoreValuesSection />
      <ProductsServicesSection />
      <ProjectsSection />
      <StatsSection />
      <ClientsMarquee />
      <CTASection />
    </Layout>
  );
};

export default Index;

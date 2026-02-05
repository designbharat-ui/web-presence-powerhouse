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
         canonicalUrl="/index.html"
         title="Elevator & Escalator Solutions Delhi"
         description="One Touch Industrial Solutions - ISO 9001:2015 certified elevator company in Delhi. 21+ years expertise, 3000+ installations. SS sheets, panels, spare parts, installation services."
         keywords="elevator solutions Delhi, escalator solutions India, lift installation, SS 304 sheets, car operating panels, spare parts, industrial solutions"
         pageType="WebPage"
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

import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { CoreValuesSection } from "@/components/home/CoreValuesSection";
import { OfferingsSection } from "@/components/home/OfferingsSection";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { StatsSection } from "@/components/home/StatsSection";
import { ClientsMarquee } from "@/components/home/ClientsMarquee";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <CoreValuesSection />
      <OfferingsSection />
      <ProjectsSection />
      <StatsSection />
      <ClientsMarquee />
      <CTASection />
    </Layout>
  );
};

export default Index;

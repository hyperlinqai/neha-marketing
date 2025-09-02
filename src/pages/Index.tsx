import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import LeadMagnetSection from "@/components/LeadMagnetSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import FounderSnapshotSection from "@/components/FounderSnapshotSection";
import FinalCTASection from "@/components/FinalCTASection";
import TrustedBySection from "@/components/TrustedBySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <TrustedBySection />
      <AboutSection />
      <LeadMagnetSection />
      <CaseStudiesSection />
      <FounderSnapshotSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
};

export default Index;

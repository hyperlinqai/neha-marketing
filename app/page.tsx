import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import LeadMagnetSection from "@/components/LeadMagnetSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import FounderSnapshotSection from "@/components/FounderSnapshotSection";
import FinalCTASection from "@/components/FinalCTASection";
import TrustedBySection from "@/components/TrustedBySection";
import Footer from "@/components/Footer";

export default function Home() {
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
}

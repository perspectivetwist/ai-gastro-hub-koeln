import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import MoreProblemsSection from "@/components/MoreProblemsSection";
import SolutionSection from "@/components/SolutionSection";
import ProductsSection from "@/components/ProductsSection";
import VisionSection from "@/components/VisionSection";
import GastroFaq from "@/components/GastroFaq";
import TrustSection from "@/components/TrustSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <MoreProblemsSection />
      <SolutionSection />
      <ProductsSection />
      <VisionSection />
      <GastroFaq />
      <TrustSection />
    </>
  );
}

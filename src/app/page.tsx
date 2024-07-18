import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import ServiceSection from "@/components/sections/ServiceSection";
import Hero from "@/components/ui/Hero";
import Navbar from "@/components/ui/Navbar";
import WidthWrapper from "@/components/ui/WidthWrapper";

export default function Home() {
  return (
    <WidthWrapper>
      <Navbar />
      <Hero />
      <ServiceSection />
      <CaseStudiesSection />
    </WidthWrapper>
  );
}

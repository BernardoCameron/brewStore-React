import HeroSection from "@/components/HeroSection";
import ProductosSection from "@/components/ProductosSection";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <StatsSection/>
      <ProductosSection/>
      <AboutSection/>
      <ContactSection/>
    </div>
  );
}

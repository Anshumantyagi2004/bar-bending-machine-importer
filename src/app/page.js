import AboutUs from "@/components/Home/AboutUs";
import Category from "@/components/Home/Category";
import CoreProduct from "@/components/Home/CoreProduct";
import ContactCTA from "@/components/Home/Cta";
import HeroCarousel from "@/components/Home/Hero";
import IndustriesSection from "@/components/Home/Industries";
import Intro from "@/components/Home/Intro";
import MissionAndVision from "@/components/Home/MissionAndVision";
import TrustedPartner from "@/components/Home/TrustedPartner";
import WhyUs from "@/components/Home/WhyUs";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans overflow-hidden">
      <HeroCarousel />
      <Category />
      <Intro />
      <AboutUs />
      <CoreProduct />
      <WhyUs />
      <MissionAndVision />
      <IndustriesSection />
      <ContactCTA />
      <TrustedPartner />
    </div>
  );
}

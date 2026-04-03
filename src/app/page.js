import AboutUs from "@/components/Home/AboutUs";
import Category from "@/components/Home/Category";
import CoreProduct from "@/components/Home/CoreProduct";
import ContactCTA from "@/components/Home/Cta";
import HeroCarousel from "@/components/Home/Hero";
import Intro from "@/components/Home/Intro";
import IndustriesSection from "@/components/Home/IndustriesSection";
import TrustedPartner from "@/components/Home/TrustedPartner";
import WhyUs from "@/components/Home/WhyUs";
import FormSection from "@/components/Main/FormSection";
import CitesKeyword from "@/components/Home/CityKeyword";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans overflow-hidden">
      <HeroCarousel />
      <Category />
      <Intro />
      <AboutUs />
      <WhyUs />
      <CoreProduct />
      <IndustriesSection />
      <ContactCTA />
      <TrustedPartner />
      <FormSection />
      <CitesKeyword />
    </div>
  );
}

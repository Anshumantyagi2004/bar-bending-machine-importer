import Category from "@/components/Home/Category";
import HeroCarousel from "@/components/Home/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">
      <HeroCarousel />
      <Category/>
    </div>
  );
}

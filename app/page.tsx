import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Categories from "@/components/sections/Categories";
import FeaturedBikes from "@/components/sections/FeaturedBikes";
import Workshop from "@/components/sections/Workshop";
import GearSection from "@/components/sections/GearSection";
import BackToTop from "@/components/ui/BackToTop";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Categories />
        <FeaturedBikes />
        <Workshop />
        <GearSection />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

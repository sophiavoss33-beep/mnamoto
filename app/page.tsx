import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import QuickLinks from "@/components/sections/QuickLinks";
import FeaturedBikes from "@/components/sections/FeaturedBikes";
import BrandsStrip from "@/components/sections/BrandsStrip";
import ShowroomGallery from "@/components/sections/ShowroomGallery";
import Workshop from "@/components/sections/Workshop";
import GearSection from "@/components/sections/GearSection";
import Finance from "@/components/sections/Finance";
import Reviews from "@/components/sections/Reviews";
import NewsletterCTA from "@/components/sections/NewsletterCTA";
import ContactStrip from "@/components/sections/ContactStrip";
import BackToTop from "@/components/ui/BackToTop";

export const metadata: Metadata = {
  title: "MNA Moto | Victoria's Premier Motorcycle & Power Equipment Dealer",
  description:
    "MNA Moto — authorised dealer for KTM, Husqvarna, GASGAS, CFMOTO, YCF and Sunday. New & used motorcycles, ATVs, chainsaws, lawnmowers, expert workshop servicing and a fully stocked parts store.",
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <QuickLinks />
        <FeaturedBikes />
        <BrandsStrip />
        <ShowroomGallery />
        <Workshop />
        <GearSection />
        <Finance />
        <Reviews />
        <NewsletterCTA />
        <ContactStrip />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

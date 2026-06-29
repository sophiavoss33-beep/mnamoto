import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BookingForm from "@/components/forms/BookingForm";

export const metadata: Metadata = {
  title: "Book a Service | MNA Moto Workshop",
  description: "Book your motorcycle or ATV service online with MNA Moto's expert workshop. Factory-trained technicians, genuine parts, fast turnaround.",
};

export default function BookService() {
  return (
    <>
      <Header />
      <main className="pt-28 pb-24 bg-white min-h-screen">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="mb-12">
            <span className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#cc1f1f] block mb-3">
              MNA Moto Workshop
            </span>
            <h1 className="font-[family-name:var(--font-display)] text-[clamp(36px,5vw,64px)] font-bold tracking-[-0.03em] leading-none text-[#1a1a1a] mb-4">
              Book a Service
            </h1>
            <p className="text-[17px] text-[#888] max-w-[480px] leading-relaxed">
              Fill in your details below and our workshop team will confirm your booking within one business day.
            </p>
          </div>
          <BookingForm />
        </div>
      </main>
      <Footer />
    </>
  );
}

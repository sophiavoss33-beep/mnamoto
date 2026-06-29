"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => setVisible(true), 80);
    const onScroll = () => {
      if (bgRef.current) bgRef.current.style.transform = `translateY(${window.scrollY * 0.18}px) scale(1.08)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative bg-gray-900 overflow-hidden" style={{ minHeight: "min(85vh, 700px)", height: "85svh" }}>
      <div ref={bgRef} className="absolute inset-0 scale-[1.08] will-change-transform">
        <Image src="/images/showroom/showroom-floor.jpg" alt="MNA Moto showroom" fill priority quality={85}
          className="object-cover object-center" sizes="100vw" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/65 to-black/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

      <div className="relative z-10 h-full flex items-center">
        <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-20">
          <div className="max-w-[600px]">

            {/* Eyebrow */}
            <div className={`flex items-center gap-3 mb-4 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              <div className="h-[2px] w-6 sm:w-8 bg-[#CC1F1F] flex-shrink-0" />
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.18em] uppercase text-white/55 leading-none">
                Hamilton, Victoria — Authorised Dealer
              </span>
            </div>

            {/* H1 — fluid, never overflows */}
            <h1
              className={`font-[family-name:var(--font-display)] text-white leading-[0.92] tracking-wider mb-4 sm:mb-5 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ fontSize: "clamp(48px, 10vw, 120px)" }}
            >
              RIDE FURTHER.<br />
              <span className="text-[#CC1F1F]">RIDE BETTER.</span>
            </h1>

            {/* Subtext */}
            <p className={`text-[14px] sm:text-[16px] text-white/55 leading-relaxed mb-7 max-w-[420px] transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              Hamilton&apos;s most trusted motorcycle dealership. New &amp; used bikes, expert servicing and genuine parts.
            </p>

            {/* CTAs — stacked on mobile, row on sm+ */}
            <div className={`flex flex-col sm:flex-row gap-3 transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              <Link href="/motorcycles"
                className="flex items-center justify-center w-full sm:w-auto px-7 py-3.5 bg-[#CC1F1F] hover:bg-[#A81818] text-white font-bold text-[13px] tracking-wide uppercase rounded-xl transition-all hover:shadow-[0_8px_24px_rgba(204,31,31,0.45)] min-h-[50px]">
                View Inventory
              </Link>
              <Link href="/workshop/book"
                className="flex items-center justify-center w-full sm:w-auto px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-[13px] tracking-wide uppercase rounded-xl border border-white/30 hover:border-white/60 transition-all min-h-[50px]">
                Book a Service
              </Link>
            </div>

            {/* Stats — 2×2 on mobile, 4 in a row sm+ */}
            <div className={`grid grid-cols-2 sm:grid-cols-4 gap-y-4 gap-x-6 mt-8 pt-7 border-t border-white/10 transition-all duration-700 delay-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              {[["20+","Years"],["6+","Brands"],["500+","In Stock"],["4.9★","Rating"]].map(([n, l]) => (
                <div key={l}>
                  <div className="font-[family-name:var(--font-display)] text-[28px] sm:text-[30px] text-white leading-none tracking-wide">{n}</div>
                  <div className="text-[10px] text-white/35 tracking-[0.1em] uppercase mt-1 font-semibold">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

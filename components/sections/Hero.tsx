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
      if (bgRef.current) bgRef.current.style.transform = `translateY(${window.scrollY * 0.22}px) scale(1.08)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gray-900" style={{ height: "85vh", minHeight: 560 }}>
      <div ref={bgRef} className="absolute inset-0 scale-[1.08] will-change-transform">
        <Image src="/images/showroom/showroom-floor.jpg" alt="MNA Moto showroom" fill priority quality={95}
          className="object-cover object-center" sizes="100vw" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/88 via-black/55 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 w-full">
          <div className="max-w-[600px]">
            <div className={`flex items-center gap-3 mb-5 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              <div className="h-[2px] w-8 bg-[#CC1F1F]" />
              <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-white/55">Hamilton, Victoria — Authorised Dealer</span>
            </div>

            <h1 className={`font-[family-name:var(--font-display)] text-white leading-[0.9] tracking-wider mb-5 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ fontSize: "clamp(64px, 10vw, 130px)" }}>
              RIDE FURTHER.<br />
              <span className="text-[#CC1F1F]">RIDE BETTER.</span>
            </h1>

            <p className={`text-[16px] text-white/55 leading-relaxed mb-9 max-w-[420px] transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              Hamilton&apos;s most trusted motorcycle dealership. New &amp; used bikes, expert servicing and genuine parts.
            </p>

            <div className={`flex flex-wrap gap-3 transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              <Link href="/motorcycles"
                className="px-7 py-3.5 bg-[#CC1F1F] hover:bg-[#A81818] text-white font-bold text-[13px] tracking-wide uppercase rounded-xl transition-all hover:shadow-[0_8px_24px_rgba(204,31,31,0.45)]">
                View Inventory
              </Link>
              <Link href="/workshop/book"
                className="px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-[13px] tracking-wide uppercase rounded-xl border border-white/30 hover:border-white/60 transition-all">
                Book a Service
              </Link>
            </div>

            <div className={`flex gap-8 mt-10 pt-8 border-t border-white/10 transition-all duration-700 delay-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              {[["20+","Years"],["6+","Brands"],["500+","In Stock"],["4.9★","Rating"]].map(([n,l]) => (
                <div key={l}>
                  <div className="font-[family-name:var(--font-display)] text-[32px] text-white leading-none tracking-wide">{n}</div>
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

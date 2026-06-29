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
      if (bgRef.current) bgRef.current.style.transform = `translateY(${window.scrollY * 0.25}px) scale(1.08)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gray-900" style={{ height: "calc(100vh - 102px)", minHeight: 600 }}>
      <div ref={bgRef} className="absolute inset-0 scale-[1.08] will-change-transform">
        <Image src="/images/showroom/showroom-floor.jpg" alt="MNA Moto showroom floor with GASGAS and CFMOTO" fill priority quality={95}
          className="object-cover object-center" sizes="100vw" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 w-full">
          <div className="max-w-[640px]">
            <div className={`flex items-center gap-3 mb-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              <div className="h-[2px] w-10 bg-[#CC1F1F]" />
              <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-white/60">Hamilton, Victoria — Authorised Dealer</span>
            </div>

            <h1 className={`font-[family-name:var(--font-display)] text-white leading-[0.9] tracking-wider mb-6 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ fontSize: "clamp(72px, 11vw, 148px)" }}>
              RIDE<br />
              <span className="text-[#CC1F1F]">FURTHER.</span><br />
              RIDE BETTER.
            </h1>

            <p className={`text-[17px] text-white/60 leading-relaxed mb-10 max-w-[460px] font-light transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              Hamilton&apos;s most trusted motorcycle dealership. New &amp; used bikes, expert servicing, genuine parts and riding gear.
            </p>

            <div className={`flex flex-wrap gap-4 transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              <Link href="/motorcycles"
                className="px-8 py-4 bg-[#CC1F1F] hover:bg-[#A81818] text-white font-bold text-[13px] tracking-[0.1em] uppercase rounded-xl transition-all hover:shadow-[0_8px_30px_rgba(204,31,31,0.45)] hover:-translate-y-0.5">
                View Inventory
              </Link>
              <Link href="/workshop/book"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold text-[13px] tracking-[0.1em] uppercase rounded-xl border border-white/30 hover:border-white/60 transition-all backdrop-blur-sm">
                Book a Service
              </Link>
            </div>

            <div className={`flex gap-10 mt-14 pt-8 border-t border-white/10 transition-all duration-700 delay-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              {[["20+","Years"],["6+","Brands"],["500+","In Stock"],["4.9★","Rating"]].map(([n,l]) => (
                <div key={l}>
                  <div className="font-[family-name:var(--font-display)] text-[36px] text-white leading-none tracking-wide">{n}</div>
                  <div className="text-[10px] text-white/40 tracking-[0.12em] uppercase mt-1 font-semibold">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

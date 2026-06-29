"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
    const onScroll = () => {
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.3}px) scale(1.1)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative h-screen bg-black overflow-hidden flex items-center">
      <div ref={bgRef} className="absolute inset-0 scale-110 will-change-transform">
        <Image src="/images/showroom/showroom-floor.jpg" alt="MNA Moto showroom" fill priority quality={95} className="object-cover object-center opacity-35" sizes="100vw" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#cc1f1f]" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-10 lg:px-20 w-full pt-24">
        <p className={`text-[11px] font-semibold tracking-[0.35em] uppercase text-white/35 mb-8 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          Hamilton, Victoria · Est. 2000
        </p>

        <h1 className={`font-[family-name:var(--font-display)] text-white leading-none tracking-wider mb-8 transition-all duration-700 delay-150 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ fontSize: "clamp(80px, 13vw, 180px)" }}>
          RIDE<br /><span className="text-[#cc1f1f]">FURTHER.</span>
        </h1>

        <p className={`text-[17px] text-white/45 max-w-[420px] leading-relaxed mb-14 font-light transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          Hamilton&apos;s trusted destination for premium motorcycles, expert servicing and genuine parts.
        </p>

        <div className={`flex gap-5 transition-all duration-700 delay-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <Link href="/motorcycles" className="px-10 py-4 bg-[#cc1f1f] hover:bg-[#a81818] text-white font-semibold text-[13px] tracking-[0.15em] uppercase rounded-lg transition-all hover:shadow-[0_0_40px_rgba(204,31,31,0.5)]">
            View Inventory
          </Link>
          <Link href="/workshop/book" className="px-10 py-4 text-white font-semibold text-[13px] tracking-[0.15em] uppercase rounded-lg border border-white/20 hover:border-white/50 hover:bg-white/[0.05] transition-all">
            Book Service
          </Link>
        </div>

        <div className={`flex gap-16 mt-20 pt-10 border-t border-white/[0.07] transition-all duration-700 delay-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          {[["20+","Years"],["6+","Brands"],["500+","In Stock"],["4.9★","Rating"]].map(([n,l])=>(
            <div key={l}>
              <div className="font-[family-name:var(--font-display)] text-[40px] text-white leading-none tracking-wide">{n}</div>
              <div className="text-[10px] text-white/30 tracking-[0.12em] uppercase mt-1 font-medium">{l}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-10 right-12 flex flex-col items-center gap-3 z-10">
        <div className="w-[1px] h-16 bg-gradient-to-b from-white/20 to-transparent" />
        <span className="text-[9px] font-semibold tracking-[0.25em] uppercase text-white/20" style={{ writingMode: "vertical-rl" }}>Scroll</span>
      </div>
    </section>
  );
}

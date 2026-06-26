"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen bg-[#0a0a0a] flex flex-col overflow-hidden" aria-label="Hero">
      {/* Background image — showroom floor */}
      <div className="absolute inset-0">
        <Image
          src="/images/showroom/showroom-floor.jpg"
          alt="MNA Moto showroom with CFMOTO and GASGAS motorcycles"
          fill
          priority
          quality={90}
          className="object-cover object-center opacity-30"
          sizes="100vw"
        />
        {/* Layered overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-[1400px] mx-auto w-full px-6 lg:px-8 pt-40 pb-28">
        {/* Eyebrow */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#e85d26]/10 border border-[#e85d26]/25 text-[#e85d26] text-[11px] font-bold tracking-[0.12em] uppercase mb-7 w-fit transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#e85d26] animate-pulse" />
          Victoria&apos;s Premier Motorcycle Dealer
        </div>

        {/* Title */}
        <h1
          className={`font-[family-name:var(--font-display)] text-[clamp(56px,8vw,108px)] font-bold leading-[0.95] tracking-[-0.04em] text-white max-w-[700px] mb-6 transition-all duration-700 delay-100 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          Ride<br />
          <span className="text-[#e85d26]">Without</span><br />
          Limits.
        </h1>

        <p
          className={`text-[clamp(16px,2vw,20px)] text-white/50 max-w-[460px] leading-relaxed mb-10 transition-all duration-700 delay-200 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          New &amp; used motorcycles, ATVs, outdoor power equipment, and expert servicing — everything the serious rider needs.
        </p>

        {/* CTAs */}
        <div
          className={`flex flex-wrap gap-4 mb-20 transition-all duration-700 delay-300 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <Link
            href="/motorcycles"
            className="inline-flex items-center gap-2.5 px-7 py-4 bg-[#e85d26] hover:bg-[#c44d1e] text-white font-bold text-[15px] rounded-lg transition-all hover:-translate-y-px hover:shadow-[0_12px_32px_rgba(232,93,38,0.45)]"
          >
            Browse Motorcycles
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/workshop/book"
            className="inline-flex items-center gap-2.5 px-7 py-4 text-white font-bold text-[15px] rounded-lg border-2 border-white/30 hover:border-white hover:bg-white/10 transition-all"
          >
            Book a Service
          </Link>
        </div>

        {/* Stats */}
        <div
          className={`grid grid-cols-2 sm:grid-cols-4 gap-8 pt-10 border-t border-white/[0.07] transition-all duration-700 delay-500 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          {[
            { value: "6+", label: "Premium Brands" },
            { value: "20+", label: "Years Experience" },
            { value: "500+", label: "Bikes in Stock" },
            { value: "4.9★", label: "Google Rating" },
          ].map(({ value, label }) => (
            <div key={label}>
              <div className="font-[family-name:var(--font-display)] text-[clamp(28px,4vw,40px)] font-bold text-white leading-none mb-1.5 tracking-tight">
                {value}
              </div>
              <div className="text-[11px] font-semibold tracking-[0.07em] uppercase text-white/35">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/25 z-10 animate-bounce"
        aria-hidden="true"
      >
        <span className="text-[10px] font-semibold tracking-[0.1em] uppercase">Explore</span>
        <ChevronDown size={16} />
      </div>
    </section>
  );
}

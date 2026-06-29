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
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.35}px) scale(1.1)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] bg-black overflow-hidden flex items-center">
      {/* Parallax background */}
      <div ref={bgRef} className="absolute inset-0 scale-110 will-change-transform">
        <Image
          src="/images/showroom/showroom-floor.jpg"
          alt="MNA Moto showroom floor with GASGAS and CFMOTO"
          fill
          priority
          quality={95}
          className="object-cover object-center opacity-40"
          sizes="100vw"
        />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />

      {/* Red accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#cc1f1f]" />

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-10 lg:px-16 w-full pt-20">
        {/* Eyebrow */}
        <div className={`flex items-center gap-4 mb-8 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div className="w-12 h-[1px] bg-[#cc1f1f]" />
          <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-white/50">Hamilton, Victoria — Est. 2000+</span>
        </div>

        {/* Headline */}
        <h1 className={`font-[family-name:var(--font-display)] leading-none tracking-wide text-white mb-8 transition-all duration-700 delay-150 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ fontSize: "clamp(72px, 12vw, 160px)" }}>
          RIDE<br />
          <span className="text-[#cc1f1f]">FURTHER.</span><br />
          RIDE BETTER.
        </h1>

        {/* Subheading */}
        <p className={`text-[18px] text-white/55 leading-relaxed max-w-[500px] mb-12 font-light transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          Hamilton&apos;s trusted destination for premium motorcycles, expert servicing, genuine parts and riding gear.
        </p>

        {/* CTAs */}
        <div className={`flex flex-wrap gap-5 mb-24 transition-all duration-700 delay-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <Link href="/motorcycles"
            className="group relative px-10 py-5 bg-[#cc1f1f] text-white font-semibold text-[14px] tracking-[0.15em] uppercase rounded-lg overflow-hidden transition-all hover:shadow-[0_0_40px_rgba(204,31,31,0.6)] hover:-translate-y-0.5">
            <span className="relative z-10">View Inventory</span>
            <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
          </Link>
          <Link href="/workshop/book"
            className="px-10 py-5 text-white font-semibold text-[14px] tracking-[0.15em] uppercase rounded-lg border border-white/25 hover:border-white/60 hover:bg-white/[0.07] transition-all hover:-translate-y-0.5">
            Book a Service
          </Link>
        </div>

        {/* Stats */}
        <div className={`flex flex-wrap gap-12 pt-8 border-t border-white/[0.08] transition-all duration-700 delay-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {[
            { n: "20+", l: "Years Experience" },
            { n: "6+", l: "Premium Brands" },
            { n: "500+", l: "Bikes in Stock" },
            { n: "4.9★", l: "Google Rating" },
          ].map(({ n, l }) => (
            <div key={l}>
              <div className="font-[family-name:var(--font-display)] text-[42px] text-white leading-none tracking-wide">{n}</div>
              <div className="text-[11px] text-white/35 font-medium tracking-[0.1em] uppercase mt-1">{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 right-10 flex flex-col items-center gap-3 text-white/25 z-10">
        <span className="text-[10px] font-semibold tracking-[0.2em] uppercase" style={{ writingMode: "vertical-rl" }}>Scroll</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-white/25 to-transparent" />
      </div>
    </section>
  );
}

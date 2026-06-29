"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setTimeout(() => setLoaded(true), 50); }, []);

  return (
    <section className="relative h-screen bg-black overflow-hidden">
      <Image
        src="/images/showroom/showroom-floor.jpg"
        alt="MNA Moto showroom"
        fill priority quality={95}
        className={`object-cover object-center transition-all duration-1000 ${loaded ? "opacity-50 scale-100" : "opacity-0 scale-105"}`}
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />

      {/* Vertical label left */}
      <div className="absolute left-5 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3 z-10">
        <div className="w-[1px] h-16 bg-white/20" />
        <span className="text-[9px] font-semibold tracking-[0.3em] uppercase text-white/30" style={{ writingMode: "vertical-rl" }}>Hamilton · Victoria · Est. 2000</span>
      </div>

      {/* Main content — bottom left like reference */}
      <div className="absolute bottom-0 left-0 right-0 z-10 p-8 md:p-16">
        <div className={`transition-all duration-700 delay-200 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h1 className="font-[family-name:var(--font-display)] text-white leading-none tracking-wider mb-6"
            style={{ fontSize: "clamp(64px, 14vw, 200px)" }}>
            RIDE<br /><span className="text-[#cc1f1f]">FURTHER.</span>
          </h1>
          <p className="text-[14px] text-white/50 max-w-[360px] leading-relaxed mb-8 font-light">
            Hamilton&apos;s trusted destination for premium motorcycles, expert servicing and genuine parts.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/motorcycles"
              className="px-8 py-3 bg-white text-black font-bold text-[11px] tracking-[0.2em] uppercase hover:bg-[#cc1f1f] hover:text-white transition-all">
              Explore Here
            </Link>
            <Link href="/workshop/book"
              className="px-8 py-3 border border-white/40 text-white font-bold text-[11px] tracking-[0.2em] uppercase hover:border-white hover:bg-white/10 transition-all">
              Book Service
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

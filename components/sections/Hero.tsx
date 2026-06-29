"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setTimeout(() => setLoaded(true), 50); }, []);

  return (
    <section className="bg-white pt-16">
      {/* Contained hero image with margins */}
      <div className="px-4 sm:px-6 pt-4">
        <div className="relative overflow-hidden rounded-none" style={{ height: "88vh", minHeight: 560 }}>
          <Image
            src="/images/showroom/showroom-floor.jpg"
            alt="MNA Moto showroom"
            fill priority quality={95}
            className={`object-cover object-center transition-all duration-1000 ${loaded ? "opacity-80 scale-100" : "opacity-0 scale-105"}`}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/20" />

          {/* Content bottom left */}
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <div className={`transition-all duration-700 delay-300 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              <p className="text-[10px] font-semibold tracking-[0.35em] uppercase text-white/50 mb-4">Hamilton · Victoria · Est. 2000</p>
              <h1 className="font-[family-name:var(--font-display)] text-white leading-none tracking-wider mb-5"
                style={{ fontSize: "clamp(60px, 12vw, 160px)" }}>
                RIDE<br /><span className="text-[#cc1f1f]">FURTHER.</span>
              </h1>
              <p className="text-[13px] text-white/50 max-w-[320px] leading-relaxed mb-8 font-light">
                Hamilton&apos;s trusted destination for premium motorcycles, expert servicing and genuine parts.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/motorcycles" className="px-8 py-3 bg-white text-black font-bold text-[11px] tracking-[0.2em] uppercase hover:bg-[#cc1f1f] hover:text-white transition-all">
                  Explore Here
                </Link>
                <Link href="/workshop/book" className="px-8 py-3 border border-white/50 text-white font-bold text-[11px] tracking-[0.2em] uppercase hover:bg-white/10 transition-all">
                  Book Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

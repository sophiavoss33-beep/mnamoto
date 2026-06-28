"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const [ready, setReady] = useState(false);
  useEffect(() => { setTimeout(() => setReady(true), 80); }, []);

  return (
    <section className="relative h-screen min-h-[640px] max-h-[900px] bg-black overflow-hidden">
      {/* Full bleed background — showroom floor with GASGAS + CFMOTO */}
      <Image
        src="/images/showroom/showroom-floor.jpg"
        alt="MNA Moto Supplies showroom"
        fill
        priority
        quality={95}
        className="object-cover object-center opacity-50"
        sizes="100vw"
      />

      {/* Gradient overlay — dark left, fade right */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 w-full">
          <div className="max-w-[580px]">

            {/* Tag */}
            <div
              className={`inline-flex items-center gap-2.5 mb-6 transition-all duration-700 ${ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              <span className="w-8 h-[2px] bg-[#cc1f1f]" />
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/60">
                Victoria&apos;s Premier Dealer
              </span>
            </div>

            {/* Headline */}
            <h1
              className={`font-[family-name:var(--font-display)] text-[clamp(48px,7vw,88px)] font-bold leading-[0.92] tracking-[-0.04em] text-white mb-6 transition-all duration-700 delay-100 ${ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              Built for<br />
              <span className="text-[#cc1f1f]">Riders.</span>
            </h1>

            <p
              className={`text-[17px] text-white/50 leading-relaxed mb-10 max-w-[420px] transition-all duration-700 delay-200 ${ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              New &amp; used motorcycles, ATVs, outdoor power equipment and expert servicing — all under one roof.
            </p>

            <div
              className={`flex flex-wrap gap-4 transition-all duration-700 delay-300 ${ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              <Link
                href="/motorcycles"
                className="px-8 py-4 bg-[#cc1f1f] hover:bg-[#a81818] text-white font-bold text-[15px] rounded-lg transition-all hover:shadow-[0_8px_28px_rgba(204,31,31,0.5)] hover:-translate-y-px"
              >
                Browse Bikes
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 text-white font-bold text-[15px] rounded-lg border border-white/25 hover:border-white/60 hover:bg-white/[0.08] transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom stats bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/[0.07] bg-black/60 backdrop-blur-sm">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {[
              { value: "6+", label: "Premium Brands" },
              { value: "20+", label: "Years Experience" },
              { value: "500+", label: "Bikes in Stock" },
              { value: "4.9★", label: "Google Rating" },
            ].map(({ value, label }, i) => (
              <div
                key={label}
                className={`py-5 px-6 text-center ${i < 3 ? "border-r border-white/[0.07]" : ""}`}
              >
                <div className="font-[family-name:var(--font-display)] text-[clamp(22px,3vw,30px)] font-bold text-white tracking-tight leading-none">
                  {value}
                </div>
                <div className="text-[10px] font-semibold tracking-[0.08em] uppercase text-white/35 mt-1.5">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

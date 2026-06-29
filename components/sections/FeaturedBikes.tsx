"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

const bikes = [
  { brand: "YCF", name: "125SE MX", year: 2025, price: "$3,490", badge: "New", image: "/images/bikes/ycf-125se-mx.jpg", alt: "YCF 125SE MX", cc: "125cc", type: "MX Pit Bike", href: "/motorcycles/new" },
  { brand: "CFMOTO", name: "CForce 400 EPS", year: 2025, price: "$9,490", badge: "New", image: "/images/bikes/cfmoto-atv-range.jpg", alt: "CFMOTO CForce 400", cc: "400cc", type: "ATV", href: "/motorcycles/atv" },
  { brand: "Sunday", name: "X 124SE", year: 2026, price: "$3,299", badge: "New", image: "/images/bikes/sunday-x124se.jpg", alt: "Sunday X 124SE", cc: "124cc", type: "Youth MX", href: "/motorcycles/youth" },
];

function BikeCard({ bike, index }: { bike: typeof bikes[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.style.opacity = "1"; el.style.transform = "translateY(0)"; obs.disconnect(); }
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ opacity: 0, transform: "translateY(40px)", transition: `all 0.7s cubic-bezier(0.4,0,0.2,1) ${index * 0.15}s` }}>
      <Link href={bike.href} className="group block bg-[#111] rounded-2xl overflow-hidden border border-white/[0.06] hover:border-[#cc1f1f]/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(0,0,0,0.5)]">
        <div className="relative h-[240px] overflow-hidden bg-[#0a0a0a]">
          <span className="absolute top-4 left-4 z-10 px-3 py-1 bg-[#cc1f1f] text-white text-[10px] font-bold tracking-[0.1em] uppercase rounded-md">
            {bike.badge}
          </span>
          <Image src={bike.image} alt={bike.alt} fill className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" sizes="33vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent" />
        </div>
        <div className="p-6">
          <div className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#cc1f1f] mb-1.5">{bike.brand}</div>
          <h3 className="font-[family-name:var(--font-display)] text-[24px] text-white tracking-wide mb-1">{bike.year} {bike.name}</h3>
          <p className="text-[12px] text-white/35 font-medium mb-5">{bike.cc} · {bike.type}</p>
          <div className="flex items-center justify-between pt-4 border-t border-white/[0.07]">
            <div>
              <div className="font-[family-name:var(--font-display)] text-[28px] text-white tracking-wide">{bike.price}</div>
              <div className="text-[10px] text-white/30 font-medium mt-0.5 tracking-wide">RIDE AWAY</div>
            </div>
            <div className="w-10 h-10 rounded-full border border-white/[0.12] flex items-center justify-center text-white/40 group-hover:bg-[#cc1f1f] group-hover:border-transparent group-hover:text-white transition-all duration-300">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default function FeaturedBikes() {
  return (
    <section className="py-28 bg-[#0d0d0d]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex items-end justify-between mb-16">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-[1px] bg-[#cc1f1f]" />
              <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-white/35">Current Stock</span>
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(48px,6vw,80px)] text-white leading-none tracking-wide">
              FEATURED<br /><span className="text-[#cc1f1f]">RIDES</span>
            </h2>
          </div>
          <Link href="/motorcycles" className="hidden sm:flex items-center gap-3 text-[13px] font-semibold text-white/40 hover:text-white transition-colors tracking-widest uppercase">
            View All <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bikes.map((bike, i) => <BikeCard key={bike.name} bike={bike} index={i} />)}
        </div>
      </div>
    </section>
  );
}

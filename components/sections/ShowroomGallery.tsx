"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

const panels = [
  { image: "/images/bikes/ycf-125se-mx.jpg", alt: "YCF 125SE MX in paddock", label: "New Motorcycles", sub: "KTM · Husqvarna · GASGAS · YCF · Sunday", href: "/motorcycles/new", col: "md:col-span-2 md:row-span-2" },
  { image: "/images/gear/riding-gear-wall.jpg", alt: "Fox Racing boots and helmets", label: "Riding Gear", sub: "Fox · Thor · 100% · RHK", href: "/parts", col: "" },
  { image: "/images/gear/helmets-goggles.jpg", alt: "Helmet and goggle display", label: "Helmets & Goggles", sub: "Full certified range", href: "/parts", col: "" },
  { image: "/images/showroom/power-equipment.jpg", alt: "Power equipment section", label: "Power Equipment", sub: "Chainsaws · Mowers · Generators", href: "/outdoor-power", col: "" },
  { image: "/images/gear/thor-jerseys.jpg", alt: "Thor MX jerseys", label: "MX Apparel", sub: "Thor · Fox · RHK", href: "/parts", col: "" },
];

export default function ShowroomGallery() {
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
    <section className="py-28 bg-black">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div ref={ref} style={{ opacity: 0, transform: "translateY(30px)", transition: "all 0.8s cubic-bezier(0.4,0,0.2,1)" }} className="mb-14">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-[1px] bg-[#cc1f1f]" />
            <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-white/35">In Store</span>
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(48px,6vw,80px)] text-white leading-none tracking-wide">
            EVERYTHING<br /><span className="text-[#cc1f1f]">YOU NEED.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[200px]">
          {panels.map((p) => (
            <Link key={p.label} href={p.href} className={`group relative overflow-hidden rounded-xl ${p.col}`} aria-label={p.label}>
              <Image src={p.image} alt={p.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="25vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#cc1f1f] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="text-white font-[family-name:var(--font-display)] text-[20px] tracking-wide leading-none">{p.label}</div>
                <div className="text-white/40 text-[11px] font-medium mt-1">{p.sub}</div>
              </div>
            </Link>
          ))}
        </div>

        {/* Storefront */}
        <div className="mt-3 relative rounded-xl overflow-hidden h-[220px]">
          <Image src="/images/store/storefront.jpg" alt="MNA Moto storefront" fill className="object-cover object-center" sizes="100vw" />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 flex items-center px-10">
            <div>
              <p className="text-white/40 text-[10px] font-semibold tracking-[0.3em] uppercase mb-2">Find Us</p>
              <h3 className="font-[family-name:var(--font-display)] text-[clamp(24px,3vw,40px)] text-white tracking-wide mb-5">MNA MOTO SUPPLIES — HAMILTON, VICTORIA</h3>
              <Link href="/contact" className="inline-flex items-center gap-3 px-7 py-3.5 bg-[#cc1f1f] hover:bg-[#a81818] text-white font-semibold text-[13px] tracking-widest uppercase rounded-lg transition-all">
                Get Directions
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

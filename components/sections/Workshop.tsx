"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

const services = ["Logbook Servicing","Engine Rebuilds","Tyre Supply & Fitting","Suspension Setup","Electrical Diagnostics","Accessory Fitting","Pre-Purchase Inspections","Race Prep & Tuning"];

export default function Workshop() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.style.opacity = "1"; el.style.transform = "translateY(0)"; obs.disconnect(); }
    }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="relative py-28 bg-[#080808] overflow-hidden">
      {/* Subtle red glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#cc1f1f]/[0.04] blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <Image src="/images/showroom/parts-wall.jpg" alt="MNA Moto workshop and parts" fill className="object-cover opacity-70" sizes="50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              {/* Red corner accent */}
              <div className="absolute top-0 left-0 w-16 h-16">
                <div className="absolute top-0 left-0 w-full h-1 bg-[#cc1f1f]" />
                <div className="absolute top-0 left-0 h-full w-1 bg-[#cc1f1f]" />
              </div>
            </div>
            {/* Floating stat */}
            <div className="absolute -bottom-6 -right-4 sm:right-8 bg-[#cc1f1f] rounded-xl px-7 py-5 shadow-[0_20px_60px_rgba(204,31,31,0.4)]">
              <div className="font-[family-name:var(--font-display)] text-[48px] text-white leading-none tracking-wide">20+</div>
              <div className="text-[11px] font-medium text-white/70 mt-1 tracking-[0.1em] uppercase">Years Servicing</div>
            </div>
          </div>

          {/* Content */}
          <div ref={ref} style={{ opacity: 0, transform: "translateY(30px)", transition: "all 0.8s cubic-bezier(0.4,0,0.2,1)" }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-[1px] bg-[#cc1f1f]" />
              <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-white/35">On-Site Workshop</span>
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(48px,5vw,72px)] text-white leading-none tracking-wide mb-6">
              EXPERT<br />SERVICING.<br /><span className="text-[#cc1f1f]">NO SHORTCUTS.</span>
            </h2>
            <p className="text-[16px] text-white/45 leading-relaxed mb-8 max-w-[400px]">
              Factory-trained technicians, genuine parts and a fully equipped workshop. We service every brand we sell — and we do it right the first time.
            </p>

            <div className="grid grid-cols-2 gap-2.5 mb-10">
              {services.map((s) => (
                <div key={s} className="flex items-center gap-2.5 py-2.5 px-3 bg-white/[0.03] border border-white/[0.05] rounded-lg hover:border-[#cc1f1f]/30 transition-colors">
                  <div className="w-1 h-1 rounded-full bg-[#cc1f1f] flex-shrink-0" />
                  <span className="text-[12px] text-white/55 font-medium">{s}</span>
                </div>
              ))}
            </div>

            <Link href="/workshop/book" className="inline-flex items-center gap-3 px-8 py-4 bg-[#cc1f1f] hover:bg-[#a81818] text-white font-semibold text-[13px] tracking-[0.15em] uppercase rounded-lg transition-all hover:shadow-[0_0_30px_rgba(204,31,31,0.5)] hover:-translate-y-0.5">
              Book a Service
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

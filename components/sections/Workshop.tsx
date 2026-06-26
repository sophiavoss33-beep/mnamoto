"use client";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Wrench } from "lucide-react";
import { useRef, useEffect } from "react";

const services = [
  "Logbook Servicing",
  "Engine Rebuilds",
  "Tyre Supply & Fitting",
  "Suspension Setup",
  "Electrical Diagnostics",
  "Accessory Fitting",
  "Pre-Purchase Inspections",
  "Race Prep & Tuning",
];

export default function Workshop() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.dataset.visible = "true"; obs.disconnect(); }
    }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="py-24 bg-[#0a0a0a] relative overflow-hidden" aria-label="Workshop services">
      {/* Accent glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#e85d26]/[0.04] blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Visual side */}
          <div className="relative" ref={ref}>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#1a1a1a]">
              <Image
                src="/images/showroom/parts-wall.jpg"
                alt="MNA Moto workshop and parts department with RHK accessories and KTM bikes"
                fill
                className="object-cover opacity-75"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 to-transparent" />
            </div>

            {/* Floating stat */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-[#e85d26] text-white rounded-2xl px-7 py-5 shadow-[0_20px_60px_rgba(232,93,38,0.45)]">
              <div className="font-[family-name:var(--font-display)] text-[42px] font-bold leading-none tracking-tight">20+</div>
              <div className="text-[11px] font-medium opacity-75 mt-1 tracking-wide">Years Servicing</div>
            </div>

            {/* Wrench badge */}
            <div className="absolute top-5 left-5 bg-[#1a1a1a]/90 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 flex items-center gap-2.5">
              <Wrench size={16} className="text-[#e85d26]" />
              <span className="text-white text-[12px] font-semibold">Factory-Trained Technicians</span>
            </div>
          </div>

          {/* Content side */}
          <div>
            <span className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#e85d26] block mb-4">
              On-Site Workshop
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(32px,4vw,52px)] font-bold tracking-[-0.03em] leading-tight text-white mb-5">
              Expert Servicing,<br />Done Right.
            </h2>
            <p className="text-[17px] text-white/45 leading-relaxed mb-8 max-w-[420px]">
              Our fully equipped workshop handles everything from routine logbook servicing to complex engine rebuilds. Factory-trained technicians. Genuine parts. No shortcuts.
            </p>

            {/* Services grid */}
            <div className="grid grid-cols-2 gap-3 mb-10">
              {services.map((service) => (
                <div key={service} className="flex items-center gap-3 bg-white/[0.04] border border-white/[0.06] rounded-lg px-4 py-3 hover:bg-white/[0.07] transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#e85d26] flex-shrink-0" />
                  <span className="text-[13px] font-medium text-white/70">{service}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/workshop/book"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#e85d26] hover:bg-[#c44d1e] text-white font-bold text-[14px] rounded-lg transition-all hover:-translate-y-px hover:shadow-[0_12px_32px_rgba(232,93,38,0.4)]"
              >
                Book a Service <ArrowRight size={15} />
              </Link>
              <Link
                href="/workshop"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-white font-semibold text-[14px] rounded-lg border border-white/20 hover:border-white/40 hover:bg-white/[0.06] transition-all"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

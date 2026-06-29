import Image from "next/image";
import Link from "next/link";

export default function Workshop() {
  return (
    <section className="bg-black">
      <div className="max-w-[1400px] mx-auto px-10 lg:px-20 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
            <Image src="/images/showroom/parts-wall.jpg" alt="MNA Moto workshop" fill className="object-cover opacity-60" sizes="50vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute top-0 left-0 w-20 h-[3px] bg-[#cc1f1f]" />
            <div className="absolute bottom-8 left-8">
              <div className="font-[family-name:var(--font-display)] text-[64px] text-white leading-none tracking-wide">20+</div>
              <div className="text-[11px] text-white/50 tracking-[0.15em] uppercase font-medium mt-1">Years Servicing</div>
            </div>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-display)] text-white leading-none tracking-wider mb-8" style={{ fontSize: "clamp(52px,6vw,80px)" }}>
              EXPERT<br />WORKSHOP.<br /><span className="text-[#cc1f1f]">ZERO SHORTCUTS.</span>
            </h2>
            <p className="text-[16px] text-white/40 leading-relaxed mb-12 max-w-[380px]">
              Factory-trained technicians and genuine parts. We service every brand we sell, and we do it right the first time.
            </p>
            <Link href="/workshop/book" className="inline-flex items-center gap-4 px-10 py-4 bg-[#cc1f1f] hover:bg-[#a81818] text-white font-semibold text-[13px] tracking-[0.15em] uppercase rounded-lg transition-all hover:shadow-[0_0_40px_rgba(204,31,31,0.4)]">
              Book a Service
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

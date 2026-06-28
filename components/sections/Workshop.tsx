import Image from "next/image";
import Link from "next/link";

const services = [
  "Logbook Servicing", "Engine Rebuilds", "Tyre Supply & Fitting",
  "Suspension Setup", "Electrical Repairs", "Accessory Fitting",
];

export default function Workshop() {
  return (
    <section className="bg-black py-24 overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <Image
                src="/images/showroom/parts-wall.jpg"
                alt="MNA Moto parts and accessories showroom with KTM bikes"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-2 sm:right-8 bg-[#cc1f1f] text-white rounded-xl px-6 py-4">
              <div className="font-[family-name:var(--font-display)] text-[38px] font-bold leading-none">20+</div>
              <div className="text-[11px] font-medium opacity-80 mt-1 tracking-wide">Years Servicing</div>
            </div>
          </div>

          {/* Text */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-6 h-[2px] bg-[#cc1f1f]" />
              <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-white/40">On-Site Workshop</span>
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(32px,4vw,48px)] font-bold tracking-[-0.03em] text-white leading-tight mb-5">
              Expert Servicing.<br />No Shortcuts.
            </h2>
            <p className="text-[16px] text-white/45 leading-relaxed mb-8 max-w-[400px]">
              Factory-trained technicians, genuine parts and a fully equipped workshop. We service what we sell — and we do it right.
            </p>

            <div className="grid grid-cols-2 gap-2.5 mb-10">
              {services.map((s) => (
                <div key={s} className="flex items-center gap-2.5 text-[13px] text-white/60 font-medium">
                  <span className="w-1 h-1 rounded-full bg-[#cc1f1f] flex-shrink-0" />
                  {s}
                </div>
              ))}
            </div>

            <Link
              href="/workshop/book"
              className="inline-flex items-center gap-3 px-7 py-4 bg-[#cc1f1f] hover:bg-[#a81818] text-white font-bold text-[15px] rounded-lg transition-all hover:shadow-[0_8px_28px_rgba(204,31,31,0.45)] hover:-translate-y-px"
            >
              Book a Service
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

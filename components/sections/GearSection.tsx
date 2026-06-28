import Image from "next/image";
import Link from "next/link";

export default function GearSection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10">

        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-6 h-[2px] bg-[#cc1f1f]" />
              <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-black/40">Parts &amp; Accessories</span>
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(28px,4vw,44px)] font-bold tracking-[-0.03em] text-black leading-none">
              Gear Up.
            </h2>
          </div>
          <Link href="/parts" className="text-[13px] font-semibold text-black/40 hover:text-black transition-colors">
            Shop all →
          </Link>
        </div>

        {/* Two column layout — wide left image + right stack */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

          {/* Left — tall hero image */}
          <Link
            href="/parts/gear"
            className="group relative rounded-2xl overflow-hidden h-[480px] lg:h-auto"
            aria-label="Riding Gear"
          >
            <Image
              src="/images/gear/riding-gear-wall.jpg"
              alt="Full wall display of Fox Racing boots and helmets at MNA Moto"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <h3 className="text-white font-[family-name:var(--font-display)] text-[24px] font-bold tracking-tight mb-1">
                Riding Gear
              </h3>
              <p className="text-white/55 text-[13px] mb-4">Fox · Thor · RHK · 100%</p>
              <span className="inline-flex items-center gap-2 text-white text-[13px] font-semibold group-hover:gap-4 transition-all">
                Shop Gear
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </div>
          </Link>

          {/* Right — two stacked */}
          <div className="grid grid-rows-2 gap-4">
            <Link
              href="/parts/helmets"
              className="group relative rounded-2xl overflow-hidden"
              aria-label="Helmets & Goggles"
            >
              <Image
                src="/images/gear/helmets-goggles.jpg"
                alt="Thor and Fox helmets with 100% goggles at MNA Moto"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white font-[family-name:var(--font-display)] text-[20px] font-bold tracking-tight mb-0.5">
                  Helmets &amp; Goggles
                </h3>
                <p className="text-white/50 text-[12px]">Full certified range in store</p>
              </div>
            </Link>

            <Link
              href="/parts/apparel"
              className="group relative rounded-2xl overflow-hidden"
              aria-label="MX Apparel"
            >
              <Image
                src="/images/gear/thor-jerseys.jpg"
                alt="Thor MX jerseys and RHK parts at MNA Moto"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white font-[family-name:var(--font-display)] text-[20px] font-bold tracking-tight mb-0.5">
                  MX Apparel
                </h3>
                <p className="text-white/50 text-[12px]">Thor · Fox · RHK jerseys &amp; pants</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";

export default function GearSection() {
  return (
    <section className="py-28 bg-[#0d0d0d]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex items-end justify-between mb-16">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-[1px] bg-[#cc1f1f]" />
              <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-white/35">Parts &amp; Accessories</span>
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(48px,6vw,80px)] text-white leading-none tracking-wide">
              GEAR<br /><span className="text-[#cc1f1f]">UP.</span>
            </h2>
          </div>
          <Link href="/parts" className="hidden sm:flex items-center gap-3 text-[13px] font-semibold text-white/35 hover:text-white transition-colors tracking-widest uppercase">
            Shop All <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Hero panel */}
          <Link href="/parts/gear" className="group relative rounded-2xl overflow-hidden h-[480px] lg:h-auto block">
            <Image src="/images/gear/riding-gear-wall.jpg" alt="Fox Racing riding gear wall at MNA Moto" fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="50vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            <div className="absolute top-0 left-0 w-12 h-12">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-[#cc1f1f]" />
              <div className="absolute top-0 left-0 h-full w-[2px] bg-[#cc1f1f]" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="font-[family-name:var(--font-display)] text-[32px] text-white tracking-wide mb-1">Riding Gear</h3>
              <p className="text-white/45 text-[13px] mb-5">Fox · Thor · RHK · 100%</p>
              <span className="inline-flex items-center gap-2 text-[#cc1f1f] text-[13px] font-semibold tracking-[0.1em] uppercase group-hover:gap-4 transition-all">
                Shop Gear <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
            </div>
          </Link>

          {/* Stack */}
          <div className="grid grid-rows-2 gap-4">
            <Link href="/parts/helmets" className="group relative rounded-2xl overflow-hidden block">
              <Image src="/images/gear/helmets-goggles.jpg" alt="Thor and Fox helmets with 100% goggles" fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="25vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-[family-name:var(--font-display)] text-[24px] text-white tracking-wide">Helmets &amp; Goggles</h3>
                <p className="text-white/40 text-[11px] mt-0.5">Full certified range in store</p>
              </div>
            </Link>
            <Link href="/parts/apparel" className="group relative rounded-2xl overflow-hidden block">
              <Image src="/images/gear/thor-jerseys.jpg" alt="Thor MX jerseys and RHK parts" fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="25vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-[family-name:var(--font-display)] text-[24px] text-white tracking-wide">MX Apparel</h3>
                <p className="text-white/40 text-[11px] mt-0.5">Thor · Fox · RHK jerseys &amp; pants</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";

export default function GearSection() {
  return (
    <section className="py-32 bg-[#0a0a0a]">
      <div className="max-w-[1400px] mx-auto px-10 lg:px-20">
        <div className="flex items-end justify-between mb-20">
          <h2 className="font-[family-name:var(--font-display)] text-white leading-none tracking-wider" style={{ fontSize: "clamp(52px,7vw,96px)" }}>
            GEAR<br /><span className="text-[#cc1f1f]">UP.</span>
          </h2>
          <Link href="/parts" className="text-[11px] font-semibold tracking-[0.25em] uppercase text-white/30 hover:text-white transition-colors pb-2 border-b border-white/20 hover:border-white/60">
            Shop All Gear
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <Link href="/parts/gear" className="group relative rounded-2xl overflow-hidden lg:row-span-2 h-[320px] lg:h-auto block">
            <Image src="/images/gear/riding-gear-wall.jpg" alt="Fox Racing riding gear" fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="33vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            <div className="absolute top-0 left-0 w-12 h-[2px] bg-[#cc1f1f]" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="font-[family-name:var(--font-display)] text-[28px] text-white tracking-wide mb-1">Riding Gear</h3>
              <p className="text-white/40 text-[12px]">Fox · Thor · RHK · 100%</p>
            </div>
          </Link>

          <Link href="/parts/helmets" className="group relative rounded-2xl overflow-hidden h-[260px] block">
            <Image src="/images/gear/helmets-goggles.jpg" alt="Helmets and goggles" fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="33vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="font-[family-name:var(--font-display)] text-[22px] text-white tracking-wide">Helmets &amp; Goggles</h3>
            </div>
          </Link>

          <Link href="/parts/apparel" className="group relative rounded-2xl overflow-hidden h-[260px] block">
            <Image src="/images/gear/thor-jerseys.jpg" alt="Thor jerseys" fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="33vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="font-[family-name:var(--font-display)] text-[22px] text-white tracking-wide">MX Apparel</h3>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

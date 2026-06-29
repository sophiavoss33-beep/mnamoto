import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function GearSection() {
  return (
    <section className="py-12 sm:py-20 overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">

        {/* Header */}
        <div className="flex items-end justify-between mb-8 sm:mb-12 gap-3">
          <div>
            <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#CC1F1F] mb-1.5">Parts &amp; Accessories</p>
            <h2 className="font-[family-name:var(--font-display)] leading-none tracking-wide text-gray-900"
              style={{ fontSize: "clamp(34px, 6vw, 62px)" }}>
              GEAR UP.
            </h2>
          </div>
          <Link href="/parts"
            className="flex-shrink-0 inline-flex items-center gap-1.5 px-4 py-2.5 bg-white border border-gray-200 hover:border-[#CC1F1F] hover:text-[#CC1F1F] text-gray-600 font-semibold text-[12px] rounded-xl transition-all shadow-sm min-h-[44px] whitespace-nowrap">
            Shop All <ArrowRight size={13} />
          </Link>
        </div>

        {/* Top grid: 1col → 2col sm → 3col lg, tall panel spans 2 rows on lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link href="/parts/gear"
            className="group relative rounded-2xl overflow-hidden block shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 sm:col-span-2 lg:col-span-1 lg:row-span-2"
            style={{ minHeight: 280 }}>
            <Image src="/images/gear/riding-gear-wall.jpg" alt="Fox Racing gear" fill
              className="object-cover group-hover:scale-105 transition-transform duration-600"
              sizes="(max-width:640px) 100vw, 50vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
            <div className="absolute top-4 left-4 w-7 h-[2px] bg-[#CC1F1F]" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <h3 className="font-[family-name:var(--font-display)] text-[22px] sm:text-[24px] text-white tracking-wide mb-1">Riding Gear</h3>
              <p className="text-white/50 text-[11px] mb-3">Fox · Thor · RHK · 100%</p>
              <span className="inline-flex items-center gap-2 text-[10px] font-bold text-white/60 uppercase tracking-widest group-hover:text-white group-hover:gap-3 transition-all">
                Shop Now <ArrowRight size={10} />
              </span>
            </div>
          </Link>

          <Link href="/parts/helmets"
            className="group relative rounded-2xl overflow-hidden block shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            style={{ height: 220 }}>
            <Image src="/images/gear/helmets-goggles.jpg" alt="Helmets" fill
              className="object-cover group-hover:scale-105 transition-transform duration-600"
              sizes="(max-width:640px) 100vw, 33vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <h3 className="font-[family-name:var(--font-display)] text-[20px] sm:text-[22px] text-white tracking-wide mb-0.5">Helmets &amp; Goggles</h3>
              <p className="text-white/45 text-[11px]">Full certified range</p>
            </div>
          </Link>

          <Link href="/parts/apparel"
            className="group relative rounded-2xl overflow-hidden block shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            style={{ height: 220 }}>
            <Image src="/images/gear/thor-jerseys.jpg" alt="Apparel" fill
              className="object-cover group-hover:scale-105 transition-transform duration-600"
              sizes="(max-width:640px) 100vw, 33vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <h3 className="font-[family-name:var(--font-display)] text-[20px] sm:text-[22px] text-white tracking-wide mb-0.5">MX Apparel</h3>
              <p className="text-white/45 text-[11px]">Thor · Fox · RHK</p>
            </div>
          </Link>
        </div>

        {/* Bottom row — always 1col → 2col sm+ */}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/outdoor-power"
            className="group relative rounded-2xl overflow-hidden block shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            style={{ height: 190 }}>
            <Image src="/images/showroom/power-equipment.jpg" alt="Power equipment" fill
              className="object-cover group-hover:scale-105 transition-transform duration-600"
              sizes="(max-width:640px) 100vw, 50vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p className="text-[9px] font-bold tracking-widest uppercase text-[#CC1F1F] mb-1">Chainsaws · Mowers · Generators</p>
              <h3 className="font-[family-name:var(--font-display)] text-[20px] sm:text-[22px] text-white tracking-wide">Power Equipment</h3>
            </div>
          </Link>

          <Link href="/contact"
            className="group relative rounded-2xl overflow-hidden block shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            style={{ height: 190 }}>
            <Image src="/images/store/storefront.jpg" alt="MNA Moto storefront" fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-600"
              sizes="(max-width:640px) 100vw, 50vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p className="text-[9px] font-bold tracking-widest uppercase text-[#CC1F1F] mb-1">Hamilton · Victoria</p>
              <h3 className="font-[family-name:var(--font-display)] text-[20px] sm:text-[22px] text-white tracking-wide">Visit Us In Store</h3>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

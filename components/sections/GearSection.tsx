import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const cats = [
  { title: "Riding Gear", sub: "Fox · Thor · RHK · 100%", image: "/images/gear/riding-gear-wall.jpg", alt: "Fox Racing gear wall", href: "/parts/gear", tall: true },
  { title: "Helmets & Goggles", sub: "Full certified range", image: "/images/gear/helmets-goggles.jpg", alt: "Helmets and goggles", href: "/parts/helmets", tall: false },
  { title: "MX Apparel", sub: "Thor · Fox · RHK", image: "/images/gear/thor-jerseys.jpg", alt: "Thor jerseys", href: "/parts/apparel", tall: false },
];

export default function GearSection() {
  return (
    <section className="py-20">
      <div className="max-w-[1320px] mx-auto px-5 lg:px-10">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#CC1F1F] mb-2">Parts &amp; Accessories</p>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(40px,6vw,68px)] text-gray-900 leading-none tracking-wide">GEAR UP.</h2>
          </div>
          <Link href="/parts" className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 hover:border-[#CC1F1F] hover:text-[#CC1F1F] text-gray-600 font-semibold text-[13px] rounded-xl transition-all shadow-sm">
            Shop All <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <Link href={cats[0].href} className="group relative rounded-2xl overflow-hidden lg:row-span-2 block shadow-md hover:shadow-xl transition-all duration-400 hover:-translate-y-1" style={{ minHeight: 400 }}>
            <Image src={cats[0].image} alt={cats[0].alt} fill className="object-cover group-hover:scale-105 transition-transform duration-600" sizes="33vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
            <div className="absolute top-5 left-5 w-8 h-[2px] bg-[#CC1F1F]" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="font-[family-name:var(--font-display)] text-[26px] text-white tracking-wide mb-1">{cats[0].title}</h3>
              <p className="text-white/50 text-[12px] mb-4">{cats[0].sub}</p>
              <span className="inline-flex items-center gap-2 text-[11px] font-bold text-white/60 uppercase tracking-widest group-hover:text-white group-hover:gap-4 transition-all">
                Shop Now <ArrowRight size={11} />
              </span>
            </div>
          </Link>

          {cats.slice(1).map((cat) => (
            <Link key={cat.href} href={cat.href} className="group relative rounded-2xl overflow-hidden block shadow-md hover:shadow-xl transition-all duration-400 hover:-translate-y-1" style={{ height: 260 }}>
              <Image src={cat.image} alt={cat.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-600" sizes="33vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-[family-name:var(--font-display)] text-[22px] text-white tracking-wide mb-0.5">{cat.title}</h3>
                <p className="text-white/45 text-[11px]">{cat.sub}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/outdoor-power" className="group relative rounded-2xl overflow-hidden block shadow-md hover:shadow-xl transition-all duration-400 hover:-translate-y-1" style={{ height: 220 }}>
            <Image src="/images/showroom/power-equipment.jpg" alt="Power equipment" fill className="object-cover group-hover:scale-105 transition-transform duration-600" sizes="50vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p className="text-[10px] font-bold tracking-widest uppercase text-[#CC1F1F] mb-1">Chainsaws · Mowers · Generators</p>
              <h3 className="font-[family-name:var(--font-display)] text-[22px] text-white tracking-wide">Power Equipment</h3>
            </div>
          </Link>
          <Link href="/contact" className="group relative rounded-2xl overflow-hidden block shadow-md hover:shadow-xl transition-all duration-400 hover:-translate-y-1" style={{ height: 220 }}>
            <Image src="/images/store/storefront.jpg" alt="MNA Moto storefront" fill className="object-cover object-center group-hover:scale-105 transition-transform duration-600" sizes="50vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p className="text-[10px] font-bold tracking-widest uppercase text-[#CC1F1F] mb-1">Hamilton · Victoria</p>
              <h3 className="font-[family-name:var(--font-display)] text-[22px] text-white tracking-wide">Visit Us In Store</h3>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

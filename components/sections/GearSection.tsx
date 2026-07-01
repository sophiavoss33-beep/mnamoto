import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Using real MNA Moto store photography throughout
const panels = [
  {
    href: "/parts/gear",
    image: "/images/gear/fox-boots-helmets-wall.jpg",
    alt: "Fox Racing boots, helmets and riding gear wall at MNA Moto Supplies",
    eyebrow: "Fox · Thor · RHK · 100%",
    title: "Riding Gear",
    sub: "Boots, jerseys, pants and protection",
    tall: true,
  },
  {
    href: "/parts/helmets",
    image: "/images/gear/thor-helmets-goggles.jpg",
    alt: "Thor helmets and 100% goggles displayed in-store at MNA Moto",
    eyebrow: "Thor · 100% · ProGrip",
    title: "Helmets & Goggles",
    sub: "Certified range. Fitted in store.",
    tall: false,
  },
  {
    href: "/parts/apparel",
    image: "/images/gear/thor-jerseys-rack.jpg",
    alt: "Thor MX jerseys on rack with Motorex and RHK products visible",
    eyebrow: "Thor · Fox · RHK",
    title: "MX Apparel",
    sub: "Jerseys, pants, gloves & casual",
    tall: false,
  },
  {
    href: "/outdoor-power",
    image: "/images/showroom/counter-power-equipment.jpg",
    alt: "MNA Moto power equipment including Greenworks ride-on mower and Oregon chainsaw accessories",
    eyebrow: "Greenworks · Oregon · Blue Diamond",
    title: "Power Equipment",
    sub: "Chainsaws · Mowers · Brushcutters",
    tall: false,
  },
  {
    href: "/parts",
    image: "/images/showroom/rhk-parts-wall.jpg",
    alt: "RHK parts wall with KTM bikes in background at MNA Moto Supplies showroom",
    eyebrow: "RHK · Genuine Parts",
    title: "Parts & Accessories",
    sub: "Genuine & aftermarket parts in stock",
    tall: false,
  },
];

export default function GearSection() {
  return (
    <section className="py-14 sm:py-20">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">

        <div className="flex items-end justify-between mb-8 sm:mb-12 gap-3">
          <div>
            <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#CC1F1F] mb-2">In Store Now</p>
            <h2 className="font-[family-name:var(--font-display)] leading-none tracking-wide text-gray-900"
              style={{ fontSize: "clamp(34px, 6vw, 62px)" }}>
              EVERYTHING<br />YOU NEED.
            </h2>
          </div>
          <Link href="/parts"
            className="flex-shrink-0 inline-flex items-center gap-1.5 px-4 py-2.5 bg-white border border-gray-200 hover:border-[#CC1F1F] hover:text-[#CC1F1F] text-gray-600 font-semibold text-[12px] rounded-xl transition-all shadow-sm min-h-[44px] whitespace-nowrap">
            Shop All <ArrowRight size={13} />
          </Link>
        </div>

        {/* Desktop: asymmetric grid. Mobile: stacked */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

          {/* Tall hero panel */}
          <Link href={panels[0].href}
            className="group relative rounded-2xl overflow-hidden block shadow-sm hover:shadow-xl transition-all duration-400 hover:-translate-y-1 sm:col-span-2 lg:col-span-1 lg:row-span-2"
            style={{ minHeight: 300 }}>
            <Image src={panels[0].image} alt={panels[0].alt} fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width:640px) 100vw, 50vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/20 to-transparent" />
            <div className="absolute top-4 left-4 w-7 h-[2px] bg-[#CC1F1F]" />
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
              <p className="text-[9px] font-bold tracking-[0.15em] uppercase text-[#CC1F1F] mb-1.5">{panels[0].eyebrow}</p>
              <h3 className="font-[family-name:var(--font-display)] text-[24px] sm:text-[26px] text-white tracking-wide leading-none mb-1">
                {panels[0].title}
              </h3>
              <p className="text-white/50 text-[11px] mb-4">{panels[0].sub}</p>
              <span className="inline-flex items-center gap-2 text-[10px] font-bold text-white/60 uppercase tracking-widest group-hover:text-white group-hover:gap-3 transition-all">
                Shop Now <ArrowRight size={10} />
              </span>
            </div>
          </Link>

          {/* Helmets */}
          <Link href={panels[1].href}
            className="group relative rounded-2xl overflow-hidden block shadow-sm hover:shadow-xl transition-all duration-400 hover:-translate-y-1"
            style={{ height: 230 }}>
            <Image src={panels[1].image} alt={panels[1].alt} fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width:640px) 100vw, 33vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/15 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p className="text-[9px] font-bold tracking-[0.15em] uppercase text-[#CC1F1F] mb-1">{panels[1].eyebrow}</p>
              <h3 className="font-[family-name:var(--font-display)] text-[20px] sm:text-[22px] text-white tracking-wide leading-none mb-0.5">{panels[1].title}</h3>
              <p className="text-white/45 text-[11px]">{panels[1].sub}</p>
            </div>
          </Link>

          {/* Apparel */}
          <Link href={panels[2].href}
            className="group relative rounded-2xl overflow-hidden block shadow-sm hover:shadow-xl transition-all duration-400 hover:-translate-y-1"
            style={{ height: 230 }}>
            <Image src={panels[2].image} alt={panels[2].alt} fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width:640px) 100vw, 33vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/15 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p className="text-[9px] font-bold tracking-[0.15em] uppercase text-[#CC1F1F] mb-1">{panels[2].eyebrow}</p>
              <h3 className="font-[family-name:var(--font-display)] text-[20px] sm:text-[22px] text-white tracking-wide leading-none mb-0.5">{panels[2].title}</h3>
              <p className="text-white/45 text-[11px]">{panels[2].sub}</p>
            </div>
          </Link>
        </div>

        {/* Bottom row — power equipment + parts wall */}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {panels.slice(3).map((p) => (
            <Link key={p.href} href={p.href}
              className="group relative rounded-2xl overflow-hidden block shadow-sm hover:shadow-xl transition-all duration-400 hover:-translate-y-1"
              style={{ height: 210 }}>
              <Image src={p.image} alt={p.alt} fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width:640px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-[9px] font-bold tracking-[0.15em] uppercase text-[#CC1F1F] mb-1">{p.eyebrow}</p>
                <h3 className="font-[family-name:var(--font-display)] text-[20px] sm:text-[22px] text-white tracking-wide leading-none mb-0.5">{p.title}</h3>
                <p className="text-white/45 text-[11px]">{p.sub}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

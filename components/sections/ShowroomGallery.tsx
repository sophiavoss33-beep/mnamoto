"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const panels = [
  {
    image: "/images/showroom/showroom-floor.jpg",
    alt: "MNA Moto showroom with CFMOTO UTVs and GASGAS dirt bikes on display",
    label: "Motorcycle & ATV Showroom",
    href: "/motorcycles",
    wide: true,
  },
  {
    image: "/images/showroom/parts-wall.jpg",
    alt: "RHK parts wall with a large range of accessories and bikes in the background",
    label: "Parts & Accessories",
    href: "/parts",
  },
  {
    image: "/images/gear/riding-gear-wall.jpg",
    alt: "Full wall display of Fox Racing boots, helmets and riding gear",
    label: "Riding Gear",
    href: "/parts",
  },
  {
    image: "/images/gear/thor-jerseys.jpg",
    alt: "Thor MX jerseys rack with RHK and Motorex products visible",
    label: "MX Apparel",
    href: "/parts",
  },
  {
    image: "/images/showroom/power-equipment.jpg",
    alt: "MNA Moto indoor power equipment section with GASGAS balance bike and Greenworks mower",
    label: "Power Equipment",
    href: "/outdoor-power",
  },
];

export default function ShowroomGallery() {
  return (
    <section className="py-24 bg-[#0a0a0a]" aria-label="Showroom gallery">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="mb-12">
          <span className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#e85d26] block mb-3">
            Visit In-Store
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(32px,4vw,52px)] font-bold tracking-[-0.03em] leading-none text-white mb-4">
            One Store.<br />Everything You Need.
          </h2>
          <p className="text-[17px] text-white/45 max-w-[480px] leading-relaxed">
            From KTM enduro bikes to CFMOTO ATVs, Thor jerseys to chainsaw parts — it&apos;s all here under one roof in Victoria.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[220px]">
          {/* Large panel */}
          <Link
            href={panels[0].href}
            className="col-span-2 row-span-2 group relative rounded-xl overflow-hidden"
            aria-label={panels[0].label}
          >
            <Image
              src={panels[0].image}
              alt={panels[0].alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
              <span className="text-white font-bold font-[family-name:var(--font-display)] text-[18px]">{panels[0].label}</span>
              <div className="w-9 h-9 rounded-full bg-[#e85d26] flex items-center justify-center text-white">
                <ArrowRight size={16} />
              </div>
            </div>
          </Link>

          {/* Small panels */}
          {panels.slice(1).map((panel) => (
            <Link
              key={panel.href + panel.label}
              href={panel.href}
              className="group relative rounded-xl overflow-hidden"
              aria-label={panel.label}
            >
              <Image
                src={panel.image}
                alt={panel.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/75 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-white font-semibold text-[13px] font-[family-name:var(--font-display)]">{panel.label}</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Storefront */}
        <div className="mt-3 relative rounded-xl overflow-hidden h-[240px]">
          <Image
            src="/images/store/storefront.jpg"
            alt="MNA Moto storefront with red signage showing Chainsaws, Motorcycles, Lawnmowers and Brushcutters"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/70 via-[#0a0a0a]/30 to-transparent" />
          <div className="absolute inset-0 flex items-center p-8 md:p-12">
            <div>
              <p className="text-white/60 text-[12px] font-semibold tracking-[0.08em] uppercase mb-2">Find Us</p>
              <h3 className="text-white font-[family-name:var(--font-display)] text-[clamp(20px,3vw,32px)] font-bold tracking-tight mb-4">
                MNA Moto — Main Street, Victoria
              </h3>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#e85d26] hover:bg-[#c44d1e] text-white font-semibold text-[13.5px] rounded-lg transition-all"
              >
                Get Directions <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

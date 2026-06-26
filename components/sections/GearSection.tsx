import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    title: "Helmets & Goggles",
    desc: "Thor, Fox, 100%, Progrip and more. Certified helmets for every rider.",
    href: "/parts/helmets",
    image: "/images/gear/helmets-goggles.jpg",
    alt: "Display shelf showing Thor and Fox helmets with 100% goggles",
  },
  {
    title: "Riding Gear",
    desc: "Fox Racing boots, jerseys and full kit. Gear up right.",
    href: "/parts/gear",
    image: "/images/gear/riding-gear-wall.jpg",
    alt: "Full wall display of Fox Racing riding boots and helmets",
  },
  {
    title: "MX Apparel",
    desc: "Thor, RHK and more. Full range of MX and casual riding apparel.",
    href: "/parts/apparel",
    image: "/images/gear/thor-jerseys.jpg",
    alt: "Thor MX jersey rack in the MNA Moto store",
  },
];

export default function GearSection() {
  return (
    <section className="py-24 bg-[#f5f5f3]" aria-label="Riding gear and accessories">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#e85d26] block mb-3">
              Parts &amp; Accessories
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(32px,4vw,52px)] font-bold tracking-[-0.03em] leading-none text-[#1a1a1a]">
              Gear Up.
            </h2>
            <p className="text-[17px] text-[#888] mt-3 max-w-[400px] leading-relaxed">
              A fully stocked store with the brands serious riders trust.
            </p>
          </div>
          <Link
            href="/parts"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-[#1a1a1a] hover:bg-[#333] text-white text-[13.5px] font-semibold rounded-lg transition-all flex-shrink-0"
          >
            Shop All Gear <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {categories.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className="group relative rounded-2xl overflow-hidden aspect-[4/5] block"
              aria-label={cat.title}
            >
              <Image
                src={cat.image}
                alt={cat.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-[#0a0a0a]/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white font-[family-name:var(--font-display)] text-[20px] font-bold tracking-tight mb-2">
                  {cat.title}
                </h3>
                <p className="text-white/55 text-[13px] leading-relaxed mb-4">{cat.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-[#e85d26] text-[13px] font-semibold group-hover:gap-3 transition-all">
                  Shop Now <ArrowRight size={13} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";

const panels = [
  {
    image: "/images/bikes/ycf-125se-mx.jpg",
    alt: "YCF 125SE MX pit bike on green paddock",
    label: "New Motorcycles",
    sub: "KTM · Husqvarna · GASGAS · YCF · Sunday",
    href: "/motorcycles/new",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    image: "/images/gear/riding-gear-wall.jpg",
    alt: "Fox Racing boots and helmets display wall",
    label: "Riding Gear",
    sub: "Fox · Thor · 100% · RHK",
    href: "/parts",
    span: "",
  },
  {
    image: "/images/gear/helmets-goggles.jpg",
    alt: "Helmet and goggle display",
    label: "Helmets & Goggles",
    sub: "Full range in store",
    href: "/parts",
    span: "",
  },
  {
    image: "/images/showroom/power-equipment.jpg",
    alt: "Power equipment section with Greenworks and GASGAS",
    label: "Power Equipment",
    sub: "Chainsaws · Mowers · Blowers",
    href: "/outdoor-power",
    span: "",
  },
  {
    image: "/images/gear/thor-jerseys.jpg",
    alt: "Thor MX jersey rack",
    label: "MX Apparel",
    sub: "Thor · Fox · RHK",
    href: "/parts",
    span: "",
  },
];

export default function ShowroomGallery() {
  return (
    <section className="bg-[#0d0d0d] py-24">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10">

        {/* Section header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-6 h-[2px] bg-[#cc1f1f]" />
              <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-white/40">In Store</span>
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(28px,4vw,44px)] font-bold tracking-[-0.03em] text-white leading-none">
              Everything You Need.
            </h2>
          </div>
          <Link href="/contact" className="hidden sm:inline-flex text-[13px] font-semibold text-white/40 hover:text-white transition-colors">
            Visit In-Store →
          </Link>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 auto-rows-[200px]">
          {panels.map((p) => (
            <Link
              key={p.href + p.label}
              href={p.href}
              className={`group relative overflow-hidden rounded-xl ${p.span}`}
              aria-label={p.label}
            >
              <Image
                src={p.image}
                alt={p.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              {/* Red accent bar */}
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#cc1f1f] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              {/* Text */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="text-white font-[family-name:var(--font-display)] font-bold text-[16px] tracking-tight leading-snug">
                  {p.label}
                </div>
                <div className="text-white/50 text-[11px] font-medium mt-0.5">{p.sub}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

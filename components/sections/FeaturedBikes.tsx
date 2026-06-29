import Image from "next/image";
import Link from "next/link";

// Editorial stacked panels - directly inspired by reference layout
const panels = [
  {
    image: "/images/bikes/ycf-125se-mx.jpg",
    alt: "YCF 125SE MX pit bike in paddock",
    eyebrow: "New Arrivals · 2025",
    title: "MOTORCYCLES",
    sub: "Explore our range",
    cta: "Explore Here",
    href: "/motorcycles",
  },
  {
    image: "/images/gear/riding-gear-wall.jpg",
    alt: "Fox Racing riding gear wall",
    eyebrow: "Fox · Thor · RHK · 100%",
    title: "RIDING GEAR",
    sub: "Shop all things Moto",
    cta: "Shop Now",
    href: "/parts",
  },
  {
    image: "/images/gear/helmets-goggles.jpg",
    alt: "Helmets and goggles display",
    eyebrow: "Certified & In-Store",
    title: "HELMETS & GOGGLES",
    sub: "Full range available",
    cta: "Shop Now",
    href: "/parts/helmets",
  },
];

export default function FeaturedBikes() {
  return (
    <div>
      {panels.map((panel, i) => (
        <div key={panel.title} className="relative overflow-hidden" style={{ height: "90vh", minHeight: 560 }}>
          <Image
            src={panel.image}
            alt={panel.alt}
            fill
            className="object-cover object-center"
            sizes="100vw"
            style={{ opacity: i === 0 ? 0.7 : i === 1 ? 0.65 : 0.6 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/30" />

          {/* Vertical side text like reference */}
          <div className="absolute right-5 top-1/2 -translate-y-1/2 hidden lg:block">
            <span className="text-[9px] font-semibold tracking-[0.25em] uppercase text-white/25" style={{ writingMode: "vertical-rl" }}>
              {panel.eyebrow}
            </span>
          </div>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16">
            <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-white/40 mb-3">{panel.eyebrow}</p>
            <h2 className="font-[family-name:var(--font-display)] text-white leading-none tracking-wider mb-2"
              style={{ fontSize: "clamp(52px, 10vw, 140px)" }}>
              {panel.title}
            </h2>
            <p className="text-[14px] text-white/50 mb-8 font-light">{panel.sub}</p>
            <div>
              <Link href={panel.href}
                className="inline-block px-10 py-3 border border-white text-white font-bold text-[11px] tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all">
                {panel.cta}
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

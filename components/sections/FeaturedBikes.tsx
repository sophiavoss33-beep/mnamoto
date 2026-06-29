import Image from "next/image";
import Link from "next/link";

const panels = [
  {
    image: "/images/bikes/ycf-125se-mx.jpg",
    alt: "YCF 125SE MX pit bike",
    eyebrow: "New Arrivals · 2025",
    title: "MOTORCYCLES",
    sub: "Explore our range",
    cta: "EXPLORE HERE",
    href: "/motorcycles",
  },
  {
    image: "/images/gear/riding-gear-wall.jpg",
    alt: "Fox Racing riding gear",
    eyebrow: "Fox · Thor · RHK · 100%",
    title: "RIDING GEAR",
    sub: "Shop all things Moto",
    cta: "SHOP NOW",
    href: "/parts",
  },
  {
    image: "/images/bikes/cfmoto-atv-range.jpg",
    alt: "CFMOTO ATV range",
    eyebrow: "CFMOTO · Authorised Dealer",
    title: "ATVs & UTVs",
    sub: "Work hard. Ride harder.",
    cta: "EXPLORE HERE",
    href: "/motorcycles/atv",
  },
];

export default function FeaturedBikes() {
  return (
    <section className="bg-white">
      {panels.map((panel) => (
        <div key={panel.title} className="px-4 sm:px-6 py-3">
          <div className="relative overflow-hidden" style={{ height: "85vh", minHeight: 520 }}>
            <Image
              src={panel.image}
              alt={panel.alt}
              fill
              className="object-cover object-center"
              sizes="100vw"
              style={{ opacity: 0.75 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-black/20" />

            {/* Vertical text right side like reference */}
            <div className="absolute right-5 top-8 hidden lg:block">
              <span className="text-[8px] font-semibold tracking-[0.3em] uppercase text-white/30" style={{ writingMode: "vertical-rl" }}>
                {panel.eyebrow}
              </span>
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-white/40 mb-3">{panel.eyebrow}</p>
              <h2 className="font-[family-name:var(--font-display)] text-white leading-none tracking-wider mb-2"
                style={{ fontSize: "clamp(48px, 9vw, 130px)" }}>
                {panel.title}
              </h2>
              <p className="text-[13px] text-white/50 mb-8 font-light">{panel.sub}</p>
              <Link href={panel.href}
                className="inline-block px-10 py-3 border border-white text-white font-bold text-[11px] tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all">
                {panel.cta}
              </Link>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

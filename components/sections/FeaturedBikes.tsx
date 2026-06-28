import Image from "next/image";
import Link from "next/link";

const bikes = [
  {
    brand: "YCF",
    name: "125SE MX",
    year: 2025,
    price: "$3,490",
    badge: "New",
    image: "/images/bikes/ycf-125se-mx.jpg",
    alt: "YCF 125SE MX with purple and blue graphics on green paddock",
    href: "/motorcycles/new",
    cc: "125cc · MX Pit Bike",
  },
  {
    brand: "CFMOTO",
    name: "CForce 400 EPS",
    year: 2025,
    price: "$9,490",
    badge: "New",
    image: "/images/bikes/cfmoto-atv-range.jpg",
    alt: "CFMOTO CForce ATV range",
    href: "/motorcycles/atv",
    cc: "400cc · ATV",
  },
  {
    brand: "Sunday",
    name: "X 124SE",
    year: 2026,
    price: "$3,299",
    badge: "New",
    image: "/images/bikes/sunday-x124se.jpg",
    alt: "2026 Sunday X 124SE youth bikes in multiple colours",
    href: "/motorcycles/youth",
    cc: "124cc · Youth MX",
  },
];

export default function FeaturedBikes() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-6 h-[2px] bg-[#cc1f1f]" />
              <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-black/40">In Stock Now</span>
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(28px,4vw,44px)] font-bold tracking-[-0.03em] text-black leading-none">
              Featured Rides
            </h2>
          </div>
          <Link href="/motorcycles" className="text-[13px] font-semibold text-black/40 hover:text-black transition-colors">
            View all →
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bikes.map((bike) => (
            <Link
              key={bike.name}
              href={bike.href}
              className="group block bg-[#f7f7f7] rounded-2xl overflow-hidden hover:shadow-[0_16px_48px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-[220px] overflow-hidden bg-[#eeeeee]">
                <span className="absolute top-4 left-4 z-10 px-2.5 py-1 bg-[#cc1f1f] text-white text-[10px] font-bold tracking-[0.08em] uppercase rounded-md">
                  {bike.badge}
                </span>
                <Image
                  src={bike.image}
                  alt={bike.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Info */}
              <div className="p-6">
                <div className="text-[10px] font-bold tracking-[0.12em] uppercase text-[#cc1f1f] mb-1.5">
                  {bike.brand}
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-[20px] font-bold text-black tracking-tight mb-1">
                  {bike.year} {bike.name}
                </h3>
                <p className="text-[12.5px] text-black/40 font-medium mb-5">{bike.cc}</p>
                <div className="flex items-center justify-between pt-4 border-t border-black/[0.08]">
                  <div>
                    <div className="font-[family-name:var(--font-display)] text-[24px] font-bold text-black tracking-tight">
                      {bike.price}
                    </div>
                    <div className="text-[10px] text-black/35 font-medium mt-0.5">Ride Away</div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-black group-hover:bg-[#cc1f1f] flex items-center justify-center transition-colors duration-300">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

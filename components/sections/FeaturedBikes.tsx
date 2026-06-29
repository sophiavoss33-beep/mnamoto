import Image from "next/image";
import Link from "next/link";

const bikes = [
  { brand: "YCF", name: "125SE MX", year: 2025, price: "$3,490", image: "/images/bikes/ycf-125se-mx.jpg", alt: "YCF 125SE MX", spec: "125cc · MX Pit Bike", href: "/motorcycles/new" },
  { brand: "CFMOTO", name: "CForce 400 EPS", year: 2025, price: "$9,490", image: "/images/bikes/cfmoto-atv-range.jpg", alt: "CFMOTO CForce 400", spec: "400cc · ATV", href: "/motorcycles/atv" },
  { brand: "Sunday", name: "X 124SE", year: 2026, price: "$3,299", image: "/images/bikes/sunday-x124se.jpg", alt: "Sunday X 124SE", spec: "124cc · Youth MX", href: "/motorcycles/youth" },
];

export default function FeaturedBikes() {
  return (
    <section className="py-32 bg-[#0a0a0a]">
      <div className="max-w-[1400px] mx-auto px-10 lg:px-20">
        <div className="flex items-end justify-between mb-20">
          <h2 className="font-[family-name:var(--font-display)] text-white leading-none tracking-wider" style={{ fontSize: "clamp(52px,7vw,96px)" }}>
            IN STOCK<br /><span className="text-[#cc1f1f]">NOW.</span>
          </h2>
          <Link href="/motorcycles" className="text-[11px] font-semibold tracking-[0.25em] uppercase text-white/30 hover:text-white transition-colors pb-2 border-b border-white/20 hover:border-white/60">
            View All Bikes
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bikes.map((bike) => (
            <Link key={bike.name} href={bike.href} className="group block">
              <div className="relative h-[260px] rounded-xl overflow-hidden bg-[#111] mb-6">
                <span className="absolute top-4 left-4 z-10 px-3 py-1 bg-[#cc1f1f] text-white text-[9px] font-bold tracking-[0.12em] uppercase rounded">
                  NEW
                </span>
                <Image src={bike.image} alt={bike.alt} fill className="object-cover opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-600" sizes="33vw" />
              </div>
              <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#cc1f1f] mb-2">{bike.brand}</div>
              <h3 className="font-[family-name:var(--font-display)] text-[28px] text-white tracking-wide leading-none mb-1">{bike.year} {bike.name}</h3>
              <p className="text-[12px] text-white/30 font-medium mb-5">{bike.spec}</p>
              <div className="flex items-center justify-between pt-5 border-t border-white/[0.07]">
                <span className="font-[family-name:var(--font-display)] text-[32px] text-white tracking-wide">{bike.price}</span>
                <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-white/30 group-hover:text-[#cc1f1f] transition-colors">View →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

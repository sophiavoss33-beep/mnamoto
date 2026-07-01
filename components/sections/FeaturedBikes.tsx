"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

const bikes = [
  {
    brand: "YCF", name: "125SE MX", year: 2025, price: "$3,490",
    image: "/images/bikes/ycf-125se-paddock.jpg",
    alt: "YCF 125SE MX in the Hamilton countryside — real MNA Moto stock photo",
    spec: "125cc · MX Pit Bike", badge: "New", href: "/motorcycles/new",
  },
  {
    brand: "CFMOTO", name: "CForce 400 EPS", year: 2025, price: "$9,490",
    image: "/images/bikes/cfmoto-atv-range.jpg",
    alt: "CFMOTO CForce 400 EPS ATV",
    spec: "400cc · ATV", badge: "New", href: "/motorcycles/atv",
  },
  {
    brand: "Sunday", name: "X 124SE", year: 2026, price: "$3,299",
    image: "/images/bikes/sunday-x124se.jpg",
    alt: "2026 Sunday X 124SE youth MX bike",
    spec: "124cc · Youth MX", badge: "New", href: "/motorcycles/youth",
  },
];

function Card({ bike, delay }: { bike: typeof bikes[0]; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.style.opacity = "1"; el.style.transform = "translateY(0)"; obs.disconnect(); }
    }, { threshold: 0.08 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ opacity: 0, transform: "translateY(24px)", transition: `all 0.6s cubic-bezier(0.4,0,0.2,1) ${delay}ms` }}>
      <Link href={bike.href}
        className="group block bg-white rounded-2xl overflow-hidden border border-black/[0.07] hover:shadow-[0_16px_48px_rgba(0,0,0,0.13)] transition-all duration-300 hover:-translate-y-1.5">
        <div className="relative overflow-hidden bg-gray-100" style={{ height: 210 }}>
          <span className="absolute top-3 left-3 z-10 px-2.5 py-1 bg-[#CC1F1F] text-white text-[9px] font-bold tracking-widest uppercase rounded-lg">
            {bike.badge}
          </span>
          <Image src={bike.image} alt={bike.alt} fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw" />
        </div>
        <div className="p-4 sm:p-5">
          <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#CC1F1F] mb-1">{bike.brand}</p>
          <h3 className="font-[family-name:var(--font-display)] text-[21px] sm:text-[23px] text-gray-900 tracking-wide leading-none mb-1.5">
            {bike.year} {bike.name}
          </h3>
          <p className="text-[11px] text-gray-400 font-medium mb-4">{bike.spec}</p>
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div>
              <div className="font-[family-name:var(--font-display)] text-[25px] sm:text-[27px] text-gray-900 tracking-wide leading-none">{bike.price}</div>
              <div className="text-[9px] text-gray-400 font-semibold mt-0.5 uppercase tracking-wide">Ride Away</div>
            </div>
            <div className="w-9 h-9 rounded-full bg-gray-100 group-hover:bg-[#CC1F1F] flex items-center justify-center transition-all duration-300 flex-shrink-0">
              <ArrowRight size={14} className="text-gray-500 group-hover:text-white transition-colors" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default function FeaturedBikes() {
  return (
    <section className="py-14 sm:py-20">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-end justify-between mb-8 sm:mb-12 gap-3">
          <div>
            <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#CC1F1F] mb-2">In Stock Now</p>
            <h2 className="font-[family-name:var(--font-display)] leading-none tracking-wide text-gray-900"
              style={{ fontSize: "clamp(34px, 6vw, 62px)" }}>
              FEATURED RIDES
            </h2>
          </div>
          <Link href="/motorcycles"
            className="flex-shrink-0 inline-flex items-center gap-1.5 px-4 py-2.5 bg-white border border-gray-200 hover:border-[#CC1F1F] hover:text-[#CC1F1F] text-gray-600 font-semibold text-[12px] rounded-xl transition-all shadow-sm min-h-[44px] whitespace-nowrap">
            View All <ArrowRight size={13} />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {bikes.map((b, i) => <Card key={b.name} bike={b} delay={i * 100} />)}
        </div>
      </div>
    </section>
  );
}

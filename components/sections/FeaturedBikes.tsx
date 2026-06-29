"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

const bikes = [
  { brand: "YCF", name: "125SE MX", year: 2025, price: "$3,490", image: "/images/bikes/ycf-125se-mx.jpg", alt: "YCF 125SE MX pit bike", spec: "125cc · MX Pit Bike", href: "/motorcycles/new" },
  { brand: "CFMOTO", name: "CForce 400 EPS", year: 2025, price: "$9,490", image: "/images/bikes/cfmoto-atv-range.jpg", alt: "CFMOTO CForce 400 EPS ATV", spec: "400cc · ATV", href: "/motorcycles/atv" },
  { brand: "Sunday", name: "X 124SE", year: 2026, price: "$3,299", image: "/images/bikes/sunday-x124se.jpg", alt: "2026 Sunday X 124SE", spec: "124cc · Youth MX", href: "/motorcycles/youth" },
];

function BikeCard({ bike, delay }: { bike: typeof bikes[0]; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.style.opacity = "1"; el.style.transform = "translateY(0)"; obs.disconnect(); }
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ opacity: 0, transform: "translateY(28px)", transition: `all 0.6s cubic-bezier(0.4,0,0.2,1) ${delay}ms` }}>
      <Link href={bike.href} className="group block bg-white rounded-2xl overflow-hidden border border-black/[0.07] hover:border-black/[0.12] hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] transition-all duration-400 hover:-translate-y-1.5">
        <div className="relative overflow-hidden bg-gray-100" style={{ height: 230 }}>
          <span className="absolute top-4 left-4 z-10 px-3 py-1 bg-[#CC1F1F] text-white text-[10px] font-bold tracking-widest uppercase rounded-lg">New</span>
          <Image src={bike.image} alt={bike.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="33vw" />
        </div>
        <div className="p-6">
          <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#CC1F1F] mb-1.5">{bike.brand}</p>
          <h3 className="font-[family-name:var(--font-display)] text-[24px] text-gray-900 tracking-wide leading-none mb-1.5">{bike.year} {bike.name}</h3>
          <p className="text-[12px] text-gray-400 font-medium mb-5">{bike.spec}</p>
          <div className="flex items-center justify-between pt-5 border-t border-gray-100">
            <div>
              <div className="font-[family-name:var(--font-display)] text-[28px] text-gray-900 tracking-wide">{bike.price}</div>
              <div className="text-[10px] text-gray-400 font-semibold mt-0.5 uppercase tracking-wide">Ride Away</div>
            </div>
            <div className="w-10 h-10 rounded-full bg-gray-100 group-hover:bg-[#CC1F1F] flex items-center justify-center transition-all duration-300">
              <ArrowRight size={16} className="text-gray-500 group-hover:text-white transition-colors" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default function FeaturedBikes() {
  return (
    <section className="py-20">
      <div className="max-w-[1320px] mx-auto px-5 lg:px-10">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#CC1F1F] mb-2">In Stock Now</p>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(40px,6vw,68px)] text-gray-900 leading-none tracking-wide">FEATURED RIDES</h2>
          </div>
          <Link href="/motorcycles" className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 hover:border-[#CC1F1F] hover:text-[#CC1F1F] text-gray-600 font-semibold text-[13px] rounded-xl transition-all shadow-sm">
            View All <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {bikes.map((bike, i) => <BikeCard key={bike.name} bike={bike} delay={i * 100} />)}
        </div>
      </div>
    </section>
  );
}

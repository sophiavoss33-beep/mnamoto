"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useRef, useEffect } from "react";

interface Bike {
  id: string;
  brand: string;
  name: string;
  year: number;
  price: string;
  priceLabel: string;
  cc: string;
  type: string;
  badge: "New" | "Used" | "Demo";
  image: string;
  imageAlt: string;
  slug: string;
  featured?: boolean;
}

const bikes: Bike[] = [
  {
    id: "ycf-125se-mx",
    brand: "YCF",
    name: "125SE MX",
    year: 2025,
    price: "$3,490",
    priceLabel: "Ride Away",
    cc: "125cc",
    type: "MX / Pit Bike",
    badge: "New",
    image: "/images/bikes/ycf-125se-mx.jpg",
    imageAlt: "YCF 125SE MX pit bike with purple and blue graphics on green paddock",
    slug: "/motorcycles/new/ycf-125se-mx",
  },
  {
    id: "cfmoto-cforce-400",
    brand: "CFMOTO",
    name: "CForce 400 EPS",
    year: 2025,
    price: "$9,490",
    priceLabel: "Ride Away",
    cc: "400cc",
    type: "ATV / Quad",
    badge: "New",
    image: "/images/bikes/cfmoto-atv-range.jpg",
    imageAlt: "CFMOTO CForce ATV range on display",
    slug: "/motorcycles/new/cfmoto-cforce-400",
    featured: true,
  },
  {
    id: "sunday-x124se-yellow",
    brand: "Sunday",
    name: "X 124SE",
    year: 2026,
    price: "$3,299",
    priceLabel: "Ride Away",
    cc: "124cc",
    type: "Youth MX",
    badge: "New",
    image: "/images/bikes/sunday-x124se.jpg",
    imageAlt: "2026 Sunday X 124SE youth motocross bikes in multiple colours",
    slug: "/motorcycles/new/sunday-x124se",
  },
];

function BikeCard({ bike }: { bike: Bike }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("opacity-100", "translate-y-0"); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const badgeColours = {
    New: "bg-[#e85d26] text-white",
    Used: "bg-[#1a1a1a] text-white",
    Demo: "bg-blue-600 text-white",
  };

  return (
    <div
      ref={ref}
      className="group bg-white border border-[#e8e8e8] rounded-2xl overflow-hidden opacity-0 translate-y-6 transition-all duration-700 hover:-translate-y-1 hover:shadow-[0_20px_56px_rgba(0,0,0,0.10)] hover:border-transparent"
    >
      {/* Image */}
      <div className="relative h-[240px] bg-[#f5f5f3] overflow-hidden">
        <span className={`absolute top-4 left-4 z-10 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-[0.08em] uppercase ${badgeColours[bike.badge]}`}>
          {bike.badge}
        </span>
        <Image
          src={bike.image}
          alt={bike.imageAlt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Info */}
      <div className="p-5 pb-6">
        <div className="text-[10px] font-bold tracking-[0.1em] uppercase text-[#e85d26] mb-1.5">{bike.brand}</div>
        <h3 className="font-[family-name:var(--font-display)] text-[19px] font-bold tracking-tight text-[#1a1a1a] mb-2 leading-snug">
          {bike.year} {bike.name}
        </h3>
        <div className="flex gap-3 mb-4">
          <span className="text-[12px] text-[#888] font-medium">{bike.cc}</span>
          <span className="text-[12px] text-[#888] font-medium">·</span>
          <span className="text-[12px] text-[#888] font-medium">{bike.type}</span>
        </div>
        <div className="flex items-center justify-between pt-4 border-t border-[#f0f0ee]">
          <div>
            <div className="font-[family-name:var(--font-display)] text-[22px] font-bold text-[#1a1a1a] tracking-tight">{bike.price}</div>
            <div className="text-[10px] text-[#888] font-medium mt-0.5">{bike.priceLabel}</div>
          </div>
          <Link
            href={bike.slug}
            className="w-9 h-9 rounded-full bg-[#f5f5f3] flex items-center justify-center text-[#1a1a1a] group-hover:bg-[#e85d26] group-hover:text-white transition-all"
            aria-label={`View ${bike.year} ${bike.name}`}
          >
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function FeaturedBikes() {
  return (
    <section className="py-24 bg-white" aria-label="Featured motorcycles">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#e85d26] block mb-3">
              What&apos;s in Stock
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(32px,4vw,52px)] font-bold tracking-[-0.03em] leading-none text-[#1a1a1a]">
              Featured Rides
            </h2>
            <p className="text-[17px] text-[#888] mt-3 max-w-[440px] leading-relaxed">
              Hand-picked from our current inventory. New arrivals every week.
            </p>
          </div>
          <Link
            href="/motorcycles"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-[#1a1a1a] hover:bg-[#333] text-white text-[13.5px] font-semibold rounded-lg transition-all flex-shrink-0"
          >
            View All Bikes
            <ArrowUpRight size={15} />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bikes.map((bike) => (
            <BikeCard key={bike.id} bike={bike} />
          ))}
        </div>

        <div className="flex justify-center mt-10 sm:hidden">
          <Link
            href="/motorcycles"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a1a1a] text-white text-[14px] font-semibold rounded-lg"
          >
            View All Bikes <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}

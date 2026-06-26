import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ArrowRight, SlidersHorizontal } from "lucide-react";

export const metadata: Metadata = {
  title: "Motorcycles | New & Used Bikes — MNA Moto",
  description: "Browse our full range of new and used motorcycles. KTM, Husqvarna, GASGAS, CFMOTO, YCF and Sunday — all in stock at MNA Moto, Victoria.",
};

const categories = [
  { title: "New Motorcycles", desc: "Latest models from KTM, Husqvarna, GASGAS, CFMOTO, YCF and Sunday", href: "/motorcycles/new", count: "In Stock" },
  { title: "Used Motorcycles", desc: "Quality pre-owned bikes, all inspected and ready to ride", href: "/motorcycles/used", count: "Quality Used" },
  { title: "Dirt & Enduro", desc: "MX, enduro and trail bikes from the world's best brands", href: "/motorcycles/dirt", count: "All Disciplines" },
  { title: "Youth Bikes", desc: "YCF, Sunday and junior models for the next generation of riders", href: "/motorcycles/youth", count: "Youth Range" },
  { title: "ATVs & UTVs", desc: "CFMOTO quads and side-by-sides for work and recreation", href: "/motorcycles/atv", count: "ATV Range" },
  { title: "Road & Adventure", desc: "Street and adventure motorcycles for the open road", href: "/motorcycles/road", count: "Road Range" },
];

const featured = [
  {
    brand: "YCF",
    name: "125SE MX",
    year: 2025,
    price: "$3,490",
    badge: "New",
    image: "/images/bikes/ycf-125se-mx.jpg",
    alt: "YCF 125SE MX pit bike with purple and blue graphics",
    href: "/motorcycles/new/ycf-125se-mx",
    cc: "125cc",
    type: "MX Pit Bike",
  },
  {
    brand: "CFMOTO",
    name: "CForce 400 EPS",
    year: 2025,
    price: "$9,490",
    badge: "New",
    image: "/images/bikes/cfmoto-atv-range.jpg",
    alt: "CFMOTO CForce 400 EPS ATV",
    href: "/motorcycles/new/cfmoto-cforce-400",
    cc: "400cc",
    type: "ATV",
  },
  {
    brand: "Sunday",
    name: "X 124SE Yellow",
    year: 2026,
    price: "$3,299",
    badge: "New",
    image: "/images/bikes/sunday-x124se.jpg",
    alt: "2026 Sunday X 124SE youth bike",
    href: "/motorcycles/new/sunday-x124se",
    cc: "124cc",
    type: "Youth MX",
  },
];

export default function Motorcycles() {
  return (
    <>
      <Header />
      <main>
        {/* Page hero */}
        <section className="pt-36 pb-16 bg-[#0a0a0a] relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative">
            <span className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#e85d26] block mb-4">MNA Moto</span>
            <h1 className="font-[family-name:var(--font-display)] text-[clamp(48px,7vw,80px)] font-bold tracking-[-0.04em] leading-none text-white mb-4">
              Motorcycles
            </h1>
            <p className="text-[17px] text-white/45 max-w-[480px] leading-relaxed">
              New and used motorcycles, ATVs and youth bikes from Victoria&apos;s most trusted dealer.
            </p>
          </div>
        </section>

        {/* Category grid */}
        <section className="py-16 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
              {categories.map((cat) => (
                <Link
                  key={cat.href}
                  href={cat.href}
                  className="group p-6 bg-[#f5f5f3] rounded-xl hover:bg-[#1a1a1a] transition-all duration-300"
                >
                  <div className="text-[10px] font-bold tracking-[0.1em] uppercase text-[#e85d26] mb-3">{cat.count}</div>
                  <h2 className="font-[family-name:var(--font-display)] text-[17px] font-bold text-[#1a1a1a] group-hover:text-white mb-2 tracking-tight transition-colors">
                    {cat.title}
                  </h2>
                  <p className="text-[13px] text-[#888] group-hover:text-white/50 leading-relaxed mb-4 transition-colors">{cat.desc}</p>
                  <span className="text-[#e85d26] text-[13px] font-semibold flex items-center gap-1.5 group-hover:gap-3 transition-all">
                    Browse <ArrowRight size={13} />
                  </span>
                </Link>
              ))}
            </div>

            {/* Featured */}
            <div className="mb-8 flex items-center justify-between">
              <h2 className="font-[family-name:var(--font-display)] text-[28px] font-bold tracking-[-0.02em] text-[#1a1a1a]">
                Current Stock
              </h2>
              <button className="flex items-center gap-2 px-4 py-2.5 border border-[#e8e8e8] rounded-lg text-[13px] font-semibold text-[#888] hover:border-[#1a1a1a] hover:text-[#1a1a1a] transition-all">
                <SlidersHorizontal size={14} /> Filter
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featured.map((bike) => (
                <Link key={bike.href} href={bike.href} className="group bg-white border border-[#e8e8e8] rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-[0_20px_56px_rgba(0,0,0,0.10)] hover:border-transparent transition-all">
                  <div className="relative h-[240px] bg-[#f5f5f3] overflow-hidden">
                    <span className={`absolute top-4 left-4 z-10 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase ${bike.badge === "New" ? "bg-[#e85d26] text-white" : "bg-[#1a1a1a] text-white"}`}>
                      {bike.badge}
                    </span>
                    <Image src={bike.image} alt={bike.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 1200px) 50vw, 33vw" />
                  </div>
                  <div className="p-5">
                    <div className="text-[10px] font-bold tracking-[0.1em] uppercase text-[#e85d26] mb-1.5">{bike.brand}</div>
                    <h3 className="font-[family-name:var(--font-display)] text-[18px] font-bold text-[#1a1a1a] mb-2 tracking-tight">{bike.year} {bike.name}</h3>
                    <div className="flex gap-2 mb-4 text-[12px] text-[#888]">
                      <span>{bike.cc}</span><span>·</span><span>{bike.type}</span>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-[#f0f0ee]">
                      <div>
                        <div className="font-[family-name:var(--font-display)] text-[22px] font-bold text-[#1a1a1a]">{bike.price}</div>
                        <div className="text-[10px] text-[#aaa] font-medium mt-0.5">Ride Away</div>
                      </div>
                      <div className="w-9 h-9 rounded-full bg-[#f5f5f3] group-hover:bg-[#e85d26] flex items-center justify-center text-[#1a1a1a] group-hover:text-white transition-all">
                        <ArrowRight size={15} />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-10 text-center">
              <p className="text-[14px] text-[#888] mb-4">New stock arriving regularly. Contact us for the latest availability.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-[#e85d26] hover:bg-[#c44d1e] text-white font-semibold text-[14px] rounded-lg transition-all">
                Enquire About Stock <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

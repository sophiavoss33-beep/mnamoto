import Link from "next/link";

const brands = [
  "KTM","Husqvarna","GASGAS","CFMOTO","YCF","Sunday",
  "Thor","Fox Racing","100%","RHK","Motorex","Oregon","Greenworks",
];

export default function BrandsStrip() {
  const doubled = [...brands, ...brands];
  return (
    <section className="bg-[#f4f4f4] py-14 overflow-hidden border-y border-black/[0.06]">
      <div className="text-center mb-8">
        <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-black/35">
          Authorised Dealer &amp; Stockist For
        </p>
      </div>
      <div className="relative">
        <div
          className="flex gap-3 w-max"
          style={{ animation: "brandScroll 30s linear infinite" }}
          aria-hidden="true"
        >
          {doubled.map((b, i) => (
            <div
              key={`${b}-${i}`}
              className="flex-shrink-0 h-10 px-6 bg-white rounded-full border border-black/[0.08] flex items-center font-[family-name:var(--font-display)] font-bold text-[12.5px] text-black/70 whitespace-nowrap hover:border-[#cc1f1f] hover:text-[#cc1f1f] transition-colors cursor-default"
            >
              {b}
            </div>
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#f4f4f4] to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#f4f4f4] to-transparent pointer-events-none" />
      </div>
      <div className="text-center mt-8">
        <Link href="/brands" className="text-[12px] font-semibold text-black/35 hover:text-[#cc1f1f] transition-colors">
          View all brands →
        </Link>
      </div>
    </section>
  );
}

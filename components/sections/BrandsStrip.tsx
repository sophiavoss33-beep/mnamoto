import Link from "next/link";

const brands = [
  "KTM","Husqvarna","GASGAS","CFMOTO","YCF","Sunday",
  "Thor","Fox Racing","100%","RHK","Motorex","Oregon","Greenworks",
];

export default function BrandsStrip() {
  const doubled = [...brands, ...brands];
  return (
    <section className="bg-[#f5f5f3] py-12 overflow-hidden" aria-label="Authorised brands">
      <div className="text-center mb-8">
        <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#888]">Authorised Dealer &amp; Stockist For</p>
      </div>
      <div className="relative">
        <div className="flex gap-4 w-max [animation:brandScroll_28s_linear_infinite] hover:[animation-play-state:paused]" aria-hidden="true">
          {doubled.map((brand, i) => (
            <div
              key={`${brand}-${i}`}
              className="flex-shrink-0 h-11 px-6 bg-white rounded-full border border-[#e2e2e0] flex items-center justify-center font-[family-name:var(--font-display)] font-bold text-[13px] text-[#1a1a1a] whitespace-nowrap hover:border-[#e85d26] hover:text-[#e85d26] transition-colors cursor-default"
            >
              {brand}
            </div>
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#f5f5f3] to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#f5f5f3] to-transparent pointer-events-none" />
      </div>
      <div className="text-center mt-8">
        <Link href="/brands" className="text-[13px] font-semibold text-[#888] hover:text-[#e85d26] transition-colors">
          View all brands →
        </Link>
      </div>
    </section>
  );
}

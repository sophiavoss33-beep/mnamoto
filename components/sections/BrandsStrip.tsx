import Link from "next/link";

const brands = ["KTM","Husqvarna","GASGAS","CFMOTO","YCF","Sunday","Thor","Fox Racing","100%","RHK","Motorex","Oregon","Greenworks"];

export default function BrandsStrip() {
  const doubled = [...brands, ...brands];
  return (
    <section className="py-16 bg-[#111] overflow-hidden border-y border-white/[0.04]">
      <div className="text-center mb-10">
        <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/25">Authorised Dealer &amp; Stockist For</p>
      </div>
      <div className="relative">
        <div className="flex gap-4 w-max" style={{ animation: "brandScroll 32s linear infinite" }} aria-hidden="true">
          {doubled.map((b, i) => (
            <div key={`${b}-${i}`} className="flex-shrink-0 h-10 px-7 bg-white/[0.03] rounded-full border border-white/[0.06] flex items-center font-[family-name:var(--font-display)] text-[14px] text-white/40 whitespace-nowrap hover:text-white hover:border-[#cc1f1f]/40 transition-colors cursor-default tracking-wider">
              {b}
            </div>
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#111] to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#111] to-transparent pointer-events-none" />
      </div>
      <div className="text-center mt-10">
        <Link href="/brands" className="text-[11px] font-semibold text-white/25 hover:text-[#cc1f1f] transition-colors tracking-[0.2em] uppercase">
          View all brands →
        </Link>
      </div>
    </section>
  );
}

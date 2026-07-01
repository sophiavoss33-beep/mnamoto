import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const services = [
  "Logbook Servicing", "Engine Rebuilds",
  "Tyre Supply & Fitting", "Suspension Setup",
  "Electrical Diagnostics", "Accessory Fitting",
];

const brands = ["KTM","Husqvarna","GASGAS","CFMOTO","YCF","Sunday","Thor","Fox Racing","100%","RHK","Motorex","Oregon","Greenworks"];

export default function Workshop() {
  return (
    <>
      {/* Workshop — dark section with real showroom backdrop */}
      <section className="py-14 sm:py-20 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/showroom/rhk-parts-wall.jpg"
            alt="RHK parts wall at MNA Moto Supplies"
            fill className="object-cover opacity-15" sizes="100vw" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/95 via-gray-950/80 to-gray-950/60" />

        <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            <div>
              <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#CC1F1F] mb-3">On-Site Workshop</p>
              <h2 className="font-[family-name:var(--font-display)] text-white leading-none tracking-wide mb-4"
                style={{ fontSize: "clamp(36px, 5.5vw, 68px)" }}>
                EXPERT<br />SERVICING.<br /><span className="text-[#CC1F1F]">NO SHORTCUTS.</span>
              </h2>
              <p className="text-[14px] sm:text-[15px] text-white/50 leading-relaxed mb-7 max-w-[400px]">
                Factory-trained technicians and genuine parts. We service every brand we sell — KTM, Husqvarna, GASGAS, CFMOTO, YCF and more.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                {services.map((s) => (
                  <div key={s} className="flex items-center gap-2.5 text-[12.5px] text-white/55">
                    <CheckCircle2 size={13} className="text-[#CC1F1F] flex-shrink-0" />
                    <span>{s}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/workshop/book"
                  className="flex items-center justify-center gap-2 px-6 py-4 bg-[#CC1F1F] hover:bg-[#A81818] text-white font-bold text-[13px] tracking-wide uppercase rounded-xl transition-all hover:shadow-lg min-h-[52px]">
                  Book a Service <ArrowRight size={14} />
                </Link>
                <Link href="/workshop"
                  className="flex items-center justify-center px-6 py-4 bg-white/8 hover:bg-white/15 text-white font-bold text-[13px] tracking-wide uppercase rounded-xl border border-white/15 transition-all min-h-[52px]">
                  Learn More
                </Link>
              </div>
            </div>

            {/* Desktop: real showroom image */}
            <div className="hidden lg:block relative">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <Image src="/images/showroom/showroom-cfmoto-gasgas.jpg"
                  alt="MNA Moto Supplies showroom floor with CFMOTO and GASGAS"
                  fill className="object-cover" sizes="50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/50 to-transparent" />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-[#CC1F1F] rounded-2xl p-5 shadow-[0_20px_60px_rgba(204,31,31,0.4)]">
                <div className="font-[family-name:var(--font-display)] text-[48px] text-white leading-none tracking-wide">20+</div>
                <div className="text-[10px] text-white/75 font-bold uppercase tracking-widest mt-1">Years Servicing</div>
              </div>
            </div>

            {/* Mobile stat */}
            <div className="lg:hidden">
              <div className="inline-flex items-center gap-4 bg-[#CC1F1F] rounded-xl px-5 py-4">
                <div className="font-[family-name:var(--font-display)] text-[40px] text-white leading-none tracking-wide">20+</div>
                <div className="text-[12px] text-white/80 font-bold uppercase tracking-wider leading-tight">Years<br />Servicing</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Storefront visit section */}
      <section className="relative overflow-hidden" style={{ height: "clamp(260px, 35vw, 400px)" }}>
        <Image src="/images/store/mna-storefront.jpg"
          alt="MNA Moto Supplies storefront on Grey Street, Hamilton Victoria"
          fill className="object-cover object-center" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10 w-full">
            <div className="max-w-[520px]">
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#CC1F1F] mb-3">Hamilton, Victoria</p>
              <h2 className="font-[family-name:var(--font-display)] text-white leading-none tracking-wide mb-4"
                style={{ fontSize: "clamp(30px, 5vw, 60px)" }}>
                VISIT US IN STORE.
              </h2>
              <p className="text-[13px] sm:text-[14px] text-white/55 mb-5">
                Mon–Fri 8:30am–5:00pm &nbsp;·&nbsp; Sat 8:30am–4:00pm
              </p>
              <Link href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-black font-bold text-[12px] tracking-wide uppercase rounded-xl hover:bg-[#CC1F1F] hover:text-white transition-all">
                Get Directions <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Brands strip */}
      <section className="py-8 sm:py-10 border-b border-black/[0.07]"
        style={{ background: "rgba(255,255,255,0.6)", backdropFilter: "blur(8px)" }}>
        <p className="text-center text-[10px] font-bold tracking-[0.22em] uppercase text-gray-500 mb-5 px-4">
          Authorised Dealer &amp; Stockist For
        </p>
        <div className="flex flex-wrap justify-center gap-2 px-4 max-w-[1200px] mx-auto">
          {brands.map((b) => (
            <div key={b}
              className="h-8 sm:h-9 px-4 sm:px-5 bg-white rounded-full border border-gray-200 flex items-center font-[family-name:var(--font-display)] text-[11px] sm:text-[13px] text-gray-600 whitespace-nowrap hover:border-[#CC1F1F] hover:text-[#CC1F1F] transition-colors cursor-default tracking-wider shadow-sm">
              {b}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

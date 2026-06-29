import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const services = ["Logbook Servicing","Engine Rebuilds","Tyre Supply & Fitting","Suspension Setup","Electrical Diagnostics","Accessory Fitting"];

export default function Workshop() {
  return (
    <>
      <section className="py-20 bg-gray-900 overflow-hidden relative">
        <div className="absolute inset-0">
          <Image src="/images/showroom/parts-wall.jpg" alt="MNA Moto workshop" fill className="object-cover opacity-20" sizes="100vw" />
        </div>
        <div className="relative z-10 max-w-[1320px] mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#CC1F1F] mb-4">On-Site Workshop</p>
              <h2 className="font-[family-name:var(--font-display)] text-[clamp(40px,5vw,68px)] text-white leading-none tracking-wide mb-5">
                EXPERT<br />SERVICING.<br /><span className="text-[#CC1F1F]">NO SHORTCUTS.</span>
              </h2>
              <p className="text-[15px] text-white/50 leading-relaxed mb-8 max-w-[380px]">
                Factory-trained technicians and genuine parts. We service every brand we sell.
              </p>
              <div className="grid grid-cols-2 gap-2.5 mb-8">
                {services.map((s) => (
                  <div key={s} className="flex items-center gap-2 text-[12.5px] text-white/55">
                    <CheckCircle2 size={13} className="text-[#CC1F1F] flex-shrink-0" />{s}
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/workshop/book" className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#CC1F1F] hover:bg-[#A81818] text-white font-bold text-[13px] tracking-wide uppercase rounded-xl transition-all hover:shadow-lg">
                  Book a Service <ArrowRight size={14} />
                </Link>
                <Link href="/workshop" className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-[13px] tracking-wide uppercase rounded-xl border border-white/20 transition-all">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <Image src="/images/showroom/showroom-floor.jpg" alt="MNA Moto showroom" fill className="object-cover opacity-80" sizes="50vw" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-[#CC1F1F] rounded-2xl p-5 shadow-[0_20px_60px_rgba(204,31,31,0.4)]">
                <div className="font-[family-name:var(--font-display)] text-[48px] text-white leading-none tracking-wide">20+</div>
                <div className="text-[10px] text-white/75 font-bold uppercase tracking-widest mt-1">Years Servicing</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-10 border-b border-black/[0.07]" style={{ background: "rgba(255,255,255,0.55)", backdropFilter: "blur(8px)" }}>
        <p className="text-center text-[10px] font-bold tracking-[0.25em] uppercase text-gray-500 mb-7">Authorised Dealer &amp; Stockist For</p>
        <div className="flex flex-wrap justify-center gap-2.5 max-w-[1200px] mx-auto px-5">
          {["KTM","Husqvarna","GASGAS","CFMOTO","YCF","Sunday","Thor","Fox Racing","100%","RHK","Motorex","Oregon","Greenworks"].map((b) => (
            <div key={b} className="h-9 px-5 bg-white rounded-full border border-gray-200 flex items-center font-[family-name:var(--font-display)] text-[13px] text-gray-600 whitespace-nowrap hover:border-[#CC1F1F] hover:text-[#CC1F1F] transition-colors cursor-default tracking-wider shadow-sm">
              {b}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const services = [
  "Logbook Servicing","Engine Rebuilds","Tyre Supply & Fitting",
  "Suspension Setup","Electrical Diagnostics","Accessory Fitting",
];

export default function Workshop() {
  return (
    <>
      {/* Workshop Section */}
      <section className="py-24 bg-gray-900 overflow-hidden relative">
        <div className="absolute inset-0">
          <Image src="/images/showroom/parts-wall.jpg" alt="MNA Moto workshop" fill className="object-cover opacity-20" sizes="100vw" />
        </div>
        <div className="relative z-10 max-w-[1320px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#CC1F1F] mb-4">On-Site Workshop</p>
              <h2 className="font-[family-name:var(--font-display)] text-[clamp(44px,6vw,80px)] text-white leading-none tracking-wide mb-6">
                EXPERT<br />SERVICING.<br /><span className="text-[#CC1F1F]">NO SHORTCUTS.</span>
              </h2>
              <p className="text-[16px] text-white/55 leading-relaxed mb-10 max-w-[400px]">
                Factory-trained technicians and genuine parts. We service every brand we sell and we do it right the first time.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-10">
                {services.map((s) => (
                  <div key={s} className="flex items-center gap-2.5 text-[13px] text-white/65 font-medium">
                    <CheckCircle2 size={15} className="text-[#CC1F1F] flex-shrink-0" />
                    {s}
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/workshop/book"
                  className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#CC1F1F] hover:bg-[#A81818] text-white font-bold text-[13px] tracking-wide uppercase rounded-xl transition-all hover:shadow-[0_8px_30px_rgba(204,31,31,0.4)] hover:-translate-y-0.5">
                  Book a Service <ArrowRight size={15} />
                </Link>
                <Link href="/workshop"
                  className="inline-flex items-center gap-2.5 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold text-[13px] tracking-wide uppercase rounded-xl border border-white/20 hover:border-white/40 transition-all">
                  Learn More
                </Link>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <Image src="/images/showroom/showroom-floor.jpg" alt="MNA Moto showroom" fill className="object-cover opacity-80" sizes="50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-[#CC1F1F] rounded-2xl p-6 shadow-[0_20px_60px_rgba(204,31,31,0.4)]">
                <div className="font-[family-name:var(--font-display)] text-[52px] text-white leading-none tracking-wide">20+</div>
                <div className="text-[11px] text-white/75 font-semibold uppercase tracking-widest mt-1">Years Servicing</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands strip */}
      <section className="bg-white py-12 border-b border-gray-100 overflow-hidden">
        <p className="text-center text-[10px] font-bold tracking-[0.25em] uppercase text-gray-400 mb-8">Authorised Dealer &amp; Stockist For</p>
        <div className="relative">
          <div className="flex gap-4 w-max" style={{ animation: "scroll 28s linear infinite" }}>
            {[...["KTM","Husqvarna","GASGAS","CFMOTO","YCF","Sunday","Thor","Fox Racing","100%","RHK","Motorex","Oregon","Greenworks"],
              ...["KTM","Husqvarna","GASGAS","CFMOTO","YCF","Sunday","Thor","Fox Racing","100%","RHK","Motorex","Oregon","Greenworks"]
            ].map((b, i) => (
              <div key={i} className="flex-shrink-0 h-10 px-7 bg-gray-50 rounded-full border border-gray-200 flex items-center font-[family-name:var(--font-display)] text-[14px] text-gray-600 whitespace-nowrap hover:border-[#CC1F1F] hover:text-[#CC1F1F] transition-colors cursor-default tracking-wider">
                {b}
              </div>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none" />
        </div>
        <style>{`@keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
      </section>
    </>
  );
}

import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/[0.05]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-20 pb-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <Image src="/images/mnalogo.jpg" alt="MNA Moto Supplies" width={140} height={52} className="h-11 w-auto mb-6 opacity-80" />
            <p className="text-[13px] text-white/30 leading-relaxed mb-7 max-w-[260px]">
              Victoria&apos;s trusted motorcycle and power equipment dealer. Authorised for KTM, Husqvarna, GASGAS, CFMOTO, YCF and Sunday.
            </p>
            <div className="flex gap-2.5">
              {[
                { label: "Facebook", href: "https://facebook.com", svg: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg> },
                { label: "Instagram", href: "https://instagram.com", svg: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg> },
              ].map(({ label, href, svg }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.07] flex items-center justify-center text-white/30 hover:bg-[#cc1f1f] hover:text-white hover:border-transparent transition-all">
                  {svg}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-[9px] font-bold tracking-[0.2em] uppercase text-white/30 mb-5">Motorcycles</div>
            <ul className="space-y-3">
              {[["New Motorcycles","/motorcycles/new"],["Used Motorcycles","/motorcycles/used"],["ATVs & UTVs","/motorcycles/atv"],["Youth Bikes","/motorcycles/youth"],["Our Brands","/brands"]].map(([l,h])=>(
                <li key={h}><Link href={h} className="text-[13px] text-white/25 hover:text-white/70 transition-colors">{l}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[9px] font-bold tracking-[0.2em] uppercase text-white/30 mb-5">Services</div>
            <ul className="space-y-3">
              {[["Workshop","/workshop"],["Book a Service","/workshop/book"],["Parts & Gear","/parts"],["Finance","/finance"],["Power Equipment","/outdoor-power"]].map(([l,h])=>(
                <li key={h}><Link href={h} className="text-[13px] text-white/25 hover:text-white/70 transition-colors">{l}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[9px] font-bold tracking-[0.2em] uppercase text-white/30 mb-5">Contact</div>
            <ul className="space-y-4">
              {[
                { Icon: MapPin, text: "Hamilton, Victoria, Australia" },
                { Icon: Phone, text: "07 XXXX XXXX", href: "tel:07XXXXXXXX" },
                { Icon: Mail, text: "info@mnamoto.com.au", href: "mailto:info@mnamoto.com.au" },
                { Icon: Clock, text: "Mon–Fri 8:30–5:00\nSat 8:30–4:00" },
              ].map(({ Icon, text, href }) => (
                <li key={text} className="flex items-start gap-3">
                  <Icon size={12} className="text-[#cc1f1f] mt-0.5 flex-shrink-0" />
                  {href ? <a href={href} className="text-[13px] text-white/25 hover:text-white/60 transition-colors">{text}</a>
                    : <span className="text-[13px] text-white/25 whitespace-pre-line">{text}</span>}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/[0.04]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-[11px] text-white/15">© {new Date().getFullYear()} MNA Moto Supplies. All rights reserved.</span>
          <div className="flex gap-5">
            {[["Privacy","/privacy"],["Terms","/terms"],["Warranty","/warranty"]].map(([l,h])=>(
              <Link key={h} href={h} className="text-[11px] text-white/15 hover:text-white/45 transition-colors">{l}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

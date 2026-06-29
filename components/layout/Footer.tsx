import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          <div className="lg:col-span-2">
            <Image src="/images/mnalogo.jpg" alt="MNA Moto Supplies" width={140} height={52} className="h-11 w-auto mb-5 opacity-90 brightness-[2]" />
            <p className="text-[13px] text-gray-400 leading-relaxed mb-6 max-w-[260px]">Victoria&apos;s trusted motorcycle and outdoor power equipment dealer. Authorised for KTM, Husqvarna, GASGAS, CFMOTO, YCF and Sunday.</p>
            <ul className="space-y-3">
              {[
                { Icon: MapPin, text: "Hamilton, Victoria, Australia" },
                { Icon: Phone, text: "07 XXXX XXXX", href: "tel:07XXXXXXXX" },
                { Icon: Mail, text: "info@mnamoto.com.au", href: "mailto:info@mnamoto.com.au" },
                { Icon: Clock, text: "Mon–Fri 8:30–5:00 · Sat 8:30–4:00" },
              ].map(({ Icon, text, href }) => (
                <li key={text} className="flex items-start gap-3">
                  <Icon size={13} className="text-[#CC1F1F] mt-0.5 flex-shrink-0" />
                  {href ? <a href={href} className="text-[12.5px] text-gray-400 hover:text-white transition-colors">{text}</a>
                    : <span className="text-[12.5px] text-gray-400">{text}</span>}
                </li>
              ))}
            </ul>
          </div>

          {[
            { title: "Shop", links: [["New Bikes","/motorcycles/new"],["Used Bikes","/motorcycles/used"],["ATVs & UTVs","/motorcycles/atv"],["Parts & Gear","/parts"],["Power Equipment","/outdoor-power"],["Our Brands","/brands"]] },
            { title: "Services", links: [["Workshop","/workshop"],["Book a Service","/workshop/book"],["Finance","/finance"],["Promotions","/promotions"],["About Us","/about"],["FAQ","/faq"]] },
            { title: "Legal", links: [["Contact","/contact"],["Privacy Policy","/privacy"],["Terms","/terms"],["Warranty","/warranty"],["Delivery","/delivery"]] },
          ].map(({ title, links }) => (
            <div key={title}>
              <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-500 mb-5">{title}</div>
              <ul className="space-y-3">
                {links.map(([l, h]) => (
                  <li key={h}><Link href={h} className="text-[13px] text-gray-400 hover:text-white transition-colors">{l}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-gray-800">
          <span className="text-[11px] text-gray-600">© {new Date().getFullYear()} MNA Moto Supplies. All rights reserved.</span>
          <div className="flex gap-5">
            {[["Privacy","/privacy"],["Terms","/terms"],["Warranty","/warranty"]].map(([l,h])=>(
              <Link key={h} href={h} className="text-[11px] text-gray-600 hover:text-gray-300 transition-colors">{l}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

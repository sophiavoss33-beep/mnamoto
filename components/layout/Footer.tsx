import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-[1320px] mx-auto px-5 lg:px-10 pt-14 pb-8">
        <div className="flex flex-col lg:flex-row gap-10 mb-12">
          <div className="flex-shrink-0 max-w-[260px]">
            <div className="bg-white rounded-xl p-3 inline-block mb-4">
              <Image src="/images/mnalogo.jpg" alt="MNA Moto Supplies" width={130} height={48} className="h-9 w-auto object-contain" />
            </div>
            <p className="text-[13px] text-gray-400 leading-relaxed mb-4">Victoria&apos;s trusted motorcycle and power equipment dealer.</p>
            <div className="space-y-2 text-[12.5px] text-gray-400">
              <p>📍 Hamilton, Victoria</p>
              <a href="tel:07XXXXXXXX" className="block hover:text-white transition-colors">📞 07 XXXX XXXX</a>
              <a href="mailto:info@mnamoto.com.au" className="block hover:text-white transition-colors">✉️ info@mnamoto.com.au</a>
              <p>🕐 Mon–Fri 8:30–5:00 · Sat 8:30–4:00</p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 flex-1">
            <div>
              <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-500 mb-4">Shop</div>
              <ul className="space-y-2.5">
                {[["New Bikes","/motorcycles/new"],["Used Bikes","/motorcycles/used"],["ATVs & UTVs","/motorcycles/atv"],["Parts & Gear","/parts"],["Power Equipment","/outdoor-power"]].map(([l,h])=>(
                  <li key={h}><Link href={h} className="text-[13px] text-gray-400 hover:text-white transition-colors">{l}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-500 mb-4">Services</div>
              <ul className="space-y-2.5">
                {[["Workshop","/workshop"],["Book a Service","/workshop/book"],["Finance","/finance"],["About","/about"],["Contact","/contact"]].map(([l,h])=>(
                  <li key={h}><Link href={h} className="text-[13px] text-gray-400 hover:text-white transition-colors">{l}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-500 mb-4">Brands</div>
              <ul className="space-y-2.5">
                {[["KTM","/brands"],["Husqvarna","/brands"],["GASGAS","/brands"],["CFMOTO","/brands"],["YCF & Sunday","/brands"]].map(([l,h])=>(
                  <li key={h}><Link href={h} className="text-[13px] text-gray-400 hover:text-white transition-colors">{l}</Link></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-gray-800">
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

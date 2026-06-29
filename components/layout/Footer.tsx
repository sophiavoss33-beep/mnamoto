import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/[0.06]">
      <div className="max-w-[1400px] mx-auto px-8 py-14">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 mb-12">
          <div>
            <Image src="/images/mnalogo.jpg" alt="MNA Moto Supplies" width={130} height={48} className="h-9 w-auto mb-4 opacity-80" />
            <p className="text-[12px] text-white/25 max-w-[220px] leading-relaxed">Victoria&apos;s trusted motorcycle and power equipment dealer.</p>
          </div>
          <div className="flex flex-wrap gap-14">
            <div>
              <div className="text-[9px] font-bold tracking-[0.25em] uppercase text-white/25 mb-4">Quick Links</div>
              <ul className="space-y-2.5">
                {[["New Bikes","/motorcycles/new"],["Used Bikes","/motorcycles/used"],["ATVs & UTVs","/motorcycles/atv"],["Parts & Gear","/parts"],["Power Equipment","/outdoor-power"]].map(([l,h])=>(
                  <li key={h}><Link href={h} className="text-[12px] text-white/30 hover:text-white transition-colors">{l}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-[9px] font-bold tracking-[0.25em] uppercase text-white/25 mb-4">Services</div>
              <ul className="space-y-2.5">
                {[["Workshop","/workshop"],["Book a Service","/workshop/book"],["Finance","/finance"],["About","/about"],["Contact","/contact"]].map(([l,h])=>(
                  <li key={h}><Link href={h} className="text-[12px] text-white/30 hover:text-white transition-colors">{l}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-[9px] font-bold tracking-[0.25em] uppercase text-white/25 mb-4">Contact</div>
              <ul className="space-y-2.5">
                <li className="text-[12px] text-white/30">Hamilton, Victoria</li>
                <li><a href="tel:07XXXXXXXX" className="text-[12px] text-white/30 hover:text-white transition-colors">07 XXXX XXXX</a></li>
                <li><a href="mailto:info@mnamoto.com.au" className="text-[12px] text-white/30 hover:text-white transition-colors">info@mnamoto.com.au</a></li>
                <li className="text-[12px] text-white/30">Mon–Fri 8:30–5:00</li>
                <li className="text-[12px] text-white/30">Sat 8:30–4:00</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-8 border-t border-white/[0.06]">
          <span className="text-[10px] text-white/15">© {new Date().getFullYear()} MNA Moto Supplies. All rights reserved.</span>
          <div className="flex gap-6">
            {[["Privacy","/privacy"],["Terms","/terms"],["Warranty","/warranty"]].map(([l,h])=>(
              <Link key={h} href={h} className="text-[10px] text-white/15 hover:text-white/40 transition-colors">{l}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

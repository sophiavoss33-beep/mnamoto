import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const footerLinks = {
  motorcycles: [
    { label: "New Motorcycles", href: "/motorcycles/new" },
    { label: "Used Motorcycles", href: "/motorcycles/used" },
    { label: "Dirt & Enduro", href: "/motorcycles/dirt" },
    { label: "Youth Bikes", href: "/motorcycles/youth" },
    { label: "ATVs & UTVs", href: "/motorcycles/atv" },
    { label: "Our Brands", href: "/brands" },
  ],
  services: [
    { label: "Workshop Overview", href: "/workshop" },
    { label: "Logbook Servicing", href: "/workshop/servicing" },
    { label: "Repairs", href: "/workshop/repairs" },
    { label: "Tyres & Suspension", href: "/workshop/tyres" },
    { label: "Book Online", href: "/workshop/book" },
    { label: "Parts & Accessories", href: "/parts" },
  ],
  info: [
    { label: "About MNA Moto", href: "/about" },
    { label: "Finance Options", href: "/finance" },
    { label: "Power Equipment", href: "/outdoor-power" },
    { label: "Promotions", href: "/promotions" },
    { label: "Contact Us", href: "/contact" },
    { label: "FAQ", href: "/faq" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white/50 text-sm">
      {/* Main footer */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 pt-20 pb-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-5" aria-label="MNA Moto Home">
              <div className="w-10 h-10 bg-[#e85d26] rounded-[8px] flex items-center justify-center font-[family-name:var(--font-display)] font-bold text-[13px] text-white">
                MNA
              </div>
              <span className="font-[family-name:var(--font-display)] font-bold text-[18px] text-white tracking-tight">
                MNA Moto
              </span>
            </Link>

            <p className="text-white/40 text-[13px] leading-relaxed mb-6 max-w-[280px]">
              Victoria&apos;s trusted motorcycle and outdoor power equipment dealer. New and used bikes, expert workshop, and everything the serious rider needs.
            </p>

            {/* Contact */}
            <ul className="space-y-3 mb-7">
              {[
                { icon: MapPin, text: "Main Street, Victoria, Australia" },
                { icon: Phone, text: "07 XXXX XXXX", href: "tel:07XXXXXXXX" },
                { icon: Mail, text: "info@mnamoto.com.au", href: "mailto:info@mnamoto.com.au" },
                { icon: Clock, text: "Mon–Fri 8:30–5:00 · Sat 8:30–4:00" },
              ].map(({ icon: Icon, text, href }) => (
                <li key={text} className="flex items-start gap-3 text-[13px] text-white/40">
                  <Icon size={14} className="mt-0.5 text-[#e85d26] flex-shrink-0" />
                  {href ? (
                    <a href={href} className="hover:text-white transition-colors">{text}</a>
                  ) : (
                    <span>{text}</span>
                  )}
                </li>
              ))}
            </ul>

            {/* Socials */}
            <div className="flex gap-2.5">
              {[
                { label: "Facebook", href: "https://facebook.com", svg: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg> },
                { label: "Instagram", href: "https://instagram.com", svg: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg> },
                { label: "YouTube", href: "https://youtube.com", svg: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/></svg> },
              ].map(({ label, href, svg }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`MNA Moto on ${label}`}
                  className="w-9 h-9 rounded-lg bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-white/40 hover:bg-[#e85d26] hover:text-white hover:border-transparent transition-all"
                >
                  {svg}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div>
            <div className="text-[11px] font-bold tracking-[0.1em] uppercase text-white/60 mb-5">Motorcycles</div>
            <ul className="space-y-3">
              {footerLinks.motorcycles.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[13px] text-white/35 hover:text-white/80 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[11px] font-bold tracking-[0.1em] uppercase text-white/60 mb-5">Workshop</div>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[13px] text-white/35 hover:text-white/80 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[11px] font-bold tracking-[0.1em] uppercase text-white/60 mb-5">Information</div>
            <ul className="space-y-3">
              {footerLinks.info.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[13px] text-white/35 hover:text-white/80 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.06]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-[12px] text-white/25">
            © {new Date().getFullYear()} MNA Moto. All rights reserved. ABN XX XXX XXX XXX
          </span>
          <div className="flex flex-wrap gap-5">
            {[
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Terms & Conditions", href: "/terms" },
              { label: "Warranty", href: "/warranty" },
              { label: "Delivery", href: "/delivery" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="text-[12px] text-white/25 hover:text-white/60 transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

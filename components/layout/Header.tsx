"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Search, X, Menu, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const motorcycleMenu = [
  { label: "New Motorcycles", href: "/motorcycles/new", desc: "Latest models from authorised brands" },
  { label: "Used Motorcycles", href: "/motorcycles/used", desc: "Quality pre-owned bikes at great value" },
  { label: "Dirt & Enduro", href: "/motorcycles/dirt", desc: "MX, enduro and trail bikes" },
  { label: "Youth Bikes", href: "/motorcycles/youth", desc: "YCF, Sunday and starter models" },
  { label: "ATVs & UTVs", href: "/motorcycles/atv", desc: "CFMOTO quads and side-by-sides" },
  { label: "Road & Adventure", href: "/motorcycles/road", desc: "Street and adventure riding" },
];

const workshopMenu = [
  { label: "Servicing", href: "/workshop/servicing", desc: "Logbook, general and major servicing" },
  { label: "Repairs", href: "/workshop/repairs", desc: "Engine, electrical and mechanical repairs" },
  { label: "Tyres & Suspension", href: "/workshop/tyres", desc: "Supply, fitting and setup" },
  { label: "Accessory Fitting", href: "/workshop/accessories", desc: "Professional installation" },
];

const navLinks = [
  { label: "Motorcycles", href: "/motorcycles", mega: motorcycleMenu },
  { label: "Power Equipment", href: "/outdoor-power" },
  { label: "Workshop", href: "/workshop", mega: workshopMenu },
  { label: "Parts & Gear", href: "/parts" },
  { label: "Finance", href: "/finance" },
  { label: "Brands", href: "/brands" },
  { label: "Promotions", href: "/promotions" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  return (
    <>
      {/* Top bar */}
      <div className="bg-[#e85d26] text-white text-xs font-medium py-1.5 text-center tracking-wide z-50 relative">
        <a href="tel:0XXXXXXXXXX" className="hover:underline">📞 Call us today</a>
        <span className="mx-3 opacity-50">|</span>
        Mon–Fri 8:30am–5:00pm · Sat 8:30am–4:00pm
        <span className="mx-3 opacity-50">|</span>
        <Link href="/contact" className="hover:underline">Find Us</Link>
      </div>

      {/* Main nav */}
      <header
        className={cn(
          "fixed top-7 left-0 right-0 z-40 transition-all duration-300",
          scrolled
            ? "bg-[rgba(10,10,10,0.96)] backdrop-blur-xl border-b border-white/[0.07] shadow-2xl"
            : "bg-transparent"
        )}
      >
        <nav className="max-w-[1400px] mx-auto px-6 lg:px-8 h-[72px] flex items-center gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0 group" aria-label="MNA Moto Home">
            <div className="w-10 h-10 bg-[#e85d26] rounded-[8px] flex items-center justify-center font-[family-name:var(--font-display)] font-bold text-[13px] text-white tracking-tight group-hover:bg-[#c44d1e] transition-colors">
              MNA
            </div>
            <span className="font-[family-name:var(--font-display)] font-bold text-[18px] text-white tracking-[-0.03em]">
              MNA Moto
            </span>
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden lg:flex items-center gap-1 flex-1" role="list">
            {navLinks.map((link) => (
              <li
                key={link.label}
                className="relative"
                onMouseEnter={() => link.mega && setActiveMega(link.label)}
                onMouseLeave={() => setActiveMega(null)}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "flex items-center gap-1 px-3.5 py-2 text-[13.5px] font-medium text-white/75 rounded-md transition-all hover:text-white hover:bg-white/[0.08]",
                    activeMega === link.label && "text-white bg-white/[0.08]"
                  )}
                >
                  {link.label}
                  {link.mega && (
                    <ChevronDown
                      size={12}
                      className={cn("opacity-50 transition-transform duration-200", activeMega === link.label && "rotate-180")}
                    />
                  )}
                </Link>

                {/* Mega menu */}
                {link.mega && (
                  <div
                    className={cn(
                      "absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-[#1a1a1a] border border-white/10 rounded-xl p-5 min-w-[480px] shadow-[0_24px_48px_rgba(0,0,0,0.6)] transition-all duration-200 pointer-events-none",
                      activeMega === link.label ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2"
                    )}
                    role="menu"
                  >
                    <div className="grid grid-cols-2 gap-1">
                      {link.mega.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/[0.06] transition-colors group/item"
                          role="menuitem"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-[#e85d26] mt-1.5 flex-shrink-0" />
                          <div>
                            <div className="text-[13px] font-semibold text-white mb-0.5 group-hover/item:text-[#e85d26] transition-colors">
                              {item.label}
                            </div>
                            <div className="text-[11.5px] text-white/40 leading-snug">{item.desc}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-2 ml-auto">
            <Link
              href="/search"
              className="w-9 h-9 flex items-center justify-center rounded-md text-white/60 hover:text-white hover:bg-white/[0.08] transition-all"
              aria-label="Search"
            >
              <Search size={16} />
            </Link>
            <a
              href="tel:0XXXXXXXXXX"
              className="flex items-center gap-2 px-3.5 py-2 text-[13px] font-semibold text-white/70 hover:text-white border border-white/[0.15] hover:border-white/30 rounded-md transition-all hover:bg-white/[0.06]"
            >
              <Phone size={14} />
              Call Us
            </a>
            <Link
              href="/workshop/book"
              className="px-4 py-2 text-[13.5px] font-semibold text-white bg-[#e85d26] hover:bg-[#c44d1e] rounded-md transition-all hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(232,93,38,0.4)]"
            >
              Book Service
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden ml-auto p-2 text-white"
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={mobileOpen}
          >
            <Menu size={24} />
          </button>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <div
        className={cn(
          "fixed inset-0 z-[200] bg-[#0a0a0a] flex flex-col transition-transform duration-300",
          mobileOpen ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-label="Mobile navigation"
        aria-modal="true"
      >
        <div className="flex items-center justify-between p-6 border-b border-white/[0.07]">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 bg-[#e85d26] rounded-[8px] flex items-center justify-center font-[family-name:var(--font-display)] font-bold text-[13px] text-white">MNA</div>
            <span className="font-[family-name:var(--font-display)] font-bold text-[18px] text-white">MNA Moto</span>
          </div>
          <button
            onClick={() => setMobileOpen(false)}
            className="p-2 text-white/50 hover:text-white transition-colors"
            aria-label="Close navigation menu"
          >
            <X size={24} />
          </button>
        </div>

        <ul className="flex-1 overflow-y-auto p-6 space-y-1" role="list">
          {[
            { label: "New Motorcycles", href: "/motorcycles/new" },
            { label: "Used Motorcycles", href: "/motorcycles/used" },
            { label: "ATVs & UTVs", href: "/motorcycles/atv" },
            { label: "Youth Bikes", href: "/motorcycles/youth" },
            { label: "Power Equipment", href: "/outdoor-power" },
            { label: "Workshop", href: "/workshop" },
            { label: "Parts & Gear", href: "/parts" },
            { label: "Finance", href: "/finance" },
            { label: "Brands", href: "/brands" },
            { label: "Promotions", href: "/promotions" },
            { label: "About Us", href: "/about" },
            { label: "Contact", href: "/contact" },
          ].map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block py-4 text-2xl font-bold font-[family-name:var(--font-display)] text-white/60 hover:text-white border-b border-white/[0.06] transition-colors tracking-tight"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="p-6 space-y-3 border-t border-white/[0.07]">
          <Link
            href="/workshop/book"
            onClick={() => setMobileOpen(false)}
            className="flex items-center justify-center w-full py-4 text-[15px] font-bold text-white bg-[#e85d26] hover:bg-[#c44d1e] rounded-lg transition-colors"
          >
            Book a Service
          </Link>
          <a
            href="tel:0XXXXXXXXXX"
            className="flex items-center justify-center gap-2 w-full py-4 text-[15px] font-semibold text-white/70 border border-white/[0.15] rounded-lg hover:text-white hover:border-white/30 transition-all"
          >
            <Phone size={16} />
            Call Us
          </a>
        </div>
      </div>
    </>
  );
}

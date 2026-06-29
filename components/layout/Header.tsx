"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Search } from "lucide-react";

const navLinks = [
  { label: "New Bikes", href: "/motorcycles/new" },
  { label: "Used Bikes", href: "/motorcycles/used" },
  { label: "ATVs & UTVs", href: "/motorcycles/atv" },
  { label: "Workshop", href: "/workshop" },
  { label: "Parts & Gear", href: "/parts" },
  { label: "Finance", href: "/finance" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-black" : "bg-transparent"}`}>
        <div className="max-w-[1400px] mx-auto px-5 h-16 flex items-center justify-between">
          <button className="lg:hidden text-white p-1" onClick={() => setMobileOpen(true)} aria-label="Open menu">
            <Menu size={22} />
          </button>

          <Link href="/" aria-label="MNA Moto Home" className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0">
            <Image src="/images/mnalogo.jpg" alt="MNA Moto Supplies" width={130} height={48} className="h-9 w-auto object-contain" priority />
          </Link>

          <nav className="hidden lg:flex items-center gap-6 flex-1 justify-center" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-[12px] font-semibold text-white/70 hover:text-white transition-colors tracking-wider uppercase">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button className="text-white/60 hover:text-white transition-colors p-1" aria-label="Search">
              <Search size={18} />
            </button>
            <Link href="/workshop/book" className="hidden sm:block px-4 py-2 bg-[#cc1f1f] text-white text-[11px] font-bold tracking-[0.15em] uppercase rounded">
              Book Service
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div className={`fixed inset-0 z-[100] bg-black flex flex-col transition-transform duration-300 ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex items-center justify-between p-5 border-b border-white/[0.08]">
          <Image src="/images/mnalogo.jpg" alt="MNA Moto" width={120} height={44} className="h-8 w-auto" />
          <button onClick={() => setMobileOpen(false)} className="text-white p-1" aria-label="Close menu">
            <X size={22} />
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}
              className="block px-6 py-5 text-[15px] font-semibold text-white/60 hover:text-white border-b border-white/[0.06] uppercase tracking-wider transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="p-5">
          <Link href="/workshop/book" onClick={() => setMobileOpen(false)} className="flex justify-center w-full py-4 bg-[#cc1f1f] text-white font-bold text-[13px] tracking-[0.2em] uppercase rounded">
            Book a Service
          </Link>
        </div>
      </div>
    </>
  );
}

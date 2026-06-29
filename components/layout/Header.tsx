"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { label: "Motorcycles", href: "/motorcycles" },
  { label: "ATVs & UTVs", href: "/motorcycles/atv" },
  { label: "Power Equipment", href: "/outdoor-power" },
  { label: "Parts & Gear", href: "/parts" },
  { label: "Workshop", href: "/workshop" },
  { label: "Finance", href: "/finance" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* Top bar */}
      <div className="bg-[#CC1F1F] text-white text-[11px] font-semibold py-2 text-center tracking-wide px-4 leading-relaxed">
        <span className="hidden sm:inline">📞 <a href="tel:07XXXXXXXX" className="hover:underline">07 XXXX XXXX</a> · </span>
        Mon–Fri 8:30am–5:00pm · Sat 8:30am–4:00pm
        <span className="hidden sm:inline"> · Hamilton, Victoria</span>
      </div>

      {/* Main nav */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-3">

          {/* Logo — constrained so it never overflows */}
          <Link href="/" className="flex-shrink-0 max-w-[140px] sm:max-w-[160px]" aria-label="MNA Moto Home">
            <Image
              src="/images/mnalogo.jpg"
              alt="MNA Moto Supplies"
              width={150}
              height={56}
              className="h-9 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5 flex-1 justify-center" aria-label="Main navigation">
            {links.map((l) => (
              <Link key={l.href} href={l.href}
                className="px-3 py-2 text-[12px] font-semibold text-gray-600 hover:text-[#CC1F1F] rounded-lg hover:bg-red-50 transition-all whitespace-nowrap">
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <a href="tel:07XXXXXXXX" className="flex items-center gap-1.5 text-[12px] font-semibold text-gray-500 hover:text-[#CC1F1F] transition-colors">
              <Phone size={13} /> Call Us
            </a>
            <Link href="/workshop/book"
              className="px-4 py-2.5 bg-[#CC1F1F] hover:bg-[#A81818] text-white text-[12px] font-bold tracking-wide uppercase rounded-lg transition-all whitespace-nowrap">
              Book Service
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            className="lg:hidden p-2 text-gray-700 touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[200] bg-white flex flex-col transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
        role="dialog"
        aria-label="Mobile navigation"
        aria-modal="true"
      >
        <div className="flex items-center justify-between px-4 h-16 border-b border-gray-100 flex-shrink-0">
          <Image src="/images/mnalogo.jpg" alt="MNA Moto" width={130} height={48} className="h-9 w-auto object-contain" />
          <button
            onClick={() => setOpen(false)}
            className="p-2 text-gray-600 min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-2">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="flex items-center px-5 py-4 text-[15px] font-semibold text-gray-700 hover:text-[#CC1F1F] hover:bg-red-50 border-b border-gray-50 transition-all min-h-[56px]">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-100 space-y-3 flex-shrink-0">
          <Link href="/workshop/book" onClick={() => setOpen(false)}
            className="flex justify-center items-center w-full py-4 bg-[#CC1F1F] text-white font-bold text-[14px] uppercase tracking-wide rounded-xl hover:bg-[#A81818] transition-colors min-h-[52px]">
            Book a Service
          </Link>
          <a href="tel:07XXXXXXXX"
            className="flex justify-center items-center gap-2 w-full py-3.5 border-2 border-gray-200 text-gray-700 font-semibold text-[14px] rounded-xl hover:border-[#CC1F1F] hover:text-[#CC1F1F] transition-all min-h-[52px]">
            <Phone size={16} /> 07 XXXX XXXX
          </a>
        </div>
      </div>
    </>
  );
}

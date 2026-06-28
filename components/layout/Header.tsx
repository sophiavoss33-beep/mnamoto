"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Motorcycles", href: "/motorcycles" },
  { label: "ATVs & UTVs", href: "/motorcycles/atv" },
  { label: "Youth Bikes", href: "/motorcycles/youth" },
  { label: "Power Equipment", href: "/outdoor-power" },
  { label: "Parts & Gear", href: "/parts" },
  { label: "Workshop", href: "/workshop" },
  { label: "Finance", href: "/finance" },
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
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/95 backdrop-blur-md shadow-[0_1px_0_rgba(255,255,255,0.06)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" aria-label="MNA Moto Supplies Home">
            <Image
              src="/images/mnalogo.jpg"
              alt="MNA Moto Supplies"
              width={160}
              height={60}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-[13.5px] font-medium text-white/70 hover:text-white rounded-md hover:bg-white/[0.07] transition-all"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:0XXXXXXXXXX"
              className="flex items-center gap-2 text-[13px] font-semibold text-white/60 hover:text-white transition-colors"
            >
              <Phone size={14} />
              Call Us
            </a>
            <Link
              href="/workshop/book"
              className="px-5 py-2.5 bg-[#cc1f1f] hover:bg-[#a81818] text-white text-[13.5px] font-bold rounded-lg transition-all hover:shadow-[0_6px_20px_rgba(204,31,31,0.4)]"
            >
              Book Service
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[100] bg-black flex flex-col transition-transform duration-300 ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-white/[0.08]">
          <Image src="/images/mnalogo.jpg" alt="MNA Moto Supplies" width={140} height={52} className="h-10 w-auto" />
          <button onClick={() => setMobileOpen(false)} className="text-white/60 hover:text-white p-2" aria-label="Close menu">
            <X size={24} />
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto p-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-5 text-[22px] font-bold text-white/60 hover:text-white border-b border-white/[0.06] font-[family-name:var(--font-display)] tracking-tight transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="p-6 space-y-3">
          <Link href="/workshop/book" onClick={() => setMobileOpen(false)} className="flex justify-center w-full py-4 bg-[#cc1f1f] text-white font-bold text-[15px] rounded-xl">
            Book a Service
          </Link>
        </div>
      </div>
    </>
  );
}

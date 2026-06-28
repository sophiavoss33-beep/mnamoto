"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function NewsletterCTA() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <>
      {/* Storefront CTA */}
      <section className="relative h-[360px] overflow-hidden">
        <Image
          src="/images/store/storefront.jpg"
          alt="MNA Moto Supplies storefront"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-[1320px] mx-auto px-6 lg:px-10 w-full">
            <div className="max-w-[560px]">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-6 h-[2px] bg-[#cc1f1f]" />
                <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-white/50">Victoria</span>
              </div>
              <h2 className="font-[family-name:var(--font-display)] text-[clamp(28px,4vw,48px)] font-bold text-white tracking-[-0.03em] leading-tight mb-6">
                Come and See Us<br />In Store.
              </h2>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-7 py-4 bg-[#cc1f1f] hover:bg-[#a81818] text-white font-bold text-[15px] rounded-lg transition-all hover:shadow-[0_8px_28px_rgba(204,31,31,0.45)]"
              >
                Get Directions
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why MNA */}
      <section className="bg-[#f4f4f4] py-20">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="w-6 h-[2px] bg-[#cc1f1f]" />
              <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-black/40">Why MNA Moto</span>
              <span className="w-6 h-[2px] bg-[#cc1f1f]" />
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(26px,3.5vw,40px)] font-bold tracking-[-0.03em] text-black">
              Victoria&apos;s Riders Choose Us
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🏆", title: "Authorised Dealer", desc: "Factory-authorised for KTM, Husqvarna, GASGAS, CFMOTO, YCF and Sunday with full manufacturer warranty." },
              { icon: "🔧", title: "Expert Workshop", desc: "Trained technicians who specialise in the brands we sell. Genuine parts. No shortcuts." },
              { icon: "💰", title: "Finance Ready", desc: "Fast approval with flexible terms. Ride away sooner on motorcycles, ATVs and power equipment." },
              { icon: "🤝", title: "We Ride Too", desc: "Honest advice from a team that actually rides. We care about your experience on and off the bike." },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-7 hover:shadow-[0_8px_32px_rgba(0,0,0,0.07)] transition-all">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-[family-name:var(--font-display)] text-[16px] font-bold text-black mb-2.5 tracking-tight">{item.title}</h3>
                <p className="text-[13px] text-black/50 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-[#cc1f1f] py-14">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <h2 className="font-[family-name:var(--font-display)] text-[clamp(22px,3vw,32px)] font-bold text-white tracking-tight mb-1">
                Stay in the Loop
              </h2>
              <p className="text-white/65 text-[14px]">New stock, deals and riding content straight to your inbox.</p>
            </div>
            {done ? (
              <div className="px-7 py-4 bg-white/15 border border-white/25 rounded-lg text-white font-semibold flex-shrink-0">
                ✓ You&apos;re subscribed!
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); if (email) setDone(true); }}
                className="flex gap-3 w-full md:w-auto flex-shrink-0"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  aria-label="Email for newsletter"
                  className="flex-1 md:w-64 h-12 px-4 bg-white/15 border-2 border-white/25 focus:border-white/60 rounded-lg text-white placeholder-white/45 text-[14px] outline-none transition-colors"
                />
                <button
                  type="submit"
                  className="h-12 px-6 bg-white text-[#cc1f1f] font-bold text-[14px] rounded-lg hover:bg-gray-100 transition-colors flex-shrink-0"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

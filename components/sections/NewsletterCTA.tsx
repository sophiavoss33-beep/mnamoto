"use client";
import { useState } from "react";
import Link from "next/link";

export default function NewsletterCTA() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <>
      {/* Why MNA */}
      <section className="py-28 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-8 h-[1px] bg-[#cc1f1f]" />
              <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-white/35">Why MNA Moto</span>
              <div className="w-8 h-[1px] bg-[#cc1f1f]" />
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(48px,6vw,72px)] text-white leading-none tracking-wide">
              VICTORIA RIDES<br /><span className="text-[#cc1f1f]">WITH US.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: "🏆", title: "Authorised Dealer", desc: "Factory-authorised for KTM, Husqvarna, GASGAS, CFMOTO, YCF and Sunday with full manufacturer warranty." },
              { icon: "🔧", title: "Expert Workshop", desc: "Trained technicians who specialise in the brands we sell. Genuine parts. No shortcuts." },
              { icon: "💳", title: "Finance Ready", desc: "Fast approval, competitive rates and flexible terms. Ride sooner on motorcycles, ATVs and power equipment." },
              { icon: "🤝", title: "We Ride Too", desc: "Honest advice from a team that actually rides. We care about your experience on and off the bike." },
            ].map((item) => (
              <div key={item.title} className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 hover:border-[#cc1f1f]/25 hover:-translate-y-1 transition-all duration-300">
                <div className="text-3xl mb-5">{item.icon}</div>
                <h3 className="font-[family-name:var(--font-display)] text-[20px] text-white tracking-wide mb-3">{item.title}</h3>
                <p className="text-[13px] text-white/40 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-[#cc1f1f] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <h2 className="font-[family-name:var(--font-display)] text-[clamp(36px,5vw,60px)] text-white leading-none tracking-wide mb-2">
                STAY IN<br />THE LOOP.
              </h2>
              <p className="text-white/65 text-[15px]">New stock, deals and riding content to your inbox.</p>
            </div>
            {done ? (
              <div className="px-8 py-4 bg-white/15 border border-white/25 rounded-lg text-white font-semibold tracking-wide flex-shrink-0">
                ✓ You&apos;re Subscribed
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); if (email) setDone(true); }} className="flex gap-3 w-full md:w-auto flex-shrink-0">
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email address" required aria-label="Email"
                  className="flex-1 md:w-72 h-12 px-5 bg-black/20 border-2 border-white/20 focus:border-white/60 rounded-lg text-white placeholder-white/40 text-[14px] outline-none transition-colors" />
                <button type="submit" className="h-12 px-7 bg-black text-white font-semibold text-[13px] tracking-[0.1em] uppercase rounded-lg hover:bg-[#111] transition-colors flex-shrink-0">
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

"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NewsletterCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <>
      {/* Newsletter */}
      <section className="relative py-16 bg-[#e85d26] overflow-hidden" aria-label="Newsletter signup">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/[0.05] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-black/[0.05] translate-y-1/2 -translate-x-1/4 pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <h2 className="font-[family-name:var(--font-display)] text-[clamp(24px,3.5vw,36px)] font-bold text-white tracking-tight mb-2">
                Stay Ahead of the Pack
              </h2>
              <p className="text-white/70 text-[15px]">New arrivals, exclusive deals and riding content — direct to your inbox.</p>
            </div>

            {submitted ? (
              <div className="flex items-center gap-3 px-7 py-4 bg-white/15 border border-white/30 rounded-lg text-white font-semibold text-[15px] flex-shrink-0">
                ✓ You&apos;re subscribed!
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-3 w-full md:w-auto flex-shrink-0">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  aria-label="Email address for newsletter"
                  className="flex-1 md:w-72 h-12 px-4 bg-white/15 border-2 border-white/30 focus:border-white/70 rounded-lg text-white placeholder-white/50 text-[14px] outline-none transition-colors"
                />
                <button
                  type="submit"
                  className="h-12 px-6 bg-white text-[#e85d26] font-bold text-[14px] rounded-lg hover:bg-[#f5f5f3] transition-colors flex-shrink-0"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Why choose MNA */}
      <section className="py-20 bg-white" aria-label="Why choose MNA Moto">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#e85d26] block mb-3">Why MNA Moto</span>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(28px,4vw,44px)] font-bold tracking-[-0.03em] text-[#1a1a1a]">
              Victoria Riders Choose Us
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#e8e8e8] rounded-xl overflow-hidden">
            {[
              { icon: "🏆", title: "Authorised Dealer", desc: "Factory-authorised for KTM, Husqvarna, GASGAS, CFMOTO, YCF and Sunday. Full manufacturer warranty on every new bike." },
              { icon: "🔧", title: "Expert Workshop", desc: "Our trained technicians specialise in the brands we sell. Every service done to manufacturer specs with genuine parts." },
              { icon: "💰", title: "Finance Ready", desc: "Competitive finance with fast approval. Flexible terms to suit your budget — motorcycles, ATVs and power equipment." },
              { icon: "🤝", title: "Rider Community", desc: "We ride too. Honest advice, genuine support and a team that actually cares about your riding experience." },
            ].map((item) => (
              <div key={item.title} className="bg-white p-8 hover:bg-[#f9f9f7] transition-colors">
                <div className="text-3xl mb-5">{item.icon}</div>
                <h3 className="font-[family-name:var(--font-display)] text-[17px] font-bold text-[#1a1a1a] mb-3 tracking-tight">{item.title}</h3>
                <p className="text-[13.5px] text-[#888] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

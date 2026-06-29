"use client";
import { useState } from "react";

const reviews = [
  { name: "James M.", init: "JM", text: "Bought my KTM from MNA Moto — excellent experience. Honest advice from people who actually ride.", detail: "KTM Owner" },
  { name: "Sarah R.", init: "SR", text: "I've had my bikes serviced here for years. Consistently excellent — genuine parts, fast turnaround.", detail: "Long-term Customer" },
  { name: "Daniel K.", init: "DK", text: "Finance sorted same day. Fast, competitive rate. Picked up my bike the next morning. Top dealership.", detail: "Husqvarna Owner" },
];

export default function Reviews() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <section className="bg-white">
      {/* Stats — white background, clean */}
      <div className="border-t border-black/[0.08] py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {[
              { n: "20+", l: "Years Experience" },
              { n: "6+", l: "Premium Brands" },
              { n: "500+", l: "Bikes in Stock" },
              { n: "4.9★", l: "Google Rating" },
            ].map(({ n, l }, i) => (
              <div key={l} className={`text-center py-10 ${i < 3 ? "border-r border-black/[0.08]" : ""}`}>
                <div className="font-[family-name:var(--font-display)] text-[56px] text-black leading-none tracking-wide">{n}</div>
                <div className="text-[10px] text-black/40 font-bold tracking-[0.18em] uppercase mt-2">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reviews — light grey bg */}
      <div className="bg-[#f5f5f5] border-t border-black/[0.06] py-16 px-6">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(36px,5vw,72px)] text-black leading-none tracking-wide mb-14">
            WHAT RIDERS SAY.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {reviews.map((r) => (
              <div key={r.name} className="border-t-2 border-[#cc1f1f] pt-8">
                <div className="flex gap-0.5 mb-5">
                  {[...Array(5)].map((_,i) => <span key={i} className="text-[#cc1f1f] text-[13px]">★</span>)}
                </div>
                <p className="text-[14px] text-black/55 leading-relaxed mb-8 font-light italic">&ldquo;{r.text}&rdquo;</p>
                <div className="text-[12px] font-bold text-black tracking-wide">{r.name}</div>
                <div className="text-[10px] text-black/35 tracking-wider mt-0.5 uppercase">{r.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter — black panel, contained */}
      <div className="px-4 sm:px-6 py-3 bg-white">
        <div className="bg-black py-16 px-8 md:px-16">
          <div className="max-w-[600px] mx-auto text-center">
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(32px,5vw,60px)] text-white leading-none tracking-wide mb-3">
              JOIN OUR NEWSLETTER
            </h2>
            <p className="text-[13px] text-white/35 mb-10">Sign up — it only takes a second to stay in the know.</p>
            {done ? (
              <p className="text-white/50 font-bold tracking-widest uppercase text-[12px]">✓ You&apos;re subscribed!</p>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); if (email) setDone(true); }} className="flex flex-col sm:flex-row gap-0">
                <input
                  type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address" required aria-label="Email address"
                  className="flex-1 h-14 px-5 bg-transparent border border-white/20 focus:border-white/60 text-white placeholder-white/25 text-[13px] outline-none transition-colors"
                />
                <button type="submit" className="h-14 px-10 bg-white text-black font-bold text-[11px] tracking-[0.2em] uppercase hover:bg-[#cc1f1f] hover:text-white transition-colors flex-shrink-0">
                  SUBSCRIBE
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

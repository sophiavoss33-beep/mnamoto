"use client";
import { useState } from "react";

const reviews = [
  { name: "James M.", init: "JM", text: "Bought my KTM from MNA Moto — excellent experience from start to finish. Honest advice from people who actually ride.", detail: "KTM Owner" },
  { name: "Sarah R.", init: "SR", text: "I've had my bikes serviced here for years. Consistently excellent — genuine parts, fast turnaround, always kept in the loop.", detail: "Long-term Customer" },
  { name: "Daniel K.", init: "DK", text: "Finance sorted on a Husqvarna same day. Fast, competitive rate. Picked up my bike the next morning.", detail: "Husqvarna Owner" },
];

export default function Reviews() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <>
      {/* Stats bar - like reference */}
      <div className="bg-white py-20 border-t border-black/[0.08]">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { n: "20+", l: "Years Experience" },
              { n: "6+", l: "Premium Brands" },
              { n: "500+", l: "Bikes in Stock" },
              { n: "4.9★", l: "Google Rating" },
            ].map(({ n, l }, i) => (
              <div key={l} className={`text-center py-8 ${i < 3 ? "border-r border-black/[0.08]" : ""}`}>
                <div className="font-[family-name:var(--font-display)] text-[60px] text-black leading-none tracking-wide">{n}</div>
                <div className="text-[11px] text-black/40 font-semibold tracking-[0.15em] uppercase mt-2">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reviews */}
      <div className="bg-[#f5f5f5] py-20">
        <div className="max-w-[1200px] mx-auto px-8">
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(40px,6vw,80px)] text-black leading-none tracking-wide mb-16">
            WHAT RIDERS SAY.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {reviews.map((r) => (
              <div key={r.name} className="border-t-2 border-[#cc1f1f] pt-8">
                <div className="flex gap-0.5 mb-5">
                  {[...Array(5)].map((_,i) => <span key={i} className="text-[#cc1f1f] text-[14px]">★</span>)}
                </div>
                <p className="text-[15px] text-black/60 leading-relaxed mb-8 font-light italic">&ldquo;{r.text}&rdquo;</p>
                <div className="text-[12px] font-bold text-black tracking-wide">{r.name}</div>
                <div className="text-[11px] text-black/40 tracking-wider mt-0.5 uppercase">{r.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter — like reference */}
      <div className="bg-black py-20">
        <div className="max-w-[700px] mx-auto px-8 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(36px,5vw,64px)] text-white leading-none tracking-wide mb-3">
            JOIN OUR NEWSLETTER
          </h2>
          <p className="text-[14px] text-white/40 mb-10">It only takes a second to stay in the know.</p>
          {done ? (
            <p className="text-white/60 font-semibold tracking-widest uppercase text-[13px]">✓ You&apos;re subscribed!</p>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); if (email) setDone(true); }} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address" required aria-label="Email address"
                className="flex-1 h-14 px-5 bg-transparent border border-white/25 focus:border-white text-white placeholder-white/30 text-[14px] outline-none transition-colors"
              />
              <button type="submit" className="h-14 px-10 bg-white text-black font-bold text-[12px] tracking-[0.2em] uppercase hover:bg-[#cc1f1f] hover:text-white transition-colors flex-shrink-0">
                SUBSCRIBE
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}

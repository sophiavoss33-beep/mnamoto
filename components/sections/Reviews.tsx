const reviews = [
  { name: "James M.", init: "JM", text: "Bought my KTM from MNA Moto — the experience was excellent from start to finish. Honest advice from people who actually ride. Workshop had my setup sorted before I left.", detail: "KTM Owner" },
  { name: "Sarah R.", init: "SR", text: "I've been getting my bikes serviced here for years. Consistently excellent work — genuine parts, fast turnaround. Wouldn't take my bikes anywhere else.", detail: "Long-term Customer" },
  { name: "Daniel K.", init: "DK", text: "Finance sorted on a Husqvarna same day. Fast, competitive rate, no drama. Picked up my bike the next morning. Top dealership.", detail: "Husqvarna Owner" },
];

export default function Reviews() {
  return (
    <section className="py-28 bg-black">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex items-end justify-between mb-16">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-[1px] bg-[#cc1f1f]" />
              <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-white/35">What Riders Say</span>
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(48px,6vw,80px)] text-white leading-none tracking-wide">
              TRUSTED BY<br /><span className="text-[#cc1f1f]">VICTORIA.</span>
            </h2>
          </div>
          <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2.5 px-5 py-3 bg-white/[0.04] border border-white/[0.08] rounded-full hover:border-white/20 transition-colors">
            <div className="w-5 h-5 rounded-full bg-[#4285f4] flex items-center justify-center text-white font-bold text-[11px]">G</div>
            <span className="text-[12px] font-semibold text-white/55">4.9 · 200+ Reviews</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {reviews.map((r) => (
            <div key={r.name} className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-7 hover:border-[#cc1f1f]/25 hover:bg-white/[0.05] transition-all duration-300">
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => <span key={i} className="text-[#cc1f1f] text-[15px]">★</span>)}
              </div>
              <p className="text-[14px] text-white/50 leading-relaxed mb-6 italic">&ldquo;{r.text}&rdquo;</p>
              <div className="flex items-center gap-3 pt-5 border-t border-white/[0.06]">
                <div className="w-9 h-9 rounded-full bg-[#cc1f1f]/15 flex items-center justify-center text-[#cc1f1f] font-[family-name:var(--font-display)] text-[14px] flex-shrink-0 tracking-wide">
                  {r.init}
                </div>
                <div>
                  <div className="text-[13px] font-semibold text-white">{r.name}</div>
                  <div className="text-[11px] text-white/30 mt-0.5">{r.detail} · Google Review</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

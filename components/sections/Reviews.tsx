const reviews = [
  { name: "James M.", init: "JM", text: "Bought my KTM from MNA Moto and the experience was excellent. Honest advice from people who actually ride. Highly recommend.", detail: "KTM Owner" },
  { name: "Sarah R.", init: "SR", text: "I've had my bikes serviced here for years. Consistently excellent — genuine parts, fast turnaround, always kept in the loop.", detail: "Long-term Customer" },
  { name: "Daniel K.", init: "DK", text: "Finance sorted on a Husqvarna same day. Fast, competitive rate. Picked up my bike the next morning. Top dealership.", detail: "Husqvarna Owner" },
];

export default function Reviews() {
  return (
    <section className="py-32 bg-black border-t border-white/[0.05]">
      <div className="max-w-[1400px] mx-auto px-10 lg:px-20">
        <div className="flex items-end justify-between mb-20">
          <h2 className="font-[family-name:var(--font-display)] text-white leading-none tracking-wider" style={{ fontSize: "clamp(52px,7vw,96px)" }}>
            WHAT RIDERS<br /><span className="text-[#cc1f1f]">SAY.</span>
          </h2>
          <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2.5 text-[12px] font-semibold text-white/30 hover:text-white transition-colors pb-2 border-b border-white/20 hover:border-white/60">
            <span className="w-5 h-5 rounded-full bg-[#4285f4] flex items-center justify-center text-white font-bold text-[10px]">G</span>
            4.9 · 200+ Reviews
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r) => (
            <div key={r.name} className="border-t border-white/[0.08] pt-8">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_,i) => <span key={i} className="text-[#cc1f1f] text-[14px]">★</span>)}
              </div>
              <p className="text-[15px] text-white/45 leading-relaxed mb-8 font-light">&ldquo;{r.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#cc1f1f]/15 flex items-center justify-center text-[#cc1f1f] font-[family-name:var(--font-display)] text-[13px] tracking-wide flex-shrink-0">
                  {r.init}
                </div>
                <div>
                  <div className="text-[13px] font-semibold text-white/70">{r.name}</div>
                  <div className="text-[10px] text-white/25 tracking-wide mt-0.5">{r.detail}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

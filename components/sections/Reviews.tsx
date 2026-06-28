const reviews = [
  { name: "James M.", init: "JM", stars: 5, text: "Bought my KTM from MNA Moto and the experience was excellent. The team really knows their stuff — honest advice from people who actually ride. Workshop had my setup sorted before I left.", detail: "KTM Owner" },
  { name: "Sarah R.", init: "SR", stars: 5, text: "I've been getting my bikes serviced here for years. Quality is consistently excellent — genuine parts, fast turnaround, and they always keep you updated. Wouldn't go anywhere else.", detail: "Long-term Customer" },
  { name: "Daniel K.", init: "DK", stars: 5, text: "Finance sorted on a Husqvarna same day. Fast, competitive rate, no drama at all. Picked up my bike the next morning. Top dealership.", detail: "Husqvarna Owner" },
];

export default function Reviews() {
  return (
    <section className="bg-[#0d0d0d] py-24">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10">

        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-6 h-[2px] bg-[#cc1f1f]" />
              <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-white/40">What Riders Say</span>
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(28px,4vw,44px)] font-bold tracking-[-0.03em] text-white leading-none">
              Trusted by Victoria&apos;s<br />Riding Community.
            </h2>
          </div>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2.5 px-5 py-2.5 bg-white/[0.06] border border-white/[0.1] rounded-full hover:border-white/25 transition-colors"
          >
            <div className="w-5 h-5 rounded-full bg-[#4285f4] flex items-center justify-center text-white font-bold text-[11px]">G</div>
            <span className="text-[12.5px] font-semibold text-white/70">4.9 · 200+ Reviews</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {reviews.map((r) => (
            <div key={r.name} className="bg-white/[0.04] border border-white/[0.07] rounded-2xl p-7 hover:bg-white/[0.07] hover:border-white/[0.12] transition-all">
              <div className="flex gap-0.5 mb-5" aria-label={`${r.stars} stars`}>
                {Array.from({ length: r.stars }).map((_, i) => (
                  <span key={i} className="text-[#cc1f1f] text-[16px]">★</span>
                ))}
              </div>
              <p className="text-[14px] text-white/55 leading-relaxed mb-6 italic">&ldquo;{r.text}&rdquo;</p>
              <div className="flex items-center gap-3 pt-5 border-t border-white/[0.07]">
                <div className="w-9 h-9 rounded-full bg-[#cc1f1f]/20 flex items-center justify-center text-[#cc1f1f] font-bold text-[12px] font-[family-name:var(--font-display)] flex-shrink-0">
                  {r.init}
                </div>
                <div>
                  <div className="text-[13px] font-bold text-white">{r.name}</div>
                  <div className="text-[11px] text-white/35 mt-0.5">{r.detail} · Google Review</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

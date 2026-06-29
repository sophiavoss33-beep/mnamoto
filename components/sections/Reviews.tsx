const reviews = [
  { name: "James M.", init: "JM", text: "Bought my KTM from MNA Moto and the experience was excellent from start to finish. Honest advice from people who actually ride. Highly recommend.", detail: "KTM Owner · Hamilton" },
  { name: "Sarah R.", init: "SR", text: "I've had my bikes serviced here for years. Consistently excellent — genuine parts, fast turnaround and they always keep you updated. Wouldn't go anywhere else.", detail: "Long-term Customer" },
  { name: "Daniel K.", init: "DK", text: "Finance sorted on a Husqvarna same day. Fast, competitive rate, no drama. Picked up my bike the next morning. Top dealership.", detail: "Husqvarna Owner" },
];

export default function Reviews() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
        <div className="flex items-end justify-between mb-14">
          <div>
            <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#CC1F1F] mb-3">What Riders Say</p>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(40px,6vw,72px)] text-gray-900 leading-none tracking-wide">
              TRUSTED BY<br />VICTORIA.
            </h2>
          </div>
          <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2.5 px-5 py-3 bg-white border border-gray-200 rounded-full hover:border-[#CC1F1F] transition-all">
            <div className="w-5 h-5 rounded-full bg-[#4285f4] flex items-center justify-center text-white font-bold text-[11px]">G</div>
            <span className="text-[12.5px] font-semibold text-gray-700">4.9 · 200+ Reviews</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="bg-gray-50 rounded-2xl p-7 border border-gray-100 hover:border-gray-200 hover:shadow-[0_8px_40px_rgba(0,0,0,0.07)] transition-all duration-300">
              <div className="flex gap-0.5 mb-5">
                {[...Array(5)].map((_, i) => <span key={i} className="text-[#CC1F1F] text-[15px]">★</span>)}
              </div>
              <p className="text-[14px] text-gray-600 leading-relaxed mb-6 italic">&ldquo;{r.text}&rdquo;</p>
              <div className="flex items-center gap-3 pt-5 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full bg-[#CC1F1F]/10 flex items-center justify-center font-[family-name:var(--font-display)] text-[14px] text-[#CC1F1F] tracking-wide flex-shrink-0">
                  {r.init}
                </div>
                <div>
                  <div className="text-[13px] font-bold text-gray-900">{r.name}</div>
                  <div className="text-[11px] text-gray-400 mt-0.5">{r.detail} · Google Review</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

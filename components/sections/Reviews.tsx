const reviews = [
  { name: "James M.", init: "JM", text: "Bought my KTM from MNA Moto — excellent experience. Honest advice from people who actually ride.", detail: "KTM Owner · Hamilton" },
  { name: "Sarah R.", init: "SR", text: "I've had my bikes serviced here for years. Consistently excellent — genuine parts, fast turnaround.", detail: "Long-term Customer" },
  { name: "Daniel K.", init: "DK", text: "Finance sorted same day. Competitive rate, no drama. Picked up my bike the next morning.", detail: "Husqvarna Owner" },
];

export default function Reviews() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1320px] mx-auto px-5 lg:px-10">

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-100 rounded-2xl overflow-hidden mb-16">
          {[["20+","Years Experience"],["6+","Premium Brands"],["500+","Bikes in Stock"],["4.9★","Google Rating"]].map(([n,l]) => (
            <div key={l} className="bg-white py-8 px-4 text-center">
              <div className="font-[family-name:var(--font-display)] text-[44px] text-gray-900 leading-none tracking-wide">{n}</div>
              <div className="text-[10px] text-gray-400 font-bold tracking-[0.15em] uppercase mt-2">{l}</div>
            </div>
          ))}
        </div>

        {/* Reviews */}
        <div className="text-center mb-12">
          <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#CC1F1F] mb-3">What Riders Say</p>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(36px,5vw,60px)] text-gray-900 leading-none tracking-wide">
            TRUSTED BY VICTORIA.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {reviews.map((r) => (
            <div key={r.name} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => <span key={i} className="text-[#CC1F1F] text-[14px]">★</span>)}
              </div>
              <p className="text-[14px] text-gray-600 leading-relaxed mb-5 italic">&ldquo;{r.text}&rdquo;</p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-9 h-9 rounded-full bg-[#CC1F1F]/10 flex items-center justify-center font-bold text-[12px] text-[#CC1F1F] flex-shrink-0">
                  {r.init}
                </div>
                <div>
                  <div className="text-[13px] font-bold text-gray-900">{r.name}</div>
                  <div className="text-[11px] text-gray-400 mt-0.5">{r.detail}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 bg-white border border-gray-200 rounded-full hover:border-[#CC1F1F] transition-all text-[13px] font-semibold text-gray-700">
            <div className="w-5 h-5 rounded-full bg-[#4285f4] flex items-center justify-center text-white font-bold text-[10px]">G</div>
            See all 200+ Google Reviews →
          </a>
        </div>
      </div>
    </section>
  );
}

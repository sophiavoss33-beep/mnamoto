import Link from "next/link";

const reviews = [
  {
    name: "James M.",
    initials: "JM",
    rating: 5,
    text: "Bought my KTM from MNA Moto and the experience was excellent from start to finish. The team genuinely knows their stuff — no pressure, just honest advice from people who actually ride. Workshop sorted my setup perfectly before I left the car park.",
    detail: "KTM Owner",
  },
  {
    name: "Sarah R.",
    initials: "SR",
    rating: 5,
    text: "I've been getting my bikes serviced here for years and the quality is consistently excellent. Genuine parts, thorough updates and always faster than expected. Wouldn't take my bikes anywhere else.",
    detail: "Long-term Customer",
  },
  {
    name: "Daniel K.",
    initials: "DK",
    rating: 5,
    text: "Finance sorted on a Husqvarna same day, no drama. The process was effortless — fast, competitive rate, and the whole team was easy to deal with. Picked up my bike the next morning.",
    detail: "Husqvarna Owner",
  },
  {
    name: "Mark T.",
    initials: "MT",
    rating: 5,
    text: "Picked up a Sunday X 124SE for my son and the team were incredibly helpful. They took the time to explain everything, fitted the right gear and made sure we left with everything we needed. Top notch dealership.",
    detail: "Youth Bike Buyer",
  },
  {
    name: "Lisa P.",
    initials: "LP",
    rating: 5,
    text: "Bought a CFMOTO quad from MNA Moto and love it. The team had excellent product knowledge and the after-sales support has been brilliant. They really stand behind what they sell.",
    detail: "CFMOTO ATV Owner",
  },
  {
    name: "Chris W.",
    initials: "CW",
    rating: 5,
    text: "Came in for a chainsaw and left with all my parts and servicing sorted too. Great range, great prices and the staff know their products inside out. Will definitely be back.",
    detail: "Power Equipment Customer",
  },
];

export default function Reviews() {
  return (
    <section className="py-24 bg-[#f5f5f3]" aria-label="Customer reviews">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#e85d26] block mb-3">
              What Riders Say
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(32px,4vw,52px)] font-bold tracking-[-0.03em] leading-none text-[#1a1a1a]">
              Trusted by Victoria&apos;s<br />Riding Community.
            </h2>
          </div>
          {/* Google rating badge */}
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-3 px-5 py-3 bg-white border border-[#e8e8e8] rounded-full hover:border-[#e85d26] transition-colors flex-shrink-0"
            aria-label="View MNA Moto reviews on Google"
          >
            <div className="w-6 h-6 rounded-full bg-[#4285f4] flex items-center justify-center text-white font-bold text-[12px] font-[family-name:var(--font-display)]">G</div>
            <span className="font-semibold text-[13px] text-[#1a1a1a]">4.9 · 200+ Reviews</span>
            <span className="text-[11px] text-[#888]">→</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-white rounded-2xl p-6 border border-transparent hover:border-[#e8e8e8] hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)] transition-all"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4" aria-label={`${review.rating} out of 5 stars`}>
                {Array.from({ length: review.rating }).map((_, i) => (
                  <span key={i} className="text-amber-400 text-[16px]" aria-hidden="true">★</span>
                ))}
              </div>
              <p className="text-[14px] text-[#555] leading-relaxed mb-5 italic">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-[#f0f0ee]">
                <div className="w-10 h-10 rounded-full bg-[#e85d26]/10 flex items-center justify-center font-[family-name:var(--font-display)] font-bold text-[13px] text-[#e85d26] flex-shrink-0">
                  {review.initials}
                </div>
                <div>
                  <div className="text-[13px] font-bold text-[#1a1a1a]">{review.name}</div>
                  <div className="text-[11.5px] text-[#888] mt-0.5">{review.detail} · Verified Google Review</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Google badge */}
        <div className="flex justify-center mt-8 sm:hidden">
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-5 py-3 bg-white border border-[#e8e8e8] rounded-full"
            aria-label="View all Google reviews"
          >
            <div className="w-6 h-6 rounded-full bg-[#4285f4] flex items-center justify-center text-white font-bold text-[12px]">G</div>
            <span className="font-semibold text-[13px] text-[#1a1a1a]">4.9 · 200+ Google Reviews</span>
          </a>
        </div>
      </div>
    </section>
  );
}

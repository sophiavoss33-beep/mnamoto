import Link from "next/link";

export default function ContactStrip() {
  return (
    <section className="bg-[#080808] border-t border-white/[0.05]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-10">
        <div className="flex flex-wrap gap-10 items-center justify-between">
          <div className="flex flex-wrap gap-10">
            {[
              { label: "Address", value: "Hamilton, Victoria" },
              { label: "Phone", value: "07 XXXX XXXX", href: "tel:07XXXXXXXX" },
              { label: "Email", value: "info@mnamoto.com.au", href: "mailto:info@mnamoto.com.au" },
              { label: "Hours", value: "Mon–Fri 8:30–5:00  ·  Sat 8:30–4:00" },
            ].map(({ label, value, href }) => (
              <div key={label}>
                <div className="text-[9px] font-bold tracking-[0.2em] uppercase text-white/25 mb-1">{label}</div>
                {href ? (
                  <a href={href} className="font-[family-name:var(--font-display)] text-[15px] text-white/55 hover:text-white transition-colors tracking-wide">{value}</a>
                ) : (
                  <span className="font-[family-name:var(--font-display)] text-[15px] text-white/55 tracking-wide">{value}</span>
                )}
              </div>
            ))}
          </div>
          <Link href="/contact" className="px-7 py-3 bg-[#cc1f1f] hover:bg-[#a81818] text-white font-semibold text-[13px] tracking-[0.1em] uppercase rounded-lg transition-all flex-shrink-0">
            Get Directions →
          </Link>
        </div>
      </div>
    </section>
  );
}

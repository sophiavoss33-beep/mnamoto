import Link from "next/link";

export default function ContactStrip() {
  return (
    <section className="bg-black border-t border-white/[0.06]">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10 py-10">
        <div className="flex flex-wrap gap-8 items-center justify-between">
          <div className="flex flex-wrap gap-10">
            {[
              { label: "Address", value: "Main Street, Victoria" },
              { label: "Phone", value: "07 XXXX XXXX", href: "tel:07XXXXXXXX" },
              { label: "Email", value: "info@mnamoto.com.au", href: "mailto:info@mnamoto.com.au" },
              { label: "Hours", value: "Mon–Fri 8:30–5:00  ·  Sat 8:30–4:00" },
            ].map(({ label, value, href }) => (
              <div key={label}>
                <div className="text-[10px] font-bold tracking-[0.12em] uppercase text-white/30 mb-1">{label}</div>
                {href ? (
                  <a href={href} className="text-[14px] font-semibold text-white/70 hover:text-white transition-colors font-[family-name:var(--font-display)]">{value}</a>
                ) : (
                  <span className="text-[14px] font-semibold text-white/70 font-[family-name:var(--font-display)]">{value}</span>
                )}
              </div>
            ))}
          </div>
          <Link
            href="/contact"
            className="px-6 py-3 bg-[#cc1f1f] hover:bg-[#a81818] text-white font-bold text-[13.5px] rounded-lg transition-all flex-shrink-0"
          >
            Get Directions →
          </Link>
        </div>
      </div>
    </section>
  );
}

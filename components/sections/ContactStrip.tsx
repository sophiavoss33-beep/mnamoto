import Link from "next/link";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";

export default function ContactStrip() {
  return (
    <section className="bg-[#f5f5f3] border-t border-[#e8e8e8]" aria-label="Contact information">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-10">
        <div className="flex flex-wrap gap-8 items-center justify-between">
          <div className="flex flex-wrap gap-8">
            {[
              { icon: MapPin, label: "Find Us", value: "Main Street, Victoria" },
              { icon: Phone, label: "Call Us", value: "07 XXXX XXXX", href: "tel:07XXXXXXXX" },
              { icon: Mail, label: "Email", value: "info@mnamoto.com.au", href: "mailto:info@mnamoto.com.au" },
              { icon: Clock, label: "Hours", value: "Mon–Fri 8:30–5:00 · Sat 8:30–4:00" },
            ].map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#e85d26]/10 flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-[#e85d26]" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-[10px] font-bold tracking-[0.07em] uppercase text-[#888] mb-0.5">{label}</div>
                  {href ? (
                    <a href={href} className="font-[family-name:var(--font-display)] text-[14px] font-bold text-[#1a1a1a] hover:text-[#e85d26] transition-colors">
                      {value}
                    </a>
                  ) : (
                    <span className="font-[family-name:var(--font-display)] text-[14px] font-bold text-[#1a1a1a]">{value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-3 bg-[#e85d26] hover:bg-[#c44d1e] text-white font-semibold text-[14px] rounded-lg transition-all flex-shrink-0"
          >
            Get Directions <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}

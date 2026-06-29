"use client";
import { useEffect, useRef } from "react";
import { Shield, Wrench, CreditCard, Users } from "lucide-react";

const items = [
  { icon: Shield, title: "Authorised Dealer", desc: "Factory-authorised for KTM, Husqvarna, GASGAS, CFMOTO, YCF and Sunday. Full manufacturer warranty on every new bike." },
  { icon: Wrench, title: "Expert Workshop", desc: "Factory-trained technicians who specialise in the brands we sell. Genuine parts, no shortcuts." },
  { icon: CreditCard, title: "Finance Ready", desc: "Competitive rates and flexible terms. Fast approval — often same day. Ride sooner." },
  { icon: Users, title: "We Ride Too", desc: "Honest advice from a team that actually rides. We genuinely care about your experience on and off the bike." },
];

export default function WhyUs() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        el.querySelectorAll("[data-reveal]").forEach((child, i) => {
          setTimeout(() => {
            (child as HTMLElement).style.opacity = "1";
            (child as HTMLElement).style.transform = "translateY(0)";
          }, i * 100);
        });
        obs.disconnect();
      }
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10" ref={ref}>
        <div className="text-center mb-16">
          <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#CC1F1F] mb-3">Why MNA Moto</p>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(40px,6vw,72px)] text-gray-900 leading-none tracking-wide">
            VICTORIA RIDES WITH US.
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} data-reveal
              style={{ opacity: 0, transform: "translateY(24px)", transition: "all 0.6s cubic-bezier(0.4,0,0.2,1)" }}
              className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-[#CC1F1F]/10 flex items-center justify-center mb-5">
                <Icon size={22} className="text-[#CC1F1F]" />
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-[20px] text-gray-900 tracking-wide mb-3">{title}</h3>
              <p className="text-[13.5px] text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Shield, Wrench, CreditCard, Users } from "lucide-react";

const items = [
  { icon: Shield, title: "Authorised Dealer", desc: "Factory-authorised for KTM, Husqvarna, GASGAS, CFMOTO, YCF and Sunday. Full manufacturer warranty." },
  { icon: Wrench, title: "Expert Workshop", desc: "Factory-trained technicians who specialise in the brands we sell. Genuine parts, no shortcuts." },
  { icon: CreditCard, title: "Finance Ready", desc: "Competitive rates and flexible terms. Fast approval — often same day." },
  { icon: Users, title: "We Ride Too", desc: "Honest advice from a team that actually rides. We care about your experience." },
];

export default function WhyUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1320px] mx-auto px-5 lg:px-10">
        <div className="text-center mb-12">
          <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#CC1F1F] mb-3">Why MNA Moto</p>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(36px,5vw,60px)] text-gray-900 leading-none tracking-wide">
            VICTORIA RIDES WITH US.
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <div className="w-10 h-10 rounded-xl bg-[#CC1F1F]/10 flex items-center justify-center mb-4">
                <Icon size={18} className="text-[#CC1F1F]" />
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-[17px] text-gray-900 tracking-wide mb-2 leading-tight">{title}</h3>
              <p className="text-[12.5px] text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/forms/ContactForm";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | MNA Moto",
  description: "Get in touch with the MNA Moto team. Visit us in Victoria, call, email, or send us an enquiry online.",
};

export default function Contact() {
  return (
    <>
      <Header />
      <main className="pt-28 pb-24">
        {/* Header */}
        <section className="bg-[#0a0a0a] pt-12 pb-16">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <span className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#e85d26] block mb-4">Get in Touch</span>
            <h1 className="font-[family-name:var(--font-display)] text-[clamp(48px,7vw,80px)] font-bold tracking-[-0.04em] text-white mb-4 leading-none">
              Contact Us
            </h1>
            <p className="text-[17px] text-white/45 max-w-[420px] leading-relaxed">
              Drop in, call, or send an enquiry — we&apos;re here to help.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="bg-white py-16">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Info */}
              <div>
                <h2 className="font-[family-name:var(--font-display)] text-[28px] font-bold text-[#1a1a1a] mb-8 tracking-tight">
                  Find Us
                </h2>

                <div className="space-y-6 mb-10">
                  {[
                    { icon: MapPin, title: "Address", lines: ["Main Street", "Victoria, Australia"] },
                    { icon: Phone, title: "Phone", lines: ["07 XXXX XXXX"], href: "tel:07XXXXXXXX" },
                    { icon: Mail, title: "Email", lines: ["info@mnamoto.com.au"], href: "mailto:info@mnamoto.com.au" },
                    { icon: Clock, title: "Trading Hours", lines: ["Monday – Friday: 8:30am – 5:00pm", "Saturday: 8:30am – 4:00pm", "Sunday: Closed"] },
                  ].map(({ icon: Icon, title, lines, href }) => (
                    <div key={title} className="flex gap-5">
                      <div className="w-12 h-12 rounded-xl bg-[#e85d26]/10 flex items-center justify-center flex-shrink-0">
                        <Icon size={20} className="text-[#e85d26]" />
                      </div>
                      <div>
                        <div className="text-[12px] font-bold tracking-[0.06em] uppercase text-[#888] mb-1.5">{title}</div>
                        {lines.map((line, i) =>
                          href && i === 0 ? (
                            <a key={line} href={href} className="block font-[family-name:var(--font-display)] font-semibold text-[#1a1a1a] hover:text-[#e85d26] transition-colors">{line}</a>
                          ) : (
                            <p key={line} className="text-[#555] text-[14px] leading-relaxed">{line}</p>
                          )
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Map placeholder */}
                <div className="bg-[#f5f5f3] rounded-2xl h-[280px] flex items-center justify-center border border-[#e8e8e8]">
                  <div className="text-center">
                    <MapPin size={32} className="text-[#e85d26] mx-auto mb-3" />
                    <p className="text-[#888] text-[14px] font-medium">Google Maps embed</p>
                    <p className="text-[#aaa] text-[12px] mt-1">Add your Google Maps embed code here</p>
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-4 text-[#e85d26] text-[13px] font-semibold"
                    >
                      Open in Google Maps <ArrowRight size={13} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div>
                <h2 className="font-[family-name:var(--font-display)] text-[28px] font-bold text-[#1a1a1a] mb-8 tracking-tight">
                  Send an Enquiry
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

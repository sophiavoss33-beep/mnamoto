"use client";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <section className="py-20 bg-[#CC1F1F] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
      <div className="max-w-[700px] mx-auto px-6 text-center relative">
        <h2 className="font-[family-name:var(--font-display)] text-[clamp(36px,6vw,64px)] text-white leading-none tracking-wide mb-3">
          STAY IN THE LOOP.
        </h2>
        <p className="text-white/70 text-[15px] mb-10">New stock, exclusive deals and riding content — straight to your inbox.</p>
        {done ? (
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-white/15 rounded-xl text-white font-bold tracking-wide">
            ✓ You&apos;re subscribed!
          </div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); if (email) setDone(true); }} className="flex flex-col sm:flex-row gap-3">
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address" required aria-label="Email"
              className="flex-1 h-14 px-5 bg-white/15 border-2 border-white/25 focus:border-white/70 rounded-xl text-white placeholder-white/45 text-[14px] outline-none transition-colors" />
            <button type="submit"
              className="h-14 px-8 bg-white text-[#CC1F1F] font-bold text-[13px] tracking-[0.1em] uppercase rounded-xl hover:bg-gray-100 transition-colors flex-shrink-0">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

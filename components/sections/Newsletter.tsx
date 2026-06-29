"use client";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <section className="py-20 bg-[#CC1F1F]">
      <div className="max-w-[560px] mx-auto px-5 text-center">
        <h2 className="font-[family-name:var(--font-display)] text-[clamp(32px,5vw,52px)] text-white leading-none tracking-wide mb-2">
          STAY IN THE LOOP.
        </h2>
        <p className="text-white/70 text-[14px] mb-8">New stock, deals and riding content — straight to your inbox.</p>
        {done ? (
          <div className="bg-white/15 rounded-xl py-4 px-6 text-white font-bold text-[14px] tracking-wide">
            ✓ You&apos;re subscribed!
          </div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); if (email) setDone(true); }} className="space-y-3">
            <input
              type="email" value={email} onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address" required aria-label="Email"
              className="w-full h-12 px-4 bg-white rounded-xl text-gray-900 placeholder-gray-400 text-[14px] outline-none border-2 border-transparent focus:border-white/50"
            />
            <button type="submit"
              className="w-full h-12 bg-black hover:bg-gray-900 text-white font-bold text-[13px] tracking-[0.1em] uppercase rounded-xl transition-colors">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

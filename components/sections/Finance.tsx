"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Finance() {
  const [loan, setLoan] = useState(15000);
  const [term, setTerm] = useState(48);

  const rate = 0.089 / 12;
  const monthly = loan * (rate * Math.pow(1 + rate, term)) / (Math.pow(1 + rate, term) - 1);
  const weekly = (monthly * 12) / 52;

  return (
    <section className="py-24 bg-white" aria-label="Finance options">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content */}
          <div>
            <span className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#cc1f1f] block mb-4">Ride Now, Pay Smart</span>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(32px,4vw,52px)] font-bold tracking-[-0.03em] leading-tight text-[#1a1a1a] mb-5">
              Finance That<br />Works For You.
            </h2>
            <p className="text-[17px] text-[#888] leading-relaxed mb-8 max-w-[400px]">
              Don&apos;t let budget hold you back. We work with a panel of trusted Australian lenders to secure you a competitive rate — often with same-day approval.
            </p>
            <ul className="space-y-3.5 mb-10">
              {[
                "Fast pre-approval — often same day",
                "Competitive interest rates from 6.99% p.a.",
                "Flexible terms from 12 to 84 months",
                "Balloon payment options available",
                "Finance for motorcycles, ATVs and power equipment",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3 text-[14px] text-[#444] font-medium">
                  <span className="text-[#cc1f1f] text-[17px] mt-0.5 leading-none flex-shrink-0">✓</span>
                  {point}
                </li>
              ))}
            </ul>
            <Link
              href="/finance"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#cc1f1f] hover:bg-[#a81818] text-white font-bold text-[14px] rounded-lg transition-all hover:-translate-y-px hover:shadow-[0_12px_32px_rgba(204,31,31,0.4)]"
            >
              Explore Finance Options <ArrowRight size={15} />
            </Link>
          </div>

          {/* Calculator */}
          <div className="bg-white border border-[#e8e8e8] rounded-2xl p-8 shadow-[0_4px_32px_rgba(0,0,0,0.06)]">
            <h3 className="font-[family-name:var(--font-display)] text-[20px] font-bold text-[#1a1a1a] mb-6 tracking-tight">
              Repayment Estimator
            </h3>

            {/* Loan slider */}
            <div className="mb-6">
              <div className="flex justify-between text-[12px] font-semibold text-[#888] uppercase tracking-wider mb-3">
                <span>Loan Amount</span>
                <span className="text-[#1a1a1a]">${loan.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min={3000}
                max={60000}
                step={500}
                value={loan}
                onChange={(e) => setLoan(Number(e.target.value))}
                aria-label="Loan amount"
                className="w-full"
              />
              <div className="flex justify-between text-[11px] text-[#bbb] mt-1">
                <span>$3,000</span>
                <span>$60,000</span>
              </div>
            </div>

            {/* Term slider */}
            <div className="mb-8">
              <div className="flex justify-between text-[12px] font-semibold text-[#888] uppercase tracking-wider mb-3">
                <span>Loan Term</span>
                <span className="text-[#1a1a1a]">{term} months</span>
              </div>
              <input
                type="range"
                min={12}
                max={84}
                step={12}
                value={term}
                onChange={(e) => setTerm(Number(e.target.value))}
                aria-label="Loan term in months"
                className="w-full"
              />
              <div className="flex justify-between text-[11px] text-[#bbb] mt-1">
                <span>12 mo</span>
                <span>84 mo</span>
              </div>
            </div>

            {/* Result */}
            <div className="bg-[#f5f5f3] rounded-xl p-6 mb-4">
              <div className="flex justify-between items-baseline mb-3 pb-3 border-b border-[#e8e8e8]">
                <span className="text-[14px] text-[#888] font-medium">Estimated weekly</span>
                <span className="font-[family-name:var(--font-display)] text-[28px] font-bold text-[#cc1f1f] tracking-tight">
                  ${Math.round(weekly)}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[14px] text-[#888] font-medium">Estimated monthly</span>
                <span className="font-[family-name:var(--font-display)] text-[20px] font-bold text-[#1a1a1a] tracking-tight">
                  ${Math.round(monthly)}
                </span>
              </div>
            </div>

            <p className="text-[11.5px] text-[#aaa] leading-relaxed mb-5">
              Estimate only. Based on approx. 8.9% p.a. comparison rate. Actual rate subject to credit approval. Fees may apply.
            </p>

            <Link
              href="/finance"
              className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#1a1a1a] hover:bg-[#333] text-white font-bold text-[14px] rounded-lg transition-all"
            >
              Apply for Pre-Approval <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

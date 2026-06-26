import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
export default function Page() {
  return (<><Header /><main className="min-h-screen"><section className="pt-44 pb-24 bg-[#0a0a0a]"><div className="max-w-[1400px] mx-auto px-8"><span className="text-xs font-bold tracking-widest uppercase text-orange-500 block mb-4">MNA Moto</span><h1 className="font-display text-8xl font-bold text-white mb-6">Coming Soon</h1><p className="text-white/40 text-lg mb-8">This page is under construction.</p><Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 bg-orange-500 text-white font-bold rounded-lg">Get in Touch <ArrowRight size={15} /></Link></div></section></main><Footer /></>);
}
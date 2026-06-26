import Link from "next/link";
import { Bike, Wrench, Package, CreditCard, Tag, Zap } from "lucide-react";

const links = [
  { icon: Bike, label: "New Bikes", href: "/motorcycles/new" },
  { icon: Tag, label: "Used Bikes", href: "/motorcycles/used" },
  { icon: Zap, label: "ATVs & UTVs", href: "/motorcycles/atv" },
  { icon: Wrench, label: "Book Service", href: "/workshop/book" },
  { icon: Package, label: "Parts & Gear", href: "/parts" },
  { icon: CreditCard, label: "Finance", href: "/finance" },
];

export default function QuickLinks() {
  return (
    <nav className="bg-[#1a1a1a] border-b border-white/[0.05]" aria-label="Quick navigation">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-3 md:grid-cols-6">
          {links.map(({ icon: Icon, label, href }, i) => (
            <Link
              key={href}
              href={href}
              className={`group flex flex-col items-center gap-2.5 py-6 px-4 text-white/50 hover:text-white hover:bg-white/[0.04] transition-all ${i < links.length - 1 ? "border-r border-white/[0.05]" : ""}`}
            >
              <div className="w-10 h-10 rounded-xl bg-white/[0.05] group-hover:bg-[#e85d26]/15 flex items-center justify-center transition-all">
                <Icon size={18} className="group-hover:text-[#e85d26] transition-colors" aria-hidden="true" />
              </div>
              <span className="text-[11px] font-bold tracking-[0.05em] uppercase">{label}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

import Link from "next/link";

const links = [
  { emoji: "🏍", label: "New Bikes", href: "/motorcycles/new" },
  { emoji: "🔍", label: "Used Bikes", href: "/motorcycles/used" },
  { emoji: "🚜", label: "ATVs & UTVs", href: "/motorcycles/atv" },
  { emoji: "🔧", label: "Book Service", href: "/workshop/book" },
  { emoji: "🛡", label: "Parts & Gear", href: "/parts" },
  { emoji: "💳", label: "Finance", href: "/finance" },
];

export default function QuickLinks() {
  return (
    <nav className="bg-[#111] border-b border-white/[0.05]" aria-label="Quick navigation">
      <div className="max-w-[1320px] mx-auto">
        <div className="grid grid-cols-3 md:grid-cols-6">
          {links.map(({ emoji, label, href }, i) => (
            <Link
              key={href}
              href={href}
              className={`group flex flex-col items-center gap-2 py-5 px-3 text-white/40 hover:text-white hover:bg-white/[0.04] transition-all ${i < links.length - 1 ? "border-r border-white/[0.05]" : ""}`}
            >
              <span className="text-xl group-hover:scale-110 transition-transform">{emoji}</span>
              <span className="text-[10px] font-bold tracking-[0.06em] uppercase">{label}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

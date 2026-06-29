import Link from "next/link";

const cats = [
  { emoji: "🏍", label: "New Bikes", href: "/motorcycles/new" },
  { emoji: "🔍", label: "Used Bikes", href: "/motorcycles/used" },
  { emoji: "🚜", label: "ATVs & UTVs", href: "/motorcycles/atv" },
  { emoji: "🔧", label: "Workshop", href: "/workshop/book" },
  { emoji: "🛡", label: "Parts & Gear", href: "/parts" },
  { emoji: "💳", label: "Finance", href: "/finance" },
];

export default function Categories() {
  return (
    <section className="bg-white border-b border-gray-100">
      <div className="max-w-[1320px] mx-auto">
        <div className="grid grid-cols-3 md:grid-cols-6">
          {cats.map(({ emoji, label, href }, i) => (
            <Link key={href} href={href}
              className={`group flex flex-col items-center gap-2.5 py-7 px-3 hover:bg-red-50 transition-all ${i < cats.length - 1 ? "border-r border-gray-100" : ""}`}>
              <div className="w-12 h-12 rounded-2xl bg-gray-50 group-hover:bg-[#CC1F1F]/10 flex items-center justify-center text-2xl transition-all group-hover:scale-110">
                {emoji}
              </div>
              <span className="text-[11px] font-bold tracking-wide uppercase text-gray-500 group-hover:text-[#CC1F1F] transition-colors">{label}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

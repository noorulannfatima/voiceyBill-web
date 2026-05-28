const terms = [
  { label: "Voice Input", highlight: false },
  { label: "Expense Tracking", highlight: false },
  { label: "Q1 Budget Report", highlight: true },
  { label: "Cash Flow", highlight: false },
  { label: "Receipt Scanning", highlight: false },
  { label: "Balance Sheet", highlight: false },
  { label: "Tax Summary", highlight: true },
  { label: "Annual Report", highlight: false },
  { label: "Multi-currency", highlight: false },
  { label: "Recurring Bills", highlight: false },
  { label: "Spending Trends", highlight: true },
];

const TermList = ({ aria }: { aria?: boolean }) => (
  <div
    className="font-display font-bold text-xl uppercase tracking-tighter text-zinc-300 italic flex shrink-0 justify-around gap-8 min-w-full animate-marquee"
    aria-hidden={aria}
  >
    {terms.map(({ label, highlight }) => (
      <span
        key={label}
        className={highlight ? "text-[#015200] underline decoration-[#9FFF59]" : ""}
      >
        {label}
      </span>
    ))}
  </div>
);

const MarqueeSection = () => {
  return (
    <section className="py-12 bg-white border-y border-zinc-100 overflow-hidden">
      <div className="flex overflow-hidden select-none gap-8">
        <TermList />
        <TermList aria />
      </div>
    </section>
  );
};

export default MarqueeSection;

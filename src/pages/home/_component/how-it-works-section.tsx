const steps = [
  {
    number: "01",
    title: "Add an expense.",
    description:
      "Speak it in your language, upload a receipt photo, or type it manually. All three routes end in the same place — a logged, categorized transaction.",
  },
  {
    number: "02",
    title: "AI organizes it.",
    description:
      "The amount, merchant, date, and category are extracted and stored automatically. Nothing to fill in, nothing to confirm.",
  },
  {
    number: "03",
    title: "See the full picture.",
    description:
      "Your dashboard shows spending by category, by week, and by month. The monthly email report delivers it to your inbox whether you log in or not.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-28 bg-background border-t border-[var(--surface-border)]" id="how-it-works">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-6">
            &gt; How it works
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight max-w-lg">
            Three steps. No setup required.
          </h2>
        </div>

        <div className="space-y-0 divide-y divide-[var(--surface-border)]">
          {steps.map((step) => (
            <div
              key={step.number}
              className="grid md:grid-cols-[120px_1fr] gap-6 py-12"
            >
              <span className="text-4xl font-bold text-[var(--surface-border)] tabular-nums select-none">
                {step.number}
              </span>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-xl">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorksSection;

import { Mic, Camera, Mail } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Log the expense.",
    description:
      "Speak it, snap it, or type it. All routes end at a perfectly categorized transaction.",
    visual: (
      <div className="space-y-3">
        <div className="flex items-center gap-3 p-4 bg-zinc-50 rounded-2xl border border-zinc-100">
          <Mic className="w-5 h-5 text-[#015200] shrink-0" />
          <span className="font-bold text-sm">Voice Input</span>
        </div>
        <div className="flex items-center gap-3 p-4 bg-zinc-50 rounded-2xl border border-zinc-100">
          <Camera className="w-5 h-5 text-[#015200] shrink-0" />
          <span className="font-bold text-sm">Photo Upload</span>
        </div>
      </div>
    ),
  },
  {
    number: "02",
    title: "The AI organizes.",
    description:
      "Merchant, date, and category are read automatically. Nothing to fill, nothing to confirm.",
    visual: (
      <div className="bg-[#F4F4F5] p-6 rounded-3xl border border-zinc-200">
        <div className="flex flex-col items-center gap-4 py-4">
          <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-4xl">
            ☕
          </div>
          <div className="text-center">
            <div className="text-zinc-500 text-xs font-bold uppercase">Food & Dining</div>
            <div className="text-2xl font-display font-bold">$4.50</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    number: "03",
    title: "See the full picture.",
    description:
      "Get monthly reports delivered to your inbox without ever logging into a dashboard.",
    visual: (
      <div className="p-6 bg-zinc-900 rounded-3xl text-white">
        <div className="flex items-center gap-2 mb-4">
          <Mail className="w-4 h-4 text-[#9FFF59]" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
            Monthly Summary
          </span>
        </div>
        <div className="space-y-2">
          <div className="h-2 w-full bg-white/10 rounded" />
          <div className="h-2 w-4/5 bg-white/5 rounded" />
          <div className="h-2 w-full bg-white/5 rounded" />
        </div>
      </div>
    ),
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden" id="how-it-works">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[#015200] font-bold tracking-widest text-xs uppercase mb-4 block">
            02. THE PROCESS
          </span>
          <h2 className="font-display font-bold text-5xl mb-6">
            Three steps.{" "}
            <span className="italic text-zinc-400">Zero setup friction.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              {/* Large background number */}
              <div className="font-display font-black text-[12rem] text-zinc-50 absolute -top-24 -left-8 pointer-events-none select-none leading-none">
                {step.number}
              </div>
              <div className="relative">
                <h4 className="font-display font-bold text-2xl mb-4">{step.title}</h4>
                <p className="text-zinc-500 mb-8">{step.description}</p>
                {step.visual}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorksSection;

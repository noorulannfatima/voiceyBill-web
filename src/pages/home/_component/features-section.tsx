import { Mic, Camera, BarChart3, Globe, RefreshCw, FileText } from "lucide-react";

const FeaturesSection = () => {
  return (
    <section className="py-32 bg-zinc-50" id="features">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-[#015200] font-bold tracking-widest text-xs uppercase mb-4 block">
              01. CORE FEATURES
            </span>
            <h2 className="font-display font-bold text-4xl md:text-6xl tracking-tight">
              Everything you need to{" "}
              <span className="text-zinc-400">track money clearly.</span>
            </h2>
          </div>
          <div className="md:pb-2">
            <p className="text-zinc-500 max-w-sm">
              Built for global citizens who don't have time for manual data entry.
            </p>
          </div>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6">

          {/* Voice — large (8 cols) */}
          <div className="md:col-span-3 lg:col-span-8 bg-white rounded-3xl p-10 border border-zinc-200 flex flex-col justify-between overflow-hidden relative group transition-all">
            <div className="relative z-10">
              <div className="w-12 h-12 bg-[#9FFF59] rounded-2xl flex items-center justify-center mb-8">
                <Mic className="w-6 h-6 text-[#015200]" />
              </div>
              <h3 className="font-display font-bold text-3xl mb-4">Voice input in 50+ languages</h3>
              <p className="text-zinc-500 max-w-md">
                Say "spent $12 on groceries" in English, Urdu, Arabic, or Spanish. VoiceyBill hears it, understands the context, and logs it immediately.
              </p>
            </div>
            <div className="mt-12 flex flex-wrap items-center gap-2">
              <div className="px-4 py-2 bg-zinc-100 rounded-full text-xs font-bold text-zinc-600 italic">"Coffee $4.50"</div>
              <div className="px-4 py-2 bg-zinc-100 rounded-full text-xs font-bold text-zinc-600 italic">"Lunch 15 EUR"</div>
              <div className="px-4 py-2 bg-zinc-100 rounded-full text-xs font-bold text-zinc-600 italic underline decoration-[#9FFF59]">"Taxi PKR 2500"</div>
            </div>
            {/* Decorative waveform */}
            <div className="absolute right-0 bottom-0 w-64 opacity-10 pointer-events-none">
              <svg viewBox="0 0 200 100" className="w-full">
                <path
                  d="M0 50 Q 25 20 50 50 T 100 50 T 150 50 T 200 50"
                  fill="none"
                  stroke="#015200"
                  strokeWidth="4"
                />
              </svg>
            </div>
          </div>

          {/* Receipt — dark (4 cols) */}
          <div className="md:col-span-3 lg:col-span-4 bg-[#015200] rounded-3xl p-10 text-white flex flex-col justify-between group hover:bg-black transition-all">
            <div>
              <div className="w-12 h-12 bg-white/10 border border-white/20 rounded-2xl flex items-center justify-center mb-8">
                <Camera className="w-6 h-6 text-[#9FFF59]" />
              </div>
              <h3 className="font-display font-bold text-3xl mb-4">Snap a receipt, you're done.</h3>
              <p className="text-zinc-400">
                OCR tech pulls merchant, date, and amount before you put your phone away.
              </p>
            </div>
            <div className="mt-8 pt-8 border-t border-white/10">
              <div className="flex items-center gap-3 bg-white/5 rounded-xl p-3">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shrink-0">
                  <FileText className="text-[#015200] w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold">Processing Receipt...</div>
                  <div className="text-[10px] text-[#9FFF59]">98.2% Accuracy</div>
                </div>
              </div>
            </div>
          </div>

          {/* Analytics (4 cols) */}
          <div className="md:col-span-3 lg:col-span-4 bg-white rounded-3xl p-10 border border-zinc-200 flex flex-col justify-between transition-all">
            <div>
              <div className="w-12 h-12 bg-zinc-100 rounded-2xl flex items-center justify-center mb-8">
                <BarChart3 className="w-6 h-6 text-zinc-900" />
              </div>
              <h3 className="font-display font-bold text-2xl mb-4">Deep Spending Analytics</h3>
              <p className="text-zinc-500">
                Category breakdowns and monthly trends presented cleanly with predictive insights.
              </p>
            </div>
          </div>

          {/* Multi-currency — neon (4 cols) */}
          <div className="md:col-span-3 lg:col-span-4 bg-[#9FFF59] rounded-3xl p-10 flex flex-col justify-between hover:bg-[#84e647] transition-all">
            <div>
              <div className="w-12 h-12 bg-[#015200] rounded-2xl flex items-center justify-center mb-8">
                <Globe className="w-6 h-6 text-[#9FFF59]" />
              </div>
              <h3 className="font-display font-bold text-2xl text-[#015200] mb-4">
                Multi-currency, everywhere.
              </h3>
              <p className="text-[#015200]/70 font-medium">
                USD, EUR, PKR, AED, or any other currency. Stored without manual conversion.
              </p>
            </div>
            <div className="flex gap-2 mt-6">
              {["USD", "EUR", "AED"].map((code) => (
                <span key={code} className="px-2 py-1 bg-[#015200] text-white text-[10px] font-bold rounded">
                  {code}
                </span>
              ))}
            </div>
          </div>

          {/* Recurring (4 cols) */}
          <div className="md:col-span-3 lg:col-span-4 bg-white rounded-3xl p-10 border border-zinc-200 flex flex-col justify-between transition-all">
            <div>
              <div className="w-12 h-12 bg-zinc-100 rounded-2xl flex items-center justify-center mb-8">
                <RefreshCw className="w-6 h-6 text-zinc-900" />
              </div>
              <h3 className="font-display font-bold text-2xl mb-4">Recurring Bills</h3>
              <p className="text-zinc-500">
                Set it once. VoiceyBill tracks every future occurrence automatically.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

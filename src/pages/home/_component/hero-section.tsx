import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTypedSelector } from "@/app/hook";
import { useEffect, useRef, useState } from "react";

const HeroSection = () => {
  const { user, accessToken } = useTypedSelector((state) => state.auth);
  const isAuthenticated = !!(user && accessToken);

  // Scroll-driven 3D tilt: starts at ~18° rotateX, flattens to 0° over 500px scroll
  const [rotateX, setRotateX] = useState(18);
  const [imgScale, setImgScale] = useState(0.93);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const TILT_START = 18;   // degrees at scroll 0
    const SCROLL_END = 500;  // px of scroll to reach flat

    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const progress = Math.min(window.scrollY / SCROLL_END, 1);
        setRotateX(TILT_START * (1 - progress));
        setImgScale(0.93 + 0.07 * progress);
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // set initial value
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section className="relative pt-32 pb-24 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Centered heading block */}
        <div className="text-center mb-12 sm:mb-20">
          <div className="inline-flex items-center gap-2 bg-[#F4F4F5] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#015200] mb-6">
            <span className="h-2 w-2 rounded-full bg-[#9FFF59] animate-pulse shrink-0 flex" />
            AI-Powered Financial Intelligence
          </div>

          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-tight mb-6 sm:mb-8 leading-[1.1]">
            Expense tracking that <br className="hidden sm:block" />
            <span className="text-[#015200] italic">speaks your language.</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto mb-8 sm:mb-10">
            Say it, snap it, or type it. VoiceyBill logs and categorizes every
            expense — in any language, any currency, with total precision.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            {isAuthenticated ? (
              <Link
                to="/overview"
                className="w-full sm:w-auto bg-[#9FFF59] text-[#015200] font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-2xl hover:bg-[#84e647] transition-all shadow-lg flex items-center justify-center gap-2"
              >
                Go to Dashboard <ArrowRight className="w-5 h-5" />
              </Link>
            ) : (
              <Link
                to="/sign-up"
                className="w-full sm:w-auto bg-[#9FFF59] text-[#015200] font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-2xl hover:bg-[#84e647] transition-all shadow-lg flex items-center justify-center gap-2"
              >
                Start tracking free <ArrowRight className="w-5 h-5" />
              </Link>
            )}

            <div className="flex items-center gap-3 sm:gap-4 text-zinc-400">
              <div className="flex -space-x-2">
                {["11", "12", "13"].map((n) => (
                  <img
                    key={n}
                    src={`https://i.pravatar.cc/150?img=${n}`}
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white"
                    alt="User"
                  />
                ))}
              </div>
              <span className="text-xs font-medium">
                Joined by 300+ early adopters
              </span>
            </div>
          </div>
        </div>

        {/* 3D Parallax Dashboard Screenshot */}
        <div
          style={{ perspective: "1400px", perspectiveOrigin: "50% 0%" }}
          className="w-full"
        >
          <div
            style={{
              transform: `rotateX(${rotateX}deg) scale(${imgScale})`,
              transformOrigin: "50% 0%",
              willChange: "transform",
            }}
            className="relative w-full"
          >
            {/* Neon glow behind image */}
            <div className="absolute -inset-2 sm:-inset-4 bg-[#9FFF59]/12 rounded-[2rem] blur-2xl pointer-events-none" />

            {/* Subtle top-edge reflection line (enhances 3D depth) */}
            <div
              className="absolute inset-x-0 top-0 h-px rounded-full pointer-events-none"
              style={{
                background:
                  "linear-gradient(to right, transparent, rgba(159,255,89,0.4), transparent)",
                opacity: rotateX / 18,
              }}
            />

            {/* Screenshot frame */}
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-zinc-200/60 shadow-[0_32px_80px_-12px_rgba(1,82,0,0.18),0_0_0_1px_rgba(0,0,0,0.04)]">
              <img
                src="/dashboard.png"
                alt="VoiceyBill Dashboard"
                className="w-full h-auto block"
                draggable={false}
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;

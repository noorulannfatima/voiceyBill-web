import SignInForm from "./_component/signin-form";
import Logo from "@/components/logo/logo";
import { CheckCircle } from "lucide-react";

const SignIn = () => {
  const highlights = [
    "Voice expense tracking in any language",
    "AI receipt scanning & categorization",
    "Real-time analytics & monthly reports",
    "CSV import/export & recurring transactions",
  ];

  return (
    <div className="min-h-svh grid lg:grid-cols-2">
      {/* Left: form */}
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-start">
          <Logo url="/" />
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-sm">
            <SignInForm />
          </div>
        </div>
      </div>

      {/* Right: brand panel */}
      <div className="hidden lg:flex flex-col justify-between bg-[var(--app-dark)] text-white p-12">
        <div />
        <div className="space-y-8 max-w-md">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-white/10 text-white/80">
              <span className="w-1.5 h-1.5 rounded-full bg-white inline-block" />
              Personal Finance Platform
            </div>
            <h2 className="text-3xl font-bold leading-snug">
              Take control of your{" "}
              <span className="text-white">finances</span>{" "}
              with AI
            </h2>
            <p className="text-white/60 leading-relaxed">
              VoiceyBill makes expense tracking effortless — just speak, snap, or type.
              Our AI handles the rest.
            </p>
          </div>

          <ul className="space-y-3">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 flex-shrink-0 text-white/60" />
                <span className="text-sm text-white/80">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <p className="text-white/30 text-sm">© 2025 VoiceyBill</p>
      </div>
    </div>
  );
};

export default SignIn;

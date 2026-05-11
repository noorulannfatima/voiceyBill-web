import Logo from "@/components/logo/logo";
import { CheckCircle } from "lucide-react";
import VerifyOtpForm from "./_component/verify-otp-form";

const VerifyEmail = () => {
  const highlights = [
    "Secure one-time code verification",
    "Account activation before login",
    "Resend code if your email took a moment",
    "Protected onboarding for new users",
  ];

  return (
    <div className="min-h-svh grid lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-start">
          <Logo url="/" />
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-sm">
            <VerifyOtpForm />
          </div>
        </div>
      </div>

      <div className="hidden lg:flex flex-col justify-between bg-[var(--app-dark)] text-white p-12">
        <div />
        <div className="space-y-8 max-w-md">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-white/10 text-white/80">
              <span className="w-1.5 h-1.5 rounded-full bg-white inline-block" />
              Email verification
            </div>
            <h2 className="text-3xl font-bold leading-snug">
              Activate your <span className="text-white">VoiceyBill</span> account
            </h2>
            <p className="text-white/60 leading-relaxed">
              We send a one-time code to verify your email before you can sign in.
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

export default VerifyEmail;
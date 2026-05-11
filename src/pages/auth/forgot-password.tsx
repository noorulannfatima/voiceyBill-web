import Logo from "@/components/logo/logo";
import { CheckCircle } from "lucide-react";
import ForgotPasswordForm from "./_component/forgot-password-form";

const ForgotPassword = () => {
  const highlights = [
    "Reset access with a secure email code",
    "Codes expire automatically for safety",
    "Restore your account without support",
    "Keep your finance data protected",
  ];

  return (
    <div className="min-h-svh grid lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-start">
          <Logo url="/" />
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-sm">
            <ForgotPasswordForm />
          </div>
        </div>
      </div>

      <div className="hidden lg:flex flex-col justify-between bg-[var(--app-dark)] text-white p-12">
        <div />
        <div className="space-y-8 max-w-md">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-white/10 text-white/80">
              <span className="w-1.5 h-1.5 rounded-full bg-white inline-block" />
              Account recovery
            </div>
            <h2 className="text-3xl font-bold leading-snug">
              Recover your <span className="text-white">VoiceyBill</span> access
            </h2>
            <p className="text-white/60 leading-relaxed">
              We’ll send a one-time reset code to your email so you can create a new password.
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

export default ForgotPassword;

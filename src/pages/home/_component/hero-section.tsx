import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Github } from "lucide-react";
import { useTypedSelector } from "@/app/hook";

const HeroSection = () => {
  const { user, accessToken } = useTypedSelector((state) => state.auth);
  const isAuthenticated = !!(user && accessToken);

  return (
    <section className="py-32 lg:py-44">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-8">

          <h1 className="text-5xl sm:text-6xl lg:text-[4.5rem] font-bold tracking-tight text-foreground leading-[1.05]">
            Expense tracking that speaks your language.
          </h1>

          <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
            Say it, snap it, or type it. VoiceyBill logs and categorizes every
            expense automatically — in any language.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            {isAuthenticated ? (
              <Button
                size="lg"
                asChild
                className="bg-foreground text-background hover:bg-foreground/90 h-12 px-7"
              >
                <Link to="/overview">
                  Go to Dashboard <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            ) : (
              <>
                <Button
                  size="lg"
                  asChild
                  className="bg-foreground text-background hover:bg-foreground/90 h-12 px-7"
                >
                  <Link to="/sign-up">
                    Start tracking <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 px-7 border-[var(--surface-border)]"
                  onClick={() =>
                    window.open(
                      "https://github.com/voiceyBill/voiceyBill-web",
                      "_blank"
                    )
                  }
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
              </>
            )}
          </div>

          <div className="pt-8 flex flex-wrap gap-10 border-t border-[var(--surface-border)]">
            {[
              { value: "Any language", label: "Voice input" },
              { value: "Instant", label: "Receipt scanning" },
              { value: "Auto", label: "Categorization" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-base font-semibold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;

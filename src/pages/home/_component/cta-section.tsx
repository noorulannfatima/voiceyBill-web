import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useTypedSelector } from "@/app/hook";

const CtaSection = () => {
  const { user, accessToken } = useTypedSelector((state) => state.auth);
  const isAuthenticated = !!(user && accessToken);

  return (
    <section className="py-28 bg-background border-t border-[var(--surface-border)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl space-y-8">

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            &gt; Get started
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight">
            Start tracking in two minutes.
          </h2>

          <p className="text-muted-foreground leading-relaxed text-lg">
            No credit card. No setup fee. Start tracking your expenses in minutes.
          </p>

          <div className="flex flex-wrap gap-3">
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
                    Create free account <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="h-12 px-7 border-[var(--surface-border)]"
                >
                  <Link to="/sign-in">Sign in</Link>
                </Button>
              </>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default CtaSection;

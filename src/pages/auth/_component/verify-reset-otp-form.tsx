import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader, RefreshCcw } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import OtpInput from "@/components/otp-input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { AUTH_ROUTES } from "@/routes/common/routePath";
import {
  useForgotPasswordMutation,
} from "@/features/auth/authAPI";
import { createSearchParams } from "react-router-dom";

const schema = z.object({
  email: z.string().email("Invalid email address"),
  otp: z.string().regex(/^\d{6}$/, "Enter the 6-digit code sent to your email"),
});

type FormValues = z.infer<typeof schema>;

const VerifyResetOtpForm = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const emailFromQuery = searchParams.get("email") ?? "";
  const [otpValue, setOtpValue] = useState("");
  const [forgotPassword, { isLoading: isResending }] = useForgotPasswordMutation();

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: emailFromQuery,
      otp: "",
    },
  });

  const onSubmit = (values: FormValues) => {
    navigate({
      pathname: AUTH_ROUTES.SET_NEW_PASSWORD,
      search: createSearchParams({
        email: values.email,
        otp: values.otp,
      }).toString(),
    });
  };

  const handleResend = () => {
    const email = form.getValues("email");
    if (!email) {
      toast.error("Enter your email first");
      return;
    }

    forgotPassword({ email })
      .unwrap()
      .then(() => {
        toast.success("Reset code resent to your email");
      })
      .catch((error) => {
        toast.error(error.data?.message || "Failed to resend code");
      });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6">
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold">Verify reset code</h1>
          <p className="text-balance text-sm text-muted-foreground">
            Enter the 6-digit code sent to your email
          </p>
        </div>

        <div className="grid gap-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Your email address" disabled {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="otp"
            render={() => (
              <FormItem>
                <FormLabel>Reset code</FormLabel>
                <FormControl>
                  <OtpInput
                    value={otpValue}
                    onChange={(value) => {
                      setOtpValue(value);
                      form.setValue("otp", value);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button disabled={otpValue.length !== 6} type="submit" className="w-full">
            Continue
          </Button>

          <Button
            type="button"
            variant="outline"
            disabled={isResending}
            onClick={handleResend}
            className="w-full"
          >
            {isResending ? <Loader className="h-4 w-4 animate-spin" /> : <RefreshCcw className="h-4 w-4" />}
            Resend code
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default VerifyResetOtpForm;

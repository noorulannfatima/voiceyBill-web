import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate, createSearchParams } from "react-router-dom";
import { toast } from "sonner";
import { Loader } from "lucide-react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { AUTH_ROUTES } from "@/routes/common/routePath";
import { useForgotPasswordMutation } from "@/features/auth/authAPI";

const schema = z.object({
  email: z.string().email("Invalid email address"),
});

type FormValues = z.infer<typeof schema>;

const ForgotPasswordForm = () => {
  const navigate = useNavigate();
  const [forgotPassword, { isLoading }] = useForgotPasswordMutation();

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (values: FormValues) => {
    forgotPassword(values)
      .unwrap()
      .then(() => {
        toast.success("Reset code sent to your email");
        navigate({
          pathname: AUTH_ROUTES.VERIFY_RESET_OTP,
          search: createSearchParams({ email: values.email }).toString(),
        });
      })
      .catch((error) => {
        toast.error(error.data?.message || "Failed to send reset code");
      });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6">
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold">Forgot password</h1>
          <p className="text-balance text-sm text-muted-foreground">
            Enter your email and we’ll send a reset code.
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
                  <Input placeholder="Your email address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button disabled={isLoading} type="submit" className="w-full">
            {isLoading && <Loader className="h-4 w-4 animate-spin" />}
            Send reset code
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ForgotPasswordForm;

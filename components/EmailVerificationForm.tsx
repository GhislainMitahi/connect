"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { useRouter, useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

import Spinner from "@/components/shareds/Spinner";
import { toast } from "@/components/ui/use-toast";
import { server } from "@/lib/server";
import axios from "axios";
import { useState } from "react";

const FormSchema = z.object({
  emailConfirmationToken: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
});

const EmailVerificationForm = () => {
  //local state
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  // get the email from the url
  const encodedEmail = useSearchParams().get("email");
  const email = atob(encodedEmail!);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      emailConfirmationToken: "",
    },
  });
  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    try {
      setIsLoading(true);
      const response = await server.post("/auth/confirm-email", {
        emailConfirmationToken: data.emailConfirmationToken,
        email,
      });

      if (response.data && response.data.status === 200) {
        form.reset();
        toast({
          variant: "default",
          title: "Email Verification",
          description: "Email verification successful",
          duration: 3000,
        });
        setIsLoading(false);
        router.push("/otp-auth/success");
      } else {
        setIsLoading(false);
        throw new Error(
          response.data.message || "Unknown error during sign up"
        );
      }
    } catch (error) {
      setIsLoading(false);
      console.error(error);
      let errorMessage = "An unexpected error occurred";
      if (axios.isAxiosError(error)) {
        errorMessage = error.response?.data?.error || error.message;
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }
      toast({
        variant: "destructive",
        title: "Verification Failed",
        description: errorMessage,
        duration: 3000,
      });
    }
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-2/3 flex flex-col justify-center items-center gap-4"
      >
        <FormField
          control={form.control}
          name="emailConfirmationToken"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <InputOTP maxLength={6} {...field}>
                  <InputOTPGroup className="flex gap-2">
                    <InputOTPSlot index={0} className="bg-white" />
                    <InputOTPSlot index={1} className="bg-white" />
                    <InputOTPSlot index={2} className="bg-white" />
                  </InputOTPGroup>
                  <InputOTPSeparator className="text-linkColor" />
                  <InputOTPGroup className="flex gap-2">
                    <InputOTPSlot index={3} className="bg-white" />
                    <InputOTPSlot index={4} className="bg-white" />
                    <InputOTPSlot index={5} className="bg-white" />
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="bg-linkColor text-white w-[65%] hover:bg-custom-green-oil   hover:text-linkColor tracking-wide"
        >
          {" "}
          {isLoading ? <Spinner /> : "Verify email"}
        </Button>
      </form>
    </Form>
  );
};

export default EmailVerificationForm;

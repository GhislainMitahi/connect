"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { server } from "@/lib/server";
import { ResetPassWordFormSchema } from "@/lib/zodSchema";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Spinner from "./shareds/Spinner";
import { useToast } from "./ui/use-toast";

function ResetPassword() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  //toast
  const { toast } = useToast();
  // 1. Define your form.
  const form = useForm<z.infer<typeof ResetPassWordFormSchema>>({
    resolver: zodResolver(ResetPassWordFormSchema),
    defaultValues: {
      password: "",
      passwordConfirm: "",
    },
  });

  // 2. Define a submit handler.
  const onSubmit = async (values: z.infer<typeof ResetPassWordFormSchema>) => {
    try {
      setIsLoading(true);
      const response = await server.post("/auth/request-password-reset", {
        ...values,
      });

      if (response.data && response.data.status === 200) {
        form.reset();
        toast({
          variant: "default",
          title: "Request Password Reset",
          description: "Password reset requested successfully",
          duration: 3000,
        });
        setIsLoading(false);
        router.push("/signin");
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
        console.log(errorMessage);
        errorMessage = error.response?.data?.error || error.message;
      } else if (error instanceof Error) {
        console.log(errorMessage);
        errorMessage = error.message;
      }
      toast({
        variant: "destructive",
        title: "Signup Failed",
        description: errorMessage,
        duration: 3000,
      });
    }
  };
  return (
    <Form {...form}>
      <div className="w-[100%] flex flex-col justify-center items-center bg-custom-green-standard bg-opacity-15 rounded-xl">
        <div className=" w-full flex flex-col justify-center items-center px-8 pt-8">
          <div className="w-full flex flex-col gap-4 justify-center items-center"></div>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full flex flex-col gap-4"
          >
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[12px] text-custom-gray">
                    Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      className="border-none onFocus-none onBlur-none bg-opacity-15 bg-[#FFFFFF] text-custom-light placeholder:text-custom-gray text-[12px]"
                      placeholder="0000000000"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-[12px]" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="passwordConfirm"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[12px] text-custom-gray">
                    Confirm password
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      className="border-none onFocus-none onBlur-none bg-opacity-15 bg-[#FFFFFF] text-custom-light placeholder:text-custom-gray text-[12px]"
                      placeholder="0000000000"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-[12px]" />
                </FormItem>
              )}
            />
            <Button
              className="bg-custom-green-oil hover:bg-custom-green-light text-custom-green-night hover:text-custom-light"
              type="submit"
            >
              {" "}
              {isLoading ? <Spinner /> : "Reset"}
            </Button>
          </form>
        </div>
        <div
          style={{ background: "url('/Dots.svg')" }}
          className="w-full bg-no-repeat bg-cover bg-center rounded-b-xl"
        >
          <div className="text-xs text-custom-gray flex items-center justify-center flex-col gap-4 px-8 py-4">
            <p>
              Have you remembered your password?{" "}
              <Link href="/signin" className="text-custom-green-oil">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Form>
  );
}

export default ResetPassword;

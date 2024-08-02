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
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { server } from "@/lib/server";
import { ResetPassWordFormSchema } from "@/lib/zodSchema";
import { EyeFilled, EyeInvisibleFilled, LockOutlined } from "@ant-design/icons";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import Spinner from "./shareds/Spinner";

function ResetPassword() {
  //local state
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const router = useRouter();

  const { toast } = useToast();

  // get the email from the url
  const token = useSearchParams().get("token");

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleShowPasswordConfirm = () => {
    setShowPasswordConfirm(!showPasswordConfirm);
  };

  // 1. Define your form.
  const form = useForm<z.infer<typeof ResetPassWordFormSchema>>({
    resolver: zodResolver(ResetPassWordFormSchema),
    defaultValues: {
      password: "",
      passwordConfirm: "",
    },
  });

  // 2. Define a submit handler.
  const onSubmit = async (data: z.infer<typeof ResetPassWordFormSchema>) => {
    try {
      setIsLoading(true);
      const response = await server.post("/auth/reset-password", {
        token: token,
        newPassword: data.password,
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
        errorMessage = error.response?.data?.message || error.message;
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
                      type={showPassword ? "text" : "password"}
                      className="border-none onFocus-none onBlur-none bg-opacity-15 bg-[#FFFFFF] text-custom-light placeholder:text-custom-gray text-[12px]"
                      placeholder="0000000000"
                      {...field}
                      leftIcon={<LockOutlined />}
                      rightIcon={
                        showPassword ? <EyeInvisibleFilled /> : <EyeFilled />
                      }
                      onRightClick={handleShowPassword}
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
                      type={showPasswordConfirm ? "text" : "password"}
                      className="border-none onFocus-none onBlur-none bg-opacity-15 bg-[#FFFFFF] text-custom-light placeholder:text-custom-gray text-[12px]"
                      placeholder="0000000000"
                      {...field}
                      leftIcon={<LockOutlined />}
                      rightIcon={
                        showPasswordConfirm ? (
                          <EyeInvisibleFilled />
                        ) : (
                          <EyeFilled />
                        )
                      }
                      onRightClick={handleShowPasswordConfirm}
                    />
                  </FormControl>
                  <FormMessage className="text-[12px]" />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="bg-custom-green-oil hover:bg-custom-green-light text-custom-green-night hover:text-custom-light"
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

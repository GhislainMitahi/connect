"use client";
import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { startTransition, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  EyeFilled,
  EyeInvisibleFilled,
  LockOutlined,
  UserOutlined,
} from "@ant-design/icons";

import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

// If consider using server component for authentication
import { login } from "@/actions/login";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SignInformSchema } from "@/lib/zodSchema";
import Spinner from "./shareds/Spinner";
import Facebook from "./svg/Facebook";
import Google from "./svg/Google";

function SignIn() {
  //Local states
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  // 1. Define your form.
  const form = useForm<z.infer<typeof SignInformSchema>>({
    resolver: zodResolver(SignInformSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  //Toast
  const { toast } = useToast();

  const handleLoginWithSocial = async (provider: "google" | "facebook") => {
    try {
      signIn(provider, { callbackUrl: DEFAULT_LOGIN_REDIRECT });
    } catch (error) {
      console.error("Error loging in with social provider:", error);
    }
  };

  // 2. Define a submit handler.
  const onSubmit = async (values: z.infer<typeof SignInformSchema>) => {
    try {
      setIsLoading(true);
      startTransition(async () => {
        setIsLoading(true);
        const data = await login(values);

        if (data?.error) {
          setIsLoading(false);
          toast({
            variant: "destructive",
            title: "Login Failed",
            description: `${data.error}`,
            duration: 3000,
          });
        } else {
          setIsLoading(false);
          toast({
            variant: "default",
            title: "Login Successful",
            description: "You have successfully logged in!",
            duration: 3000,
          });
        }
      });
    } catch (error) {
      setIsLoading(false);
      toast({
        variant: "destructive",
        title: "System Error",
        description:
          "Unable to process your login request. Please try again later.",
        duration: 3000,
      });
    }
  };

  return (
    <Form {...form}>
      <div className="w-full flex flex-col justify-center items-center  bg-custom-green-standard bg-opacity-15 rounded-xl">
        <div className="w-full flex flex-col justify-between items-center px-4 md:px-8 pt-8">
          <div className="w-full flex md:flex-row flex-col items-center justify-center gap-3 pb-4">
            <Button
              className="w-full flex gap-4 bg-opacity-15 hover:bg-custom-green-light bg-[#FFFFFF] text-custom-light"
              onClick={() => handleLoginWithSocial("google")}
            >
              <Google />
              Google
            </Button>
            <Button
              className=" w-full flex gap-4 bg-opacity-15 hover:bg-custom-green-light bg-[#FFFFFF] text-custom-light"
              onClick={() => handleLoginWithSocial("facebook")}
            >
              <Facebook />
              <p>Facebook</p>
            </Button>
          </div>
          <div className="flex gap-4 w-full items-center">
            <p className="h-[0.5px] bg-custom-gray w-full"></p>
            <p>or</p>
            <p className="h-[0.5px] bg-custom-gray w-full"></p>
          </div>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full flex flex-col gap-1"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base text-white mt-2">
                    Username or Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="border-none onFocus-none onBlur-none bg-opacity-15 bg-[#FFFFFF] text-custom-light placeholder:text-custom-gray text-[12px]"
                      placeholder="username or email"
                      {...field}
                      leftIcon={<UserOutlined />}
                    />
                  </FormControl>
                  <FormMessage className="text-[12px]" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <div className="flex justify-between mt-3">
                    <FormLabel className="text-base text-white">
                      Password
                    </FormLabel>
                    <Link
                      href="/request-reset-email"
                      className="text-custom-green-oil text-[14px] tracking-wide"
                    >
                      Forgot Password?
                    </Link>
                  </div>

                  <FormControl>
                    <Input
                      type={showPassword ? "text" : "password"}
                      className="border-none onFocus-none onBlur-none bg-opacity-15 bg-[#FFFFFF] text-custom-light placeholder:text-custom-gray text-[12px]"
                      placeholder="Password"
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
              name="rememberMe"
              render={({ field }) => (
                <FormItem className="flex gap-2 items-center my-2">
                  <FormControl className="flex items-center">
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="bg-custom-green-oil"
                    />
                  </FormControl>
                  <FormLabel className="flex items-center pb-2 text-sm text-white">
                    Remember Me
                  </FormLabel>
                </FormItem>
              )}
            />
            <Button
              className="bg-custom-green-oil hover:bg-custom-green-light text-custom-green-night hover:text-custom-light"
              type="submit"
            >
              {" "}
              {isLoading ? <Spinner /> : "Signin"}
            </Button>
          </form>
        </div>
        <div
          style={{ background: "url('/Dots.svg')" }}
          className="w-full bg-no-repeat bg-cover bg-center rounded-b-xl"
        >
          <div className="text-xs text-custom-gray px-4 py-4 text-center">
            <p className="text-sm">
              Don't have an account?{" "}
              <Link href="/signup" className="text-custom-green-oil">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Form>
  );
}

export default SignIn;

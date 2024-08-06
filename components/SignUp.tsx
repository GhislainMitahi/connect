"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  EyeFilled,
  EyeInvisibleFilled,
  LockOutlined,
  MailOutlined,
  UserAddOutlined,
} from "@ant-design/icons";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import server from "@/lib/server";
import { SignUpformSchema } from "@/lib/zodSchema";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Spinner from "./shareds/Spinner";
import Facebook from "./svg/Facebook";
import Google from "./svg/Google";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  //toast
  const { toast } = useToast();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  // 1. Define your form.
  const form = useForm<z.infer<typeof SignUpformSchema>>({
    resolver: zodResolver(SignUpformSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  const handleSignUpSocial = async (provider: "google" | "facebbok") => {
    try {
      signIn(provider, { callbackUrl: DEFAULT_LOGIN_REDIRECT });
    } catch (error) {
      console.error("Error signing in with social provider:", error);
    }
  };

  // 2. Define a submit handler.
  const onSubmit = async (values: z.infer<typeof SignUpformSchema>) => {
    try {
      setIsLoading(true);
      const response = await server.post("/auth/signup", {
        ...values,
      });

      if (response.data && response.data.status === "200") {
        form.reset();
        toast({
          variant: "default",
          title: "Sign up",
          description: response.data.message,
          duration: 3000,
        });
        setIsLoading(false);
        if (response.data.emailUrlVerify) {
          const fullUrl = response.data.emailUrlVerify;
          const urlObject = new URL(fullUrl);

          const pathWithQuery = urlObject.pathname + urlObject.search;

          router.push(pathWithQuery);
        }
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
        title: "Signup Failed",
        description: errorMessage,
        duration: 3000,
      });
    }
  };
  return (
    <Form {...form}>
      <div className="w-[100%] h-full flex flex-col justify-center items-center bg-custom-green-standard bg-opacity-15 rounded-xl">
        <div className=" w-full flex flex-col justify-center items-center px-1 md:px-8 pt-8">
          <div className="w-full flex flex-col gap-4 justify-center items-center">
            <h3 className="text-custom-slate text-sm tracking-wide">
              Register With:
            </h3>
            <div className="flex md:flex-row flex-col items-center justify-center gap-4 w-full tracking-wide">
              <Button
                className="md:w-[50%] w-full flex md:gap-4 gap-2 bg-opacity-15 hover:bg-custom-green-light bg-[#FFFFFF] text-custom-light"
                type="submit"
                onClick={() => handleSignUpSocial("google")}
              >
                <Google />
                <p className="md:text-sm text-xs">Google</p>
              </Button>
              <Button
                className="md:w-[50%] w-full flex md:gap-4 gap-2 bg-opacity-15 hover:bg-custom-green-light bg-[#FFFFFF] text-custom-light"
                type="submit"
                onClick={() => handleSignUpSocial("facebbok")}
              >
                <Facebook /> <p className="md:text-sm text-xs">Facebook</p>
              </Button>
            </div>
            <div className="flex gap-4 w-full items-center">
              <p className="h-[0.5px] bg-custom-gray w-full"></p>
              <p>or</p>
              <p className="h-[0.5px] bg-custom-gray w-full"></p>
            </div>
          </div>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full flex flex-col gap-1"
          >
            <div className="flex w-full gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem className="w-[50%]">
                    <FormLabel className="text-[12px] text-custom-gray">
                      First Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="border-none onFocus-none onBlur-none bg-opacity-15 bg-[#FFFFFF] text-custom-light placeholder:text-custom-gray text-[12px]"
                        placeholder="First Name"
                        {...field}
                        leftIcon={<UserAddOutlined />}
                      />
                    </FormControl>
                    <FormMessage className="text-[12px]" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem className="w-[50%]">
                    <FormLabel className="text-[12px] text-custom-gray">
                      Last Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="border-none onFocus-none onBlur-none bg-opacity-15 bg-[#FFFFFF] text-custom-light placeholder:text-custom-gray text-[12px]"
                        placeholder="Last Name"
                        {...field}
                        leftIcon={<UserAddOutlined />}
                      />
                    </FormControl>
                    <FormMessage className="text-[12px]" />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[12px] text-custom-gray">
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="border-none onFocus-none onBlur-none bg-opacity-15 bg-[#FFFFFF] text-custom-light placeholder:text-custom-gray text-[12px]"
                      placeholder="email"
                      {...field}
                      leftIcon={<MailOutlined />}
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
                  <FormLabel className="text-[12px] text-custom-gray">
                    Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      type={showPassword ? "text" : "password"}
                      className="border-none onFocus-none onBlur-none bg-opacity-15 bg-[#FFFFFF] text-custom-light placeholder:text-custom-gray text-[12px]"
                      placeholder="password"
                      {...field}
                      leftIcon={<LockOutlined />}
                      rightIcon={
                        showPassword ? <EyeInvisibleFilled /> : <EyeFilled />
                      }
                      onRightClick={handleShowPassword}
                    />
                  </FormControl>
                  <FormDescription className="text-[12px]">
                    Minimum length is 8 characters.
                  </FormDescription>
                  <FormMessage className="text-[12px]" />
                </FormItem>
              )}
            />

            <Button
              className="bg-custom-green-oil hover:bg-custom-green-light text-custom-green-night hover:text-custom-light"
              type="submit"
            >
              {" "}
              {isLoading ? <Spinner /> : "Sign Up"}
            </Button>
          </form>
        </div>
        <div
          style={{ background: "url('/Dots.svg')" }}
          className="w-full bg-no-repeat bg-cover bg-center rounded-b-xl"
        >
          <div className="text-xs text-custom-gray flex items-center justify-center flex-col gap-4 px-8 py-4">
            <p>
              By creating an account, you agree to the
              <Link
                href="#"
                className="text-custom-slate font-semibold underline underline-offset-2"
              >
                Terms of Service
              </Link>
              . We'll occasionally send you account-related emails.
            </p>
            <p>
              Already have an account?{" "}
              <Link href="/signin" className="text-custom-green-oil">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Form>
  );
}

export default SignUp;

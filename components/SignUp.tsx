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
import { SignUpformSchema } from "@/lib/zodSchema";
import { DEFAULT_REGISTER_REDIRECT } from "@/routes";
import Link from "next/link";
import Facebook from "./svg/Facebook";
import Google from "./svg/Google";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);

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
      signIn(provider, { callbackUrl: DEFAULT_REGISTER_REDIRECT });
    } catch (error) {
      console.error("Error signing in with social provider:", error);
    }
  };

  // 2. Define a submit handler.
  const onSubmit = async (values: z.infer<typeof SignUpformSchema>) => {
    try {
      const result = await signIn("credentials", {
        ...values,
        redirect: false,
        callbackUrl: DEFAULT_REGISTER_REDIRECT,
      });
      if (result?.error) {
        console.error("Error signing in with credentials:", result.error);
      } else {
        console.log("Successfully signed in with credentials:", result);
        form.reset();
      }
    } catch (error) {
      console.error("Error signing in with credentials:", error);
    }
    // console.log(values);
  };
  return (
    <Form {...form}>
      <div className="w-[100%] flex flex-col justify-center items-center bg-custom-green-standard bg-opacity-15 rounded-xl">
        <div className=" w-full flex flex-col justify-center items-center px-8 pt-8">
          <div className="w-full flex flex-col gap-4 justify-center items-center">
            <h3 className="text-custom-slate text-sm tracking-wide">
              Register With:
            </h3>
            <div className="flex gap-4 w-full tracking-wide">
              <Button
                className="w-[50%] flex md:gap-4 gap-2 bg-opacity-15 hover:bg-custom-green-light bg-[#FFFFFF] text-custom-light"
                type="submit"
                onClick={() => handleSignUpSocial("google")}
              >
                <Google />
                <p className="md:text-sm text-xs">Google</p>
              </Button>
              <Button
                className="w-[50%] flex md:gap-4 gap-2 bg-opacity-15 hover:bg-custom-green-light bg-[#FFFFFF] text-custom-light"
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
              Sign Up
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

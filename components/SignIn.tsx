"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useWatch } from "react-hook-form";
import { z } from "zod";
import { signIn } from "next-auth/react";
// import { Button } from "antd";

import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

// If consider using server component for authentication
import { loginWithGoogle } from "@/actions/login";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { SignInformSchema } from "@/lib/zodSchema";
import Facebook from "./svg/Facebook";
import Google from "./svg/Google";

function SignIn() {
  const router = useRouter();
  // 1. Define your form.
  const form = useForm<z.infer<typeof SignInformSchema>>({
    resolver: zodResolver(SignInformSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const handleLoginWithSocial = async(provider: "google" | "facebook") => {
    try {
      signIn(provider,
        { callbackUrl: DEFAULT_LOGIN_REDIRECT}
      );
    } catch (error) {
      console.error("Error loging in with social provider:", error);
    }
  }

  // 2. Define a submit handler.
  const onSubmit = async (values: z.infer<typeof SignInformSchema>) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    try {
      const result = await signIn("credentials", {
        ...values,
        redirect: false,
        callbackUrl: DEFAULT_LOGIN_REDIRECT
      });
      if (result?.error) {
        console.error("Error loging in with credentials", result.error)
      } else {
        console.log("Successfully loged in with credentials", result);
        form.reset();
      }
    } catch (error) {
      console.error("Error loging in with credentials", error)
      
    }
    const { email, password, rememberMe } = values;
    console.log(values);
  }

   // Use useWatch to watch the value of the "name" field
  // const nameValue = useWatch({
  //   control,
  //   name: "name",
  // });
  
  // const handleGoogleSignIn = (provider: "google") => {
  // if ("google") {
  //   loginWithGoogle()
  // }
  // }
  return (
    <Form {...form}>
      <div className="w-full flex flex-col justify-center items-center px-4 md:px-8 py-8 bg-custom-green-standard bg-opacity-15 rounded-xl">
        <div className="w-full flex flex-col justify-between items-center">
          <div className="w-full flex items-center justify-center gap-3 pb-4">
            <Button
              className="w-full flex gap-4 bg-opacity-15 hover:bg-custom-green-light bg-[#FFFFFF] text-custom-light"
              onClick={() => handleLoginWithSocial("google")}
            >
              <Google />
              Google
            </Button>
            <Button
                className=" w-full flex gap-4 bg-opacity-15 hover:bg-custom-green-light bg-[#FFFFFF] text-custom-light"
                // type="submit"
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
                  <FormLabel className="text-base text-custom-gray mt-2">
                    Username or Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="border-none onFocus-none onBlur-none bg-opacity-15 bg-[#FFFFFF] text-custom-light placeholder:text-custom-gray text-[12px]"
                      placeholder="username or email"
                      {...field}
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
                    <FormLabel className="text-base text-custom-gray">
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
                      type="password"
                      className="border-none onFocus-none onBlur-none bg-opacity-15 bg-[#FFFFFF] text-custom-light placeholder:text-custom-gray text-[12px]"
                      placeholder="000000"
                      {...field}
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
                  <FormLabel className="flex items-center pb-2 text-sm text-custom-gray">
                    Remember Me
                  </FormLabel>
                </FormItem>
              )}
            />
            <Button
              className="text-base  bg-custom-green-oil hover:bg-custom-green-light text-custom-green-night hover:text-custom-light"
              type="submit"
            >
              Login
            </Button>
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

          </form>
        </div>
      </div>
    </Form>
  );
}

export default SignIn;

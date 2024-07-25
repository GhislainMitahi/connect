"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { signIn } from "next-auth/react";

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
import Link from "next/link";
import Facebook from "./svg/Facebook";
import Google from "./svg/Google";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

function SignUp() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof SignUpformSchema>>({
    resolver: zodResolver(SignUpformSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
    },
  });

  const handleSignUpSocial = async (provider: "google" | "facebbok") => {
    try {
      
      signIn(provider,
        { callbackUrl: DEFAULT_LOGIN_REDIRECT}
      );
    } catch (error) {
      console.error("Error signing in with social provider:", error);
    }
  }

  // 2. Define a submit handler.
  const onSubmit = async (values: z.infer<typeof SignUpformSchema>) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    try {
      const result = await signIn("credentials", {
        ...values,
        redirect: false,
        callbackUrl: DEFAULT_LOGIN_REDIRECT
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
  }
  return (
    <Form {...form}>
      <div className="flex flex-col h-full xs:w-[600px] justify-center items-center md:bg-custom-green-standard md:bg-opacity-15 md:rounded-xl md:p-6">
        <div className="w-full h-full flex flex-col gap-4 justify-center items-center">
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
            <div className="flex w-full gap-2 pt-5 pb-2">
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
                      />
                    </FormControl>
                    <FormMessage className="text-[12px]" />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="userName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[12px] text-custom-gray">
                    User Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="border-none onFocus-none onBlur-none bg-opacity-15 bg-[#FFFFFF] text-custom-light placeholder:text-custom-gray text-[12px]"
                      placeholder="Username"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-[12px]" />
                </FormItem>
              )}
            />
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
                      placeholder="Email"
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
                  <FormLabel className="text-[12px] text-custom-gray">
                    Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      className="border-none onFocus-none onBlur-none bg-opacity-15 bg-[#FFFFFF] text-custom-light placeholder:text-custom-gray text-[12px]"
                      placeholder="Password"
                      {...field}
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
    </Form>
  );
}

export default SignUp;

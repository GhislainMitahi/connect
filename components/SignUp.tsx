"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { signIn } from "@/auth";

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

  const handleSignUpSocial = () => {
    console.log("clicked")
  }

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof SignUpformSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    form.reset();
    console.log(values);
  }
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
                onClick={handleSignUpSocial}
              >
                <Google />
                <p className="md:text-sm text-xs">Google</p>
              </Button>
              <Button
                className="w-[50%] flex md:gap-4 gap-2 bg-opacity-15 hover:bg-custom-green-light bg-[#FFFFFF] text-custom-light"
                type="submit"
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
                        placeholder="John"
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
                        placeholder="Doe"
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
                      placeholder="John Doe"
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
                      placeholder="joh@example.com"
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
                      placeholder="000000"
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

"use client";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useWatch } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

import { loginWithGoogle } from "@/actions/login";
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
import Link from "next/link";
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

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof SignInformSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const { email, password, rememberMe } = values;
    console.log(values);
    form.reset();
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
      <div className="w-[100%] flex flex-col justify-center items-center bg-custom-green-standard bg-opacity-15 rounded-xl">
        <div className=" w-full flex flex-col justify-center items-center px-8 pt-8">
          <div className="w-full flex flex-col gap-4 justify-center items-center">
            <h3 className="text-custom-slate text-sm tracking-wide">
              Sign in With:
            </h3>
            <div className="flex gap-4 w-full tracking-wide">
              <Link href="/api/auth/signin">
                <Button
                  className="flex gap-4 bg-opacity-15 hover:bg-custom-green-light bg-[#FFFFFF] text-custom-light"
                  type="submit"
                  // onClick={() => onSubmit()}
                >
                  <Google />
                  <p>Google</p>
                </Button>
              </Link>
               <Button
                className="w-[50%] flex gap-4 bg-opacity-15 hover:bg-custom-green-light bg-[#FFFFFF] text-custom-light"
                type="submit"
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
                  <div className="flex justify-between">
                    <FormLabel className="text-[12px] text-custom-gray">
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
                <FormItem className="flex gap-2 items-center">
                  <FormControl className="flex items-center">
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="bg-custom-green-oil"
                    />
                  </FormControl>
                  <FormLabel className="flex items-center pb-2 text-[12px] text-custom-gray">
                    Remember Me
                  </FormLabel>
                </FormItem>
              )}
            />

            <Button
              className=" bg-custom-green-oil hover:bg-custom-green-light text-custom-green-night hover:text-custom-light"
              type="submit"
            >
              Sign In
            </Button>
          </form>
        </div>
        <div
          style={{ background: "url('/Dots.svg')" }}
          className="w-full bg-no-repeat bg-cover bg-center rounded-b-xl"
        >
          <div className="text-xs text-custom-gray flex items-center justify-center flex-col gap-4 px-8 py-4">
            <p>
              Do not have an account?{" "}
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

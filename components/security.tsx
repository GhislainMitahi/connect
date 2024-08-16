import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { message } from "antd";

import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { CustomSession } from "@/app/types/next-auth";
import { raleway } from "@/lib/fonts";
import { manrope } from "@/lib/fonts";
import { Button } from "./ui/button";

import VerifiedIcon from "./svg/verifiedIcon";
import TwoFactorAuth from "./svg/factorAuth";

const twoFactorSchema = z.object({
  code: z.string().min(6, {
    message: "The code must be at least 6 characters long."
  })
})

type TwoFactorFormValues = z.infer<typeof twoFactorSchema>;

const SecurityContent = () => {
  const [session, setSession] = useState<CustomSession | null>(null);
  const { data, status } = useSession();

  useEffect(() => {
    if (status === "authenticated" && data ) {
      setSession(data as CustomSession);
    } else {
      setSession(null);
    }
  }, [data, status]);

  const form = useForm<z.infer<typeof twoFactorSchema>>({
    resolver: zodResolver(twoFactorSchema),
    defaultValues: {
      code: ""
    }
  });

  const handleTwoFactor = (data: TwoFactorFormValues) => {
    console.log(data);

    message.success("Two factor enabled successfully.")
    form.reset()
  }

  return (
    <div className="flex flex-col gap-4 md:gap-8">
      <div className={`rounded-md border-[1px] p-4 md:p-8 md:flex md:justify-between border-[#B5D2CC] border-solid ${raleway.className}`}>
        <div>
          <p className="text-auth-text-color font-semibold text-sm md:text-lg">Email Address</p>
          <p className="text-[#949494] text-xs md:text-base">The email address associated with your account</p>
        </div>
        <div className="mt-3 md:flex md:flex-col items-end">
          <p className="text-auth-text-color font-semibold text-sm">{session?.user.email || "markzuck@mail.com"}</p>
          <div className="flex items-center gap-2">
            <VerifiedIcon />
            <p className="text-[#09941F] font-medium text-xs">Verified</p>
          </div>
        </div>
      </div>
      <div className={`rounded-md border-[1px] p-4 md:p-8 md:flex md:justify-between border-[#B5D2CC] border-solid ${raleway.className}`}>
        <div className="">
          <p className="text-auth-text-color font-semibold text-sm md:text-lg">Password</p>
          <p className="text-[#949494] text-xs md:text-base">Set a unique password to protect your account</p>
        </div>
        <div className="mt-3">
          <div className="flex items-center gap-2">
            <Button className="bg-transparent text-[#929292] border-solid border-[#929292] rounded-sm border-[1px] flex items-center gap-2">Change Password</Button>
          </div>
        </div>
      </div>
      <div className={`rounded-md border-[1px] p-4 md:p-8 md:flex md:justify-between border-[#B5D2CC] border-solid ${raleway.className}`}>
        <div>
          <p className="text-auth-text-color font-semibold text-sm md:text-lg">Two-Factor Authentication</p>
          <span className="text-[#949494] text-xs md:text-base">Disabled</span>
        </div>
        <div className="md:w-[370px]">
          <div className="mt-4 md:flex md:justify-between ">
            <p className={`text-[#949494] text-xs md:text-base mb-2`}>Get verification codes in your email to enable two factor authentication.</p>
            <Button className={`bg-transparent text-[#004a39] font-bold text-xs border-solid border-[#004a39] rounded-sm border-[1px] flex items-center gap-2 ${manrope.className}`}>Send Code</Button>
          </div>
          <div className="flex items-center mt-4 gap-2">
            <TwoFactorAuth width="80" height="14"/>         
            <p className="text-[#949494] text-[13px] md:text-base">Enter the 6-digit verification code sent to that email address associated with your account</p>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleTwoFactor)} className="md:flex items-center gap-3 justify-between">
              <div className="md:w-[70%]">
                <FormField
                  control={form.control}
                  name="code"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input {...field} placeholder="Enter verification code" className="border-[#004a39] text-auth-text-color"/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="mt-5 md:mt-0">
                <Button
                  type="submit"
                  className="bg-[#004a39] text-[#fff] font-bold text-xs border-solid border-[#004a39] rounded-sm border-[1px] flex items-center gap-2">
                    Enable 2FA
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
      <div className={`rounded-md border-[1px] p-4 md:p-8 md:flex md:justify-between border-[#B5D2CC] border-solid ${raleway.className}`}>
        <div>
          <p className="text-auth-text-color font-semibold text-sm md:text-lg">Deactivate my account</p>
          <p className="text-[#949494] md:text-base">This will shut down your account. Your account will be reactivated when you sign in again</p>
        </div>
        <div className="mt-5">
          <Button className="bg-transparent hover:bg-transparent text-auth-text-color font-bold text-xs rounded-sm border-[1px] flex items-center gap-2 capitalize">DEACTIVATE</Button>
        </div>
      </div>
      <div className={`rounded-md border-[1px] p-4 md:p-8 md:flex md:justify-between border-[#B5D2CC] border-solid ${raleway.className}`}>
        <div>
          <p className="text-auth-text-color font-semibold text-sm md:text-lg">Delete my account</p>
          <p className="text-[#949494] md:text-base">This will delete your account. Your account will be permanently deleted in the Circle</p>
        </div>
        <div className="mt-5">
          <Button className="bg-transparent hover:bg-transparent text-[#E71919] font-bold text-xs rounded-sm border-[1px] flex items-center gap-2 capitalize">DELETE</Button>
        </div>
      </div>
    </div>
  );
}
 
export default SecurityContent;

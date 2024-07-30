/** @format */
"use client";
import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useRouter } from "next/navigation";

import ConnectLogo from "@/components/svg/ConnectLogo";

export default function Page() {
  const router = useRouter();
  return (
    <main className="flex flex-col justify-center items-center w-full">
      <div className="md:w-[50%] w-[80%] flex flex-col justify-center items-center">
        <div className="flex flex-col items-center w-full">
          <ConnectLogo />
          <h1 className="text-center text-2xl font-bold">Co:nnect</h1>
        </div>
        <div className="text-center flex flex-col w-full">
          <h1 className="md:text-[1.75em] text-[1.5em] font-medium">
            Email Verification
          </h1>
          <p className="md:text-lg text-sm">
            We have sent a verification code to your email addres. Please enter
            code down bellow👇
          </p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="flex flex-col gap-10 w-full"
          action=""
        >
          <InputOTP maxLength={5} className="w-full">
            <InputOTPGroup className="grid grid-cols-5 px-2 w-full gap-2">
              <InputOTPSlot
                className="rounded-md bg-white w-full text-xl font-semibold"
                index={0}
              />
              <InputOTPSlot
                className="rounded-md bg-white w-full text-xl font-semibold"
                index={1}
              />
              <InputOTPSlot
                className="rounded-md bg-white w-full text-xl font-semibold"
                index={2}
              />
              <InputOTPSlot
                className="rounded-md bg-white w-full text-xl font-semibold"
                index={3}
              />
              <InputOTPSlot
                className="rounded-md bg-white w-full text-xl font-semibold"
                index={4}
              />
            </InputOTPGroup>
          </InputOTP>
          <Button
            onClick={() => {
              router.push("/opt-auth/success");
            }}
            type="submit"
            className=" md:w-[20%] w-[100%] p-3 bg-auth-text-color mx-auto"
          >
            Verify Email
          </Button>
        </form>
      </div>
    </main>
  );
}

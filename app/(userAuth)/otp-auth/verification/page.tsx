"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

import Spinner from "@/components/shareds/Spinner";
import ConnectLogo from "@/components/svg/ConnectLogo";

const EmailVerificationForm = dynamic(
  () => import("../../../../components/EmailVerificationForm"),
  {
    ssr: false,
  }
);

export default function page() {
  return (
    <main className="flex flex-col justify-center items-center w-full">
      <div className="md:w-[50%] w-[80%] flex flex-col justify-center items-center gap-6">
        <div className="flex flex-col items-center w-full">
          <ConnectLogo />
          <h1 className="text-center text-2xl font-bold text-linkColor">
            Co:nnect
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center w-full gap-2">
          <h1 className="md:text-[1.75em] text-[1.5em] font-medium text-linkColor">
            Email Verification
          </h1>
          <p className="md:text-lg text-sm text-linkColor w-[50%] flex justify-center items-center text-center">
            We have sent a verification code to your email address. Please enter
            code down bellow👇
          </p>
        </div>
        <Suspense
          fallback={
            <div className="bg-linkColor flex justify-center items-center w-[20%] h-[20%]">
              <Spinner />
            </div>
          }
        >
          <EmailVerificationForm />
        </Suspense>
      </div>
    </main>
  );
}

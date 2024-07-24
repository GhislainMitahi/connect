/** @format */
"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp";

import ConnectLogo from "@/components/svg/ConnectLogo";

export default function Page() {
    const router = useRouter();
    return (
        <main className='flex flex-col gap-10'>
            <div className="flex flex-col items-center">
                <ConnectLogo />
                <h1 className='text-center text-2xl font-bold'>Co:nnect</h1>
            </div>
            <div className='text-center flex flex-col'>
                <h1 className='text-[1.75em] font-medium'>
                    Email Verification
                </h1>
                <p className='text-lg'>
                    We have sent a verification code to your email addres.
                    Please enter code down bellow👇
                </p>
            </div>

            <form onSubmit={(e)=>{
              e.preventDefault()
            }} className='flex flex-col gap-10' action=''>
                <InputOTP maxLength={5} className='w-full'>
                    <InputOTPGroup className='grid grid-cols-5 px-2 lg:px-6 w-full gap-3'>
                        <InputOTPSlot
                            className='rounded-md py-3 bg-white w-full text-xl font-semibold'
                            index={0}
                        />
                        <InputOTPSlot
                            className='rounded-md py-3 bg-white w-full text-xl font-semibold'
                            index={1}
                        />
                        <InputOTPSlot
                            className='rounded-md py-3 bg-white w-full text-xl font-semibold'
                            index={2}
                        />
                        <InputOTPSlot
                            className='rounded-md py-3 bg-white w-full text-xl font-semibold'
                            index={3}
                        />
                        <InputOTPSlot
                            className='rounded-md py-3 bg-white w-full text-xl font-semibold'
                            index={4}
                        />
                    </InputOTPGroup>
                </InputOTP>

                <Button
                    onClick={() => {
                        router.push("/opt-auth/success");
                    }}
                    className='w-full py-3 bg-auth-text-color mx-auto'
                >
                    Verify Email
                </Button>
            </form>
        </main>
    );
}
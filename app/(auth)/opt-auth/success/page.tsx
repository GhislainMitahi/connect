"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import ok from "@/app/_assets/ok.svg";

export default function Page() {
    const router = useRouter();
    return (
        <main className='flex flex-col gap-10'>
            <div className="flex flex-col gap-4">
                <h1 className='text-center text-2xl font-bold'>Co:nnect</h1>
            <div className='mx-auto'>
                <Image
                    src={ok}
                    alt='ok'
                    width={80}
                    height={80}
                    />
            </div>
            </div>
            <div className='text-center flex flex-col'>
                <h1 className='text-[1.75em] font-medium'>
                    Account created successfully
                </h1>
                <p className='text-lg'>
                    Welcome to start your success journey with connect
                </p>
            </div>

            <div>
                <Button
                    onClick={() => {
                        router.push("/dashboard");
                    }}
                    className='w-full py-3 bg-auth-text-color mx-auto'
                >
                    Let's Start!
                </Button>
            </div>
        </main>
    );
}

"use client";
import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import countryList from "react-select-country-list";
import Select from "react-select";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { OPTformRegister } from "@/lib/zodSchema";


import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ConnectLogo from "@/components/svg/ConnectLogo";

type OPTformRegisterType = z.infer<typeof OPTformRegister>;

export default function Page() {
    const router = useRouter();
    const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
     const countries = useMemo(() => countryList().getData(), []);

    const changeHandler = (value: any) => {
        setSelectedCountry(value);
    };

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors }
    } = useForm<OPTformRegisterType>({
        resolver: zodResolver(OPTformRegister)
    });

    const onSubmit = (data: OPTformRegisterType) => {
        console.log(data);
        router.push("/opt-auth/verification");
    };
  
    return (
        <main className='flex flex-col gap-10'>
            <div className="flex items-center flex-col">
                <ConnectLogo />
                <h1 className='text-center text-2xl font-bold'>Co:nnect</h1>
            </div>
            <div className='text-center flex flex-col'>
                <h1 className='text-[1.75em] font-medium hidden lg:block'>
                    Enter phone Number
                </h1>
                <h1 className='lg:hidden block text-2xl font-semibold'>
                    Add Phone Number
                </h1>
                <p className='text-base hidden lg:block'>
                    Enter Phone number to Verify Account
                </p>
            </div>

            <form
            onSubmit={handleSubmit(onSubmit)}
                className='flex flex-col gap-8'
            >
                <div className='flex flex-col gap-6 lg:gap-8'>
                    <div className='flex flex-col gap-2'>
                        <label className='font-medium text-auth-text-color text-sm'>
                            Country <span className='text-red-500'>*</span>
                        </label>
                        {/* <Input
                            className='outline-none py-3.5 px-6 placeholder:text-auth-text-color placeholder:text-sm focus-visible:ring-0 focus-visible:ring-offset-0'
                            type='text'
                            placeholder='Select country'
                        /> */}
                        <Select options={countries}
                            value={selectedCountry}
                            onChange={(value) => {
                                changeHandler(value)
                                setValue("country", value?.label || "")
                            }}
                        />
                        {errors.country && <span className="text-red-500">{errors.country.message}</span>}
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='font-medium text-auth-text-color text-sm'>
                            Phone Number <span className='text-red-500'>*</span>
                        </label>
                        <Input
                            className='outline-none  py-3.5 px-6 placeholder:text-auth-text-color placeholder:text-sm focus-visible:ring-0 focus-visible:ring-offset-0'
                            type='text'
                            placeholder='Enter Phone Number '
                            {...register("number")}
                        />
                        {errors.number && <span className="text-red-500">{errors.number.message}</span>}
                    </div>
                </div>

                <Button
                type="submit"
                    className='max-w-[210px] w-full py-3 bg-auth-text-color mx-auto'
                >
                    Continue
                </Button>
            </form>
        </main>
    );
}
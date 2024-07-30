"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";
import countryList from "react-select-country-list";
import { z } from "zod";

import { OPTformRegister } from "@/lib/zodSchema";

import ConnectLogo from "@/components/svg/ConnectLogo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type OPTformRegisterType = z.infer<typeof OPTformRegister>;

type CountryData = {
  label: string;
  value: string;
};

export default function Page() {
  const router = useRouter();
  const [selectedCountry, setSelectedCountry] = useState<CountryData | null>(
    null
  );
  const countries = useMemo(() => countryList().getData(), []);

  const changeHandler = (value: CountryData | null) => {
    setSelectedCountry(value);
  };

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<OPTformRegisterType>({
    resolver: zodResolver(OPTformRegister),
  });

  const onSubmit = (data: OPTformRegisterType) => {
    console.log(data);
    router.push("/opt-auth/verification");
  };

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-[40%] flex flex-col gap-2">
        <div className="flex items-center flex-col">
          <ConnectLogo />
          <h1 className="text-center text-2xl font-bold text-wrap">Co:nnect</h1>
        </div>
        <div className="text-center flex flex-col">
          <h1 className="md:text-[1.75em] text-[1rem] font-medium">
            Enter phone Number
          </h1>
          <p className="text-[0.8rem] text-center md:inline-block hidden">
            Enter Phone number to verify account
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-1">
              <label className="font-medium text-auth-text-color text-sm">
                Country <span className="text-red-500">*</span>
              </label>
              <Select
                options={countries}
                value={selectedCountry}
                onChange={(value) => {
                  changeHandler(value);
                  setValue("country", value?.label || "");
                }}
              />
              {errors.country && (
                <span className="text-red-500 text-xs">
                  {errors.country.message}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-medium text-auth-text-color text-sm">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <Input
                className="outline-none  py-3.5 px-6 placeholder:text-auth-text-color placeholder:text-sm focus-visible:ring-0 focus-visible:ring-offset-0"
                type="text"
                placeholder="Enter Phone Number "
                {...register("number")}
              />
              {errors.number && (
                <span className="text-red-500 text-xs">
                  {errors.number.message}
                </span>
              )}
            </div>
          </div>

          <Button
            type="submit"
            className=" md:w-[20%] w-[100%] p-3 bg-auth-text-color mx-auto"
          >
            Continue
          </Button>
        </form>
      </div>
    </div>
  );
}

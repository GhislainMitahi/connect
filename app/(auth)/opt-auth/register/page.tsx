
"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

import ConnectLogo from "@/components/svg/ConnectLogo";

export default function Page() {
    const router = useRouter();
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
                onSubmit={(e) => {
                    e.preventDefault();
                }}
                className='flex flex-col gap-8'
                action=''
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
                        <Select>
                            <SelectTrigger className="outline-none focus-visible:ring-0 focus-visible:ring-offset-0">
                                <SelectValue placeholder="Select a timezone" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                <SelectLabel>North America</SelectLabel>
                                <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
                                <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
                                <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
                                <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
                                <SelectItem value="akst">Alaska Standard Time (AKST)</SelectItem>
                                <SelectItem value="hst">Hawaii Standard Time (HST)</SelectItem>
                                </SelectGroup>
                                <SelectGroup>
                                <SelectLabel>Europe & Africa</SelectLabel>
                                <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
                                <SelectItem value="cet">Central European Time (CET)</SelectItem>
                                <SelectItem value="eet">Eastern European Time (EET)</SelectItem>
                                <SelectItem value="west">
                                    Western European Summer Time (WEST)
                                </SelectItem>
                                <SelectItem value="cat">Central Africa Time (CAT)</SelectItem>
                                <SelectItem value="eat">East Africa Time (EAT)</SelectItem>
                                </SelectGroup>
                                <SelectGroup>
                                <SelectLabel>Asia</SelectLabel>
                                <SelectItem value="msk">Moscow Time (MSK)</SelectItem>
                                <SelectItem value="ist">India Standard Time (IST)</SelectItem>
                                <SelectItem value="cst_china">China Standard Time (CST)</SelectItem>
                                <SelectItem value="jst">Japan Standard Time (JST)</SelectItem>
                                <SelectItem value="kst">Korea Standard Time (KST)</SelectItem>
                                <SelectItem value="ist_indonesia">
                                    Indonesia Central Standard Time (WITA)
                                </SelectItem>
                                </SelectGroup>
                                <SelectGroup>
                                <SelectLabel>Australia & Pacific</SelectLabel>
                                <SelectItem value="awst">
                                    Australian Western Standard Time (AWST)
                                </SelectItem>
                                <SelectItem value="acst">
                                    Australian Central Standard Time (ACST)
                                </SelectItem>
                                <SelectItem value="aest">
                                    Australian Eastern Standard Time (AEST)
                                </SelectItem>
                                <SelectItem value="nzst">New Zealand Standard Time (NZST)</SelectItem>
                                <SelectItem value="fjt">Fiji Time (FJT)</SelectItem>
                                </SelectGroup>
                                <SelectGroup>
                                <SelectLabel>South America</SelectLabel>
                                <SelectItem value="art">Argentina Time (ART)</SelectItem>
                                <SelectItem value="bot">Bolivia Time (BOT)</SelectItem>
                                <SelectItem value="brt">Brasilia Time (BRT)</SelectItem>
                                <SelectItem value="clt">Chile Standard Time (CLT)</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='font-medium text-auth-text-color text-sm'>
                            Phone Number <span className='text-red-500'>*</span>
                        </label>
                        <Input
                            className='outline-none  py-3.5 px-6 placeholder:text-auth-text-color placeholder:text-sm focus-visible:ring-0 focus-visible:ring-offset-0'
                            type='text'
                            placeholder='Enter Phone Number '
                        />
                    </div>
                </div>

                <Button
                    onClick={() => {
                        router.push("/opt-auth/verification");
                    }}
                    className='max-w-[210px] w-full py-3 bg-auth-text-color mx-auto'
                >
                    Continue
                </Button>
            </form>
        </main>
    );
}
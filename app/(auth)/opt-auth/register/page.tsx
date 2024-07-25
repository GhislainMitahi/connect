
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

    const timezones = [
  { label: "North America", items: [
    { value: "est", text: "Eastern Standard Time (EST)" },
    { value: "cst", text: "Central Standard Time (CST)" },
    { value: "mst", text: "Mountain Standard Time (MST)" },
    { value: "pst", text: "Pacific Standard Time (PST)" },
    { value: "akst", text: "Alaska Standard Time (AKST)" },
    { value: "hst", text: "Hawaii Standard Time (HST)" }
  ]},
  { label: "Europe & Africa", items: [
    { value: "gmt", text: "Greenwich Mean Time (GMT)" },
    { value: "cet", text: "Central European Time (CET)" },
    { value: "eet", text: "Eastern European Time (EET)" },
    { value: "west", text: "Western European Summer Time (WEST)" },
    { value: "cat", text: "Central Africa Time (CAT)" },
    { value: "eat", text: "East Africa Time (EAT)" }
  ]},
  { label: "Asia", items: [
    { value: "msk", text: "Moscow Time (MSK)" },
    { value: "ist", text: "India Standard Time (IST)" },
    { value: "cst_china", text: "China Standard Time (CST)" },
    { value: "jst", text: "Japan Standard Time (JST)" },
    { value: "kst", text: "Korea Standard Time (KST)" },
    { value: "ist_indonesia", text: "Indonesia Central Standard Time (WITA)" }
  ]},
  { label: "Australia & Pacific", items: [
    { value: "awst", text: "Australian Western Standard Time (AWST)" },
    { value: "acst", text: "Australian Central Standard Time (ACST)" },
    { value: "aest", text: "Australian Eastern Standard Time (AEST)" },
    { value: "nzst", text: "New Zealand Standard Time (NZST)" },
    { value: "fjt", text: "Fiji Time (FJT)" }
  ]},
  { label: "South America", items: [
    { value: "art", text: "Argentina Time (ART)" },
    { value: "bot", text: "Bolivia Time (BOT)" },
    { value: "brt", text: "Brasilia Time (BRT)" },
    { value: "clt", text: "Chile Standard Time (CLT)" }
  ]}
];
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
                                {timezones.map((group) => (
                                <SelectGroup key={group.label}>
                                    <SelectLabel>{group.label}</SelectLabel>
                                    {group.items.map((item) => (
                                    <SelectItem key={item.value} value={item.value}>
                                        {item.text}
                                    </SelectItem>
                                    ))}
                                </SelectGroup>
                                ))}
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
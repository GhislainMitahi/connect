"use client";
import { useRouter } from "next/navigation";
import { abeezee } from "@/lib/fonts";

import { Divider, Avatar, Button } from "antd";

const GetStarted = () => {
  const router = useRouter();

  return (
    <div className="w-[739px] h-[230px] bg-sidebarcolor rounded-2xl p-3">
      <div className="flex justify-between">
        <h1 className="text-[#004A39] font-medium text-base">Let's get you started</h1>
        <div className="text-xs text-[#6D8661] flex items-center gap-2">
          <p>VISION is Live</p>
          <p className="w-[15px] h-[15px] bg-greenLight rounded-[50%]"></p>
        </div>
      </div>
      <Divider className="my-3"/>
      <div className="flex flex-col justify-center items-center gap-5">
        <div className="flex gap-4">
          <Avatar className="w-[60px] h-[60px]"/>
          <p className={`w-[532px] text-sm leading-6 font-semibold ${abeezee.className}`}>
            Hi Alfred! I'm Vision, your Content Performance Analyst. Let's get started by connecting your social media accounts so I can assess your current content performance.
          </p>
        </div>
        <Button
          className={`text-[#004A39] ${abeezee.className}`}
          onClick={() => router.push("/connections")}
        >
          Connect
        </Button>
      </div>
    </div>
  );
}
 
export default GetStarted;

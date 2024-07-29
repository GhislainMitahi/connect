"use client";

import { Input } from "antd";
import { ArrowLeftOutlined, ArrowRightOutlined, XOutlined } from "@ant-design/icons";
import ConnectLogo from "@/components/svg/ConnectLogo";

const TwitterModal = () => {
  return (
    <div className="py-6">
      <div className="flex items-center justify-center gap-2 mb-4">
        <div className="flex items-center justify-center h-10 w-10 bg-greenLight rounded-lg">
          <XOutlined  className="text-2xl" color="#000"/>
        </div>
        <div className="flex flex-col">
          <ArrowLeftOutlined className="text-xs"/>
          <ArrowRightOutlined className="text-xs"/>
        </div>
        <ConnectLogo />
      </div>
      <h1 className="text-center font-semibold mb-1">Connect X (formerly Twitter) to the Co:nnect Plateform</h1>
      <p className="text-center">A Buy Now Pay Later payment method in the UK, France, Spain</p>

      <div className="mt-6">
        <label htmlFor="username">
          Username
        </label>
        <Input
          placeholder="@username"
          id="username"
          name="username"
          className="bg-sidehover focus:bg-sidehover hover:bg-sidehover"
        />
      </div>
    </div>
  );
}
 
export default TwitterModal;
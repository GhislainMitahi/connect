"use client";
import { Input } from "antd";
import { ArrowLeftOutlined, ArrowRightOutlined, InstagramFilled } from "@ant-design/icons";
import ConnectLogo from "@/components/svg/ConnectLogo";


interface SocialModalProps {
  connectButton?: React.ReactNode;
  cancelButton?: React.ReactNode;
  icon: React.ReactNode;
  plateformName: string;
  btnText: string;
  btnColor: string;
};

const PlateformModal: React.FC<SocialModalProps> = ({ icon, connectButton, cancelButton, btnText, btnColor, plateformName }) => {
  return (
    <div className="py-6">
      <div className="flex items-center justify-center gap-2 mb-4">
        <div className="flex items-center justify-center h-10 w-10 bg-greenLight rounded-lg">
          {/* <InstagramFilled  className="text-2xl" color="#000"/> */}
          {icon}
        </div>
        <div className="flex flex-col">
          <ArrowLeftOutlined className="text-xs"/>
          <ArrowRightOutlined className="text-xs"/>
        </div>
        <ConnectLogo width="40" height="40" />
      </div>
      <h1 className="text-center text-[#004A39] text-xl font-semibold mb-1">Connect {plateformName} to Co:nnect's Vision</h1>
      <p className="text-center text-[#004A39] text-[13px] my-3">Elevate your social media game by seamlessly connecting your Instagram account to Co-nnect.</p>

      <div className="mt-6">
        <label htmlFor="username" className="text-[#004A39]">
          Username
        </label>
        <Input
          placeholder="@username"
          id="username"
          name="username"
          className="bg-sidehover focus:bg-sidehover hover:bg-sidehover"
        />
      </div>
      <div className="flex justify-end gap-2 mt-6">
        {cancelButton}
        {connectButton}
      </div>
    </div>
  );
}
 
export default PlateformModal;
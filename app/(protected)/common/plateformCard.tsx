import React from "react";
import { Button } from "antd";

interface PlatformCardProps {
  platformName: string;
  platformLogo: React.ReactNode;
  buttonText: string;
  onButtonClick: () => void;
  isSelected: boolean;
  onSelect: () => void;
}

const PlatformCard: React.FC<PlatformCardProps> = ({
  platformName,
  platformLogo,
  buttonText,
  onButtonClick,
  isSelected,
  onSelect,
}) => {
  return (
    <div
      className={`w-40 h-40 bg-white flex flex-col items-center justify-center border-2 rounded-lg cursor-pointer ${
        isSelected ? "border-green-500" : "border-gray-300"
      }`}
      onClick={onSelect}
    >
      <div className={`${isSelected ? "bg-[#BBFB00]" : "bg-[#c8e3ad] opacity-80"} p-2 rounded-lg`}>
        {platformLogo}
      </div>
      <p className="text-sm text-[#004A39] my-3">{platformName}</p>
      <Button
        onClick={onButtonClick}
        disabled={buttonText === "Coming soon"}
        className={`${isSelected ? "bg-[#BBFB00]" : "bg-[#c8e3ad]"} `}
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default PlatformCard;

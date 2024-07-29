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
      className={`w-40 h-40 flex flex-col items-center justify-center border-2 rounded-lg cursor-pointer ${
        isSelected ? "border-green-500" : "border-gray-300"
      }`}
      onClick={onSelect}
    >
      {platformLogo}
      <p>{platformName}</p>
      <Button onClick={onButtonClick} disabled={buttonText === "Coming soon"}>{buttonText}</Button>
    </div>
  );
};

export default PlatformCard;

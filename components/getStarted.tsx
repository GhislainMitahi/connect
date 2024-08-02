"use client";
import { abeezee } from "@/lib/fonts";
import {
  InstagramOutlined,
  TikTokOutlined,
  XOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Divider } from "antd";
import { useState } from "react";

import PlateformModal from "./platefomModal";
import PlatformCard from "./plateformCard";

const socialMediaPlatforms = [
  {
    name: "Instagram",
    logo: <InstagramOutlined className="text-3xl" />,
    buttonText: "Connect",
  },
  {
    name: "TikTok",
    logo: <TikTokOutlined className="text-3xl" />,
    buttonText: "Coming Soon",
  },
  {
    name: "YouTube",
    logo: <YoutubeOutlined className="text-3xl" />,
    buttonText: "Coming Soon",
  },
  {
    name: "Twitter",
    logo: <XOutlined className="text-3xl" />,
    buttonText: "Coming Soon",
  },
];

const GetStarted = () => {
  const [showConnections, setShowConnections] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(
    "Instagram"
  );
  const [isConnected, setIsConnected] = useState(false);

  const handleConnectClick = (platform: string) => {
    setSelectedPlatform(platform);
    setIsConnected(true);
  };

  const handlePlatformSelect = (platform: string) => {
    setSelectedPlatform(platform);
  };

  const renderModal = () => {
    switch (selectedPlatform) {
      case "Instagram":
        return (
          <PlateformModal
            icon={<InstagramOutlined className="text-3xl" />}
            plateformName="Instagram"
            btnColor=""
            btnText=""
            cancelButton={
              <Button type="default" className="text-[#004A39] bg-[#C8E3AD]">
                Cancel
              </Button>
            }
            connectButton={
              <Button type="primary" className="bg-[#004A39] text-[#BBFB00]">
                Connect
              </Button>
            }
          />
        );
      case "TikTok":
        return (
          <PlateformModal
            icon={<TikTokOutlined className="text-3xl" />}
            plateformName="TikTok"
            btnColor=""
            btnText=""
          />
        );
      case "YouTube":
        return (
          <PlateformModal
            icon={<TikTokOutlined className="text-3xl" />}
            plateformName="TikTok"
            btnColor=""
            btnText=""
          />
        );
      case "Twitter":
        return (
          <PlateformModal
            icon={<TikTokOutlined className="text-3xl" />}
            plateformName="TikTok"
            btnColor=""
            btnText=""
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full md:max-w-[739px] h-auto bg-sidebarcolor rounded-2xl p-3">
      {isConnected ? (
        <div className="w-[80%] m-auto">{renderModal()}</div>
      ) : showConnections ? (
        <div className="flex flex-col items-center justify-center p-5">
          <h2 className="text-center md:text-left text-base text-[#004A39] font-semibold mb-5">
            Select your default Co:nnection
          </h2>
          <div className="flex flex-col md:grid md:grid-cols-2 gap-8 mb-5 px-12">
            {socialMediaPlatforms.map((platform) => (
              <PlatformCard
                key={platform.name}
                platformName={platform.name}
                platformLogo={platform.logo}
                buttonText={platform.buttonText}
                onButtonClick={() =>
                  platform.name === "Instagram" &&
                  handleConnectClick(platform.name)
                }
                isSelected={selectedPlatform === platform.name}
                onSelect={() => handlePlatformSelect(platform.name)}
              />
            ))}
          </div>
        </div>
      ) : (
        <div>
          <div className="flex justify-between">
            <h1 className="text-[#004A39] font-medium text-base">
              Let's get you started
            </h1>
            <div className="text-xs text-[#6D8661] flex items-center gap-2">
              <p>VISION is Live</p>
              <p className="w-[15px] h-[15px] bg-greenLight rounded-[50%]"></p>
            </div>
          </div>
          <Divider className="my-3" />
          <div className="flex flex-col justify-center items-center gap-5">
            <div className="flex gap-4">
              <Avatar className="w-[40px] h-[40px] md:w-[60px] md:h-[60px]" />
              <p
                className={`w-full md:w-[532px] text-sm leading-6 font-semibold text-[#004A39] ${abeezee.className}`}
              >
                Hi Alfred! I'm Vision, your Content Performance Analyst. Let's
                get started by connecting your social media accounts so I can
                assess your current content performance.
              </p>
            </div>
            <Button
              className={`text-[#004A39] ${abeezee.className}`}
              onClick={() => setShowConnections(true)}
            >
              Co:nnections
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GetStarted;

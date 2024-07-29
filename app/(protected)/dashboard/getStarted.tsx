"use client";
import { useState } from "react";
import { abeezee } from "@/lib/fonts";
import { Divider, Avatar, Button } from "antd";
import { InstagramOutlined, XOutlined, YoutubeOutlined, TikTokOutlined } from "@ant-design/icons";

import PlatformCard from "./plateformCard";
import InstagramModal from "../connections/modals/instagram";
import TikTokModal from "../connections/modals/tiktok";
import YoutubeModal from "../connections/modals/youtube";
import TwitterModal from "../connections/modals/twitter";

const socialMediaPlatforms = [
  { name: "Instagram", logo: <InstagramOutlined />, buttonText: "Connect" },
  { name: "TikTok", logo: <TikTokOutlined />, buttonText: "Coming Soon" },
  { name: "YouTube", logo: <YoutubeOutlined />, buttonText: "Coming Soon" },
  { name: "Twitter", logo: <XOutlined />, buttonText: "Coming Soon" },
];

const GetStarted = () => {
  const [showConnections, setShowConnections] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);
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
        return <InstagramModal
        cancelButton={<Button type="default">Cancel</Button>}
        connectButton={<Button type="primary">Connect</Button>}
        />
      case "TikTok":
        return <TikTokModal />;
      case "YouTube":
        return <YoutubeModal />;
      case "Twitter":
        return <TwitterModal />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-[739px] h-auto bg-sidebarcolor rounded-2xl p-3">
      {isConnected ? (
          <div className="">
            { renderModal() }
          </div>
      ) : showConnections ? (
        <div className="flex flex-col items-center justify-center p-5">
          <h2 className="text-base text-[#004A39] font-semibold mb-5">Select your default co:nnection</h2>
          <div className="grid grid-cols-2 gap-4 mb-5">
            {socialMediaPlatforms.map((platform) => (
              <PlatformCard
                key={platform.name}
                platformName={platform.name}
                platformLogo={platform.logo}
                buttonText={platform.buttonText}
                onButtonClick={() => platform.name === "Instagram" && handleConnectClick(platform.name)}
                isSelected={selectedPlatform === platform.name}
                onSelect={() => handlePlatformSelect(platform.name)}
              />
            ))}
          </div>
        </div>
      ) : (
        <div>
          <div className="flex justify-between">
            <h1 className="text-[#004A39] font-medium text-base">Let's get you started</h1>
            <div className="text-xs text-[#6D8661] flex items-center gap-2">
              <p>VISION is Live</p>
              <p className="w-[15px] h-[15px] bg-greenLight rounded-[50%]"></p>
            </div>
          </div>
          <Divider className="my-3" />
          <div className="flex flex-col justify-center items-center gap-5">
            <div className="flex gap-4">
              <Avatar className="w-[60px] h-[60px]" />
              <p className={`w-[532px] text-sm leading-6 font-semibold ${abeezee.className}`}>
                Hi Alfred! I'm Vision, your Content Performance Analyst. Let's get started by connecting your social media accounts so I can assess your current content performance.
              </p>
            </div>
            <Button
              className={`text-[#004A39] ${abeezee.className}`}
              onClick={() => setShowConnections(true)}
            >
              Connect
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GetStarted;

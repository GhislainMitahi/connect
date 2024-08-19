"use client";

import React from "react";
import type { TabsProps } from "antd";
import { Tabs } from "antd";
import { InstagramFilled, TikTokFilled, TwitterOutlined, YoutubeFilled } from "@ant-design/icons";

import DiscoverContent from "../../../../components/discover";
import ConnectionsContent from "@/components/connections";

const onChange = (key: string) => {
  console.log(key);
};


const socialPlatforms = [
  {
    icon: <InstagramFilled className="text-2xl" color="#000" />,
    socialPlatform: "Instagram",
    description:
      "Elevate your social media game by seamlessly connecting your Instagram account to Co-nnect.",
    btnText: "connected",
    btnColor: "#004A39",
    connected: true
  },
  {
    icon: <TwitterOutlined className="text-2xl" color="#000" />,
    socialPlatform: "X (formerly Twitter)",
    description:
      "Boost your social media strategy by seamlessly connecting your X account to Co-nnect.",
    btnText: "coming soon",
    btnColor: "#C8E3AD",
    connected: false
  },
  {
    icon: <TikTokFilled className="text-2xl" color="#000" />,
    socialPlatform: "TikTok",
    description:
      "Elevate your social media strategy by seamlessly connecting your TikTok account to Co-nnect.",
    btnText: "coming soon",
    btnColor: "#c8e3ad",
    connected: false
  },
  {
    icon: <YoutubeFilled className="text-2xl" color="#000" />,
    socialPlatform: "Youtube",
    description:
      "Elevate your social media strategy by seamlessly connecting your YouTube account to Co-nnect.",
    btnText: "coming soon",
    btnColor: "#c8e3ad",
    connected: false
  },
];

const connectedPlateforms = socialPlatforms.filter(platform => platform.connected === true)

const items: TabsProps["items"] = [
  {
    key: "1",
    label: <p className="text-base">Discover</p>,
    children: <DiscoverContent  socialPlateforms = {socialPlatforms}/>,
  },
  {
    key: "2",
    label: <p className="text-base">Your connections</p>,
    children: <ConnectionsContent socialPlateforms={connectedPlateforms}/>,
  },
];

const App: React.FC = () => (
  <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
);


const ConnectionsPage: React.FC = () => {
  return (
    <main>
      <h1 className="font-medium text-3xl text-linkColor mb-3">Co:nnections</h1>
      <div className="">
        <App />
      </div>
    </main>
  );
};

export default ConnectionsPage;

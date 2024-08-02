"use client";

import { AlignLeftOutlined, DownOutlined } from "@ant-design/icons";
import { Radio } from "antd";
import { useState } from "react";

import Bolt from "@/components/svg/Bolt";
import Code from "@/components/svg/code";
import Connection from "@/components/svg/connection";
import ConnectLogo from "@/components/svg/ConnectLogo";
import Deal from "@/components/svg/deal";
import NotificationBell from "@/components/svg/notification";
import SettingIcon from "@/components/svg/setting";
import Theatre from "@/components/svg/Theatre";
import Vision from "@/components/svg/vision";

import LinkIcons from "@/components/link";
import type { RadioChangeEvent } from "antd";
type TabPosition = "left" | "right" | "top" | "bottom";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<TabPosition>("top");

  const handleModeChange = (e: RadioChangeEvent) => {
    setMode(e.target.value);
  };

  const handleToggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div className="md:flex min-h-screen">
      <aside className="w-[250px] hidden h-full bg-sidebarcolor py-8 px-4 md:flex flex-col justify-between fixed overflow-y-auto custom-scrollbar">
        <header className="flex justify-between items-center bg-sidehover py-2 px-4 rounded-lg mb-8">
          <div className="flex text-xs items-center justify-between gap-4 text-linkColor">
            <ConnectLogo />
            <div>
              <p className="text-sm font-medium">Creator</p>
              <p>Alfred Wanjau</p>
            </div>
          </div>
          <DownOutlined className="text-linkColor text-xs" />
        </header>
        <nav className="flex flex-col pb-4 mb-32">
          <LinkIcons url="/theatre" title="Theatre" icon={<Theatre />} />
          <LinkIcons
            url="/vision"
            title="Vision"
            icon={<Vision />}
            inactive={true}
          />
          <LinkIcons
            url="/connections"
            title="Co:nnections"
            icon={<Connection />}
          />
          <LinkIcons
            url="/co-creator"
            title="Co-Creator"
            icon={<Deal />}
            label="Coming soon"
            inactive={true}
          />
        </nav>
        <section className="text-linkColor mb-8">
          <h2 className="mb-1 font-semibold text-xs">Account</h2>
          <div className="flex flex-col gap-1 px-1">
            <LinkIcons
              url="/notifications"
              title="Notifications"
              icon={<NotificationBell />}
            />
            <LinkIcons
              url="/settings"
              title="Settings"
              icon={<SettingIcon />}
            />
          </div>
        </section>
        <section>
          <Radio.Group
            onChange={handleModeChange}
            className="flex items-center justify-center mb-4"
            value={mode}
            optionType="button"
            buttonStyle="solid"
          >
            <Radio.Button value="top">
              <div className="flex items-center gap-2">
                <Code />
                <p>Test</p>
              </div>
            </Radio.Button>
            <Radio.Button value="left">
              <div className="flex items-center gap-2">
                <Bolt />
                <p>Live</p>
              </div>
            </Radio.Button>
          </Radio.Group>
        </section>
      </aside>
      <div>
        <header className="flex fixed w-full md:hidden z-50 justify-between items-center bg-sidebarcolor py-2 px-4 mb-8">
          <div className="flex text-xs items-center justify-between gap-4 text-linkColor">
            <ConnectLogo />
            <div>
              <p className="text-sm font-medium">Creator</p>
              <p>Alfred Wanjau</p>
            </div>
          </div>
          <AlignLeftOutlined
            className="text-linkColor"
            onClick={handleToggleDrawer}
          />
        </header>
        <nav
          className={`md:hidden fixed top-12 z-20 right-0 h-full w-64 bg-sidebarcolor shadow-lg transform transition-transform ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-4">
            <LinkIcons
              url="/theatre"
              title="Theatre"
              icon={<Theatre />}
              onToggle={handleToggleDrawer}
            />
            <LinkIcons
              url="/vision"
              title="Vision"
              icon={<Vision />}
              inactive={true}
            />
            <LinkIcons
              url="/connections"
              title="Co:nnections"
              icon={<Connection />}
            />
            <LinkIcons
              url="/co-creator"
              title="Co-Creator"
              icon={<Deal />}
              label="Coming soon"
              inactive={true}
            />
            <section className="text-linkColor mb-8">
              <h2 className="mb-1 font-semibold text-xs">Account</h2>
              <div className="flex flex-col gap-1 px-1">
                <LinkIcons
                  url="/notifications"
                  title="Notifications"
                  icon={<NotificationBell />}
                />
                <LinkIcons
                  url="/settings"
                  title="Settings"
                  icon={<SettingIcon />}
                />
              </div>
            </section>
            <section>
              <Radio.Group
                onChange={handleModeChange}
                className="flex items-center justify-center mb-4"
                value={mode}
                optionType="button"
                buttonStyle="solid"
              >
                <Radio.Button value="top">
                  <div className="flex items-center gap-2">
                    <Code />
                    <p>Test</p>
                  </div>
                </Radio.Button>
                <Radio.Button value="left">
                  <div className="flex items-center gap-2">
                    <Bolt />
                    <p>Live</p>
                  </div>
                </Radio.Button>
              </Radio.Group>
            </section>
          </div>
        </nav>
      </div>
      <main className="flex-1 pt-20 md:py-10 px-4 md:px-16 bg-dashMain md:ml-[230px]">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;

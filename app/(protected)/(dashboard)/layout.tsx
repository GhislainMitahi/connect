"use client";

import React, { useEffect, useState, useRef } from "react";
import { useWindowSize } from "@/app/hooks/useWindowsSize";
import { poppins } from "@/lib/fonts";
import { AlignLeftOutlined, LeftCircleFilled, RightCircleFilled } from "@ant-design/icons";
import { Avatar, Button, Layout, Menu, Radio, RadioChangeEvent } from "antd";

import { CustomSession } from "@/app/types/next-auth";
import MenuElement from "@/components/MenuElement";
import Profile from "@/components/Profile";
import Bolt from "@/components/svg/Bolt";
import Code from "@/components/svg/code";
import Connection from "@/components/svg/connection";
import Deal from "@/components/svg/deal";
import Home from "@/components/svg/Home";
import NotificationBell from "@/components/svg/notification";
import SettingIcon from "@/components/svg/setting";
import Theatre from "@/components/svg/Theatre";
import Vision from "@/components/svg/vision";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useSession } from "next-auth/react";
import ModalSetting from "@/components/profileModal";

const { Header, Sider, Content } = Layout;

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // local states
  const [collapsed, setCollapsed] = useState(false);
  const [mode, setMode] = useState<TabPosition>("top");
  const { data, status } = useSession();
  const [session, setSession] = useState<CustomSession | null>(null);

  const [mobileSetting, setMobileSetting] = useState(false);

  // Drawer on mobile version
  const [open, setIsOpen] = useState(false);

  // use window size hook
  const { width } = useWindowSize();

  useEffect(() => {
    if (status === "authenticated" && data) {
      setSession(data as CustomSession);
    } else {
      setSession(null);
    }
  }, [data, status]);

  useEffect(() => {
    const collapseMenu = () => {
      if (width <= 768) {
        setCollapsed(true);
      }
    };

    collapseMenu();
  }, [width]);

  //Methods
  const handleModeChange = (e: RadioChangeEvent) => {
    setMode(e.target.value);
  };

  const handleToggleDrawer = () => {
    setIsOpen(!open);
  };

  const menuData: menuItems[] = [
    {
      key: 0,
      title: "Home",
      url: "/dashboard",
      icon: (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Home />
            </TooltipTrigger>
            <TooltipContent className="bg-sidehover border border-slate-500">
              <p className="text-linkColor">Home</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ),
      isCollapsed: collapsed,
    },
    {
      key: 1,
      title: "Theatre",
      url: "/theatre",
      icon: (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Theatre />
            </TooltipTrigger>
            <TooltipContent className="bg-sidehover border border-slate-500">
              <p className="text-linkColor">Theatre</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ),
      isCollapsed: collapsed,
    },
    {
      key: 2,
      title: "Vision",
      url: "/vision",
      icon: (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Vision />
            </TooltipTrigger>
            <TooltipContent className="bg-sidehover border border-slate-500">
              <p className="text-linkColor">Vision</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ),
      isCollapsed: collapsed,
    },
    {
      key: 3,
      title: "Connections",
      url: "/connections",
      icon: (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Connection />
            </TooltipTrigger>
            <TooltipContent className="bg-sidehover border border-slate-500">
              <p className="text-linkColor">Connections</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ),
      isCollapsed: collapsed,
    },
    {
      key: 4,
      title: "Co-Creator",
      url: "/co-creator",
      icon: (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Deal />
            </TooltipTrigger>
            <TooltipContent className="bg-sidehover border border-slate-500">
              <p className="text-linkColor">Co-Creator</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ),
      label: "Soon",
      isCollapsed: collapsed,
      disabled: true,
    },
  ];

  return (
    <main className="h-full">
      <div className="px-4 pr-6 sticky z-10 bg-sidebarcolor top-0 shadow-md flex justify-between items-center md:hidden">
        <div
          className="flex text-xs items-center justify-between gap-2 text-linkColor py-4"
          onClick={() => setMobileSetting(!mobileSetting)}
        >
            <Avatar />
            <div>
              <p className="text-sm font-medium ">Creator</p>
              <p className="">{session?.user?.name}</p>
            </div>
          { mobileSetting && (
              <ModalSetting />
          )}
       </div>
        <AlignLeftOutlined className="text-linkColor" onClick={handleToggleDrawer}/>
      </div>
      <div
          className={`md:hidden fixed top-17 z-10 right-0 pt-2 px-3 h-full w-64 bg-sidebarcolor shadow-lg transform transition-transform ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full pt-4 px-4 overflow-y-auto">
            <div className="flex flex-col gap-2 w-4/5">
              {menuData.map((item, index) => (
                <MenuElement
                  icon={item.icon}
                  title={item.title}
                  url={item.url}
                  key={index}
                  label={item.label}
                  isCollapsed={false}
                  disabled={item.disabled}
                  toggleDrawer={handleToggleDrawer}
                />
              ))}
            </div>
            <div className="mt-14">
              <section className="text-linkColor mb-8">
                <h2 className="mb-1 font-semibold text-xs">Account</h2>
                <div className="flex flex-col gap-1 px-1">
                  <MenuElement
                    icon={
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <NotificationBell />
                          </TooltipTrigger>
                          <TooltipContent className="bg-sidehover border border-slate-500">
                            <p className="text-linkColor">Notification</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    }
                    title="Notifications"
                    url="/notifications"
                    key={989898989898989}
                    isCollapsed={false}
                  />
                  <MenuElement
                    icon={
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <SettingIcon />
                          </TooltipTrigger>
                          <TooltipContent className="bg-sidehover border border-slate-500">
                            <p className="text-linkColor">Settings</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    }
                    title="Settings"
                    url="/settings"
                    key={9009787865}
                    isCollapsed={false}
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
        </div>
      </div>
      <Layout className={`min-h-screen relative`}>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          style={{
            background: "#ecf8cb",
          }}
          className="hidden md:block"
        >
          <div className="h-full bg-sidebarcolor flex flex-col gap-6 px-4 border">
            <div className="flex justify-center items-center">
              <Profile
                image="/english_flag.png"
                isCollapsed={collapsed}
                name={session?.user.name}
              />
            </div>
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              style={{
                background: "#ecf8cb",
                height: "100%",
                border: "none",
              }}
              className={poppins.className}
            >
              <div className="flex flex-col justify-between h-full ">
                <div className="flex flex-col gap-2">
                  {menuData.map((item, index) => (
                    <MenuElement
                      icon={item.icon}
                      title={item.title}
                      url={item.url}
                      key={index}
                      label={item.label}
                      isCollapsed={item.isCollapsed}
                      disabled={item.disabled}
                    />
                  ))}
                </div>
                <div className="">
                  <section className="text-linkColor mb-8">
                    <h2 className="mb-1 font-semibold text-xs">Account</h2>
                    <div className="flex flex-col gap-1 px-1">
                      <MenuElement
                        icon={
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <NotificationBell />
                              </TooltipTrigger>
                              <TooltipContent className="bg-sidehover border border-slate-500">
                                <p className="text-linkColor">Notification</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        }
                        title="Notifications"
                        url="/notifications"
                        key={989898989898989}
                        isCollapsed={collapsed}
                      />
                      <MenuElement
                        icon={
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <SettingIcon />
                              </TooltipTrigger>
                              <TooltipContent className="bg-sidehover border border-slate-500">
                                <p className="text-linkColor">Settings</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        }
                        title="Settings"
                        url="/settings"
                        key={9009787865}
                        isCollapsed={collapsed}
                      />
                    </div>
                  </section>
                  {!collapsed && (
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
                  )}
                </div>
              </div>
            </Menu>
          </div>
        </Sider>
        <Layout style={{ backgroundColor: "#f2ffe9" }}>
          <Header style={{ padding: 0, background: "#f2ffe9" }} className="hidden md:block">
            <div className="hidden md:flex items-center justify-between">
              <Button
                type="text"
                icon={collapsed ? <RightCircleFilled /> : <LeftCircleFilled />}
                onClick={() => {
                  setCollapsed(!collapsed);
                }}
                style={{
                  fontSize: "16px",
                  width: 64,
                  height: 64,
                  color: "#004A39",
                  // visibility: width <= 768 ? "hidden" : "visible",
                }}
              />
            </div>
          </Header>
          <Content
            style={{
              minHeight: 280,
              background: "transparent",
              overflow: "auto",
            }}
            className={`${poppins.className} p-[24px] flex flex-col gap-4 md:ml-10`}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </main>
  );
}

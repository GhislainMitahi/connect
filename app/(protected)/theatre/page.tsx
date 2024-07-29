"use client";
import {useState} from "react";

import { Tabs } from "antd";
import type { TabsProps } from "antd";


// import GetStarted from "./getStarted";
import DashboardLayout from "../dashboard/layout";

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Instagram',
    children: "Instagram",
  },
  {
    key: '2',
    label: 'TikTok',
    children: 'Content of Tab Pane 2',
  },
  {
    key: '3',
    label: 'X (formerly Twitter)',
    children: "Instagram",
  },
  {
    key: '4',
    label: 'Youtube',
    children: 'Content of Tab Pane 2',
  },
];

const App: React.FC = () => <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;

const Theatre = () => {
  return (
    <DashboardLayout>
    <div className="">
      <h1 className="text-2xl text-[#004A39] font-medium">Theatre</h1>
      {/* <GetStarted /> */}
      <div>
        <App />
      </div>
    </div>
    </DashboardLayout>
  );
}
 
export default Theatre;
"use client";

import type { TabsProps } from "antd";
import { Tabs } from "antd";

import React from "react";
import DiscoverContent from "../../../../components/discover";

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Discover",
    children: <DiscoverContent />,
  },
  {
    key: "2",
    label: "Your connections",
    children: "Content of Tab Pane 2",
  },
];

const App: React.FC = () => (
  <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
);

// export default App;
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

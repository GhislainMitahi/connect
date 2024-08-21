"use client";

import VisionUserChat from "@/components/chat";
import GetStarted from "../../../../components/getStarted";

const Dashboard = () => {
  return (
    <main className="flex flex-col items-center justify-center mt-10">
      <div className="hidden">
        <GetStarted />
      </div>
      <VisionUserChat />
    </main>
  );
};

export default Dashboard;

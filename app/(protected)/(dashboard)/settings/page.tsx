"use client";

import { useEffect, useState } from "react";
import { CustomSession } from "@/app/types/next-auth";
import { SettingFilled, CreditCardFilled, DollarCircleFilled } from "@ant-design/icons";
import { useSession } from "next-auth/react";
import MenuElement from "@/components/MenuElement";
import GeneralSettingsContent from "@/components/generalSettings";
import SecurityContent from "@/components/security";
import PaymentContent from "@/components/payment";

import SecurityIcon from "@/components/svg/securityIcon";

import { Tabs } from "antd";
import type { TabsProps } from "antd";

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps["items"] = [
  {
    key: "1",
    label: <p className="md:text-base"><SettingFilled /> General</p>,
    children: <GeneralSettingsContent />,
  },
  {
    key: "2",
    label: <p className="md:text-base"><DollarCircleFilled/><span className="-ml-2">Payment</span><span className="text-[10px] bg-greenLight p-1 rounded-sm">Coming Soon</span></p>,
    children: <PaymentContent />,
  },
  {
    key: "3",
    label: <p className="flex items-center gap-1 md:text-base"><SecurityIcon /> Security</p>,
    children: <SecurityContent />,
  },
];

const App: React.FC = () => (
  <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
);



const SettingsPage = () => {
  const [session, setSession] = useState<CustomSession | null>(null);
  const { data, status } = useSession();

  useEffect(() => {
    if (status === "authenticated" && data) {
      setSession(data as CustomSession);
    } else {
      setSession(null);
    }
  }, [data, status]);

  return (
    <div className="">
      <div className="">
        <App />
      </div>
      <div className="hidden gap-4">
        <div>
          <MenuElement
            title="General Settings"
            icon= {<SettingFilled />}
            url="/generals"
          />
          <MenuElement
            title="Billing"
            icon= {<CreditCardFilled />}
            url="/billing"
          />
          <MenuElement
            title="Payment"
            icon= {<DollarCircleFilled />}
            url="/payment"
            label="Coming Soon"
          />
        </div>
        <div>
          <h1>Content of the settings</h1>
        </div>
        {/* <h1>Settings page</h1>
        <div className="">
          <p>name: {session?.user.name}</p>
          <p>email: {session?.user.email}</p>
          <Button
            onClick={() => signOut()}
            className="bg-sidehover text-green-800 hover:bg-sidehover"
          >
            Sign out
          </Button>
        </div> */}
      </div>

    </div>
  );
};

export default SettingsPage;

"use client";

import antdTheme from "@/app/theme/antd";
import { ConfigProvider } from "antd";
import { SessionProvider } from "next-auth/react";
import { PropsWithChildren } from "react";
import { RecoilRoot } from "recoil";

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <SessionProvider>
      <ConfigProvider theme={antdTheme}>
        <RecoilRoot>{children}</RecoilRoot>
      </ConfigProvider>
    </SessionProvider>
  );
};

export default Providers;

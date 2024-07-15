"use client";

import antdTheme from "@/app/theme/antd";
import { ConfigProvider } from "antd";
import { PropsWithChildren } from "react";
import { RecoilRoot } from "recoil";

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <ConfigProvider theme={antdTheme}>
      <RecoilRoot>{children}</RecoilRoot>
    </ConfigProvider>
  );
};

export default Providers;

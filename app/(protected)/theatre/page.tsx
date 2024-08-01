"use client";
import {useState} from "react";
import { Radio } from "antd";

import DashboardLayout from "../dashboard/layout";
import PlatfromContent from "./components/plateformContent";

import type { RadioChangeEvent } from 'antd';
import { TikTokFilled, XOutlined, YoutubeFilled, InstagramOutlined, TikTokOutlined } from "@ant-design/icons";

const options = [
  { label: 'Instagram', value: 'list'},
  {label: 'TikTok', value: 'tiktok'},
  {label: 'X', value: 'X'},
  {label: 'Youtube', value: 'youtube'}
]

const Theatre = () => {
  const [platfom, setPlatform] = useState<String>('instagram');

  const onChangePlateform = (e: RadioChangeEvent) => {
    setPlatform(e.target.value)
  }

  return (
    <DashboardLayout>
    <div className="h-full">
      <h1 className="text-2xl text-[#004A39] font-medium mb-8">Theatre</h1>
      <div className="mb-16">
        <Radio.Group onChange={onChangePlateform} className="flex items-center rounded-md w-full" value={platfom} optionType="button" buttonStyle="solid">
          <Radio.Button value="instagram" className="block text-center w-1/4 bg-[#ECF8CB] text-[#004A39]">
            <p className="hidden md:block">Instagram</p>
            <InstagramOutlined className="md:hidden"/>
          </Radio.Button>
          <Radio.Button value="tiktok" className="block text-center w-1/4 bg-[#ECF8CB] text-[#004A39]">
            <p className="hidden md:block">TikTok</p>
            <TikTokOutlined className="md:hidden"/>
          </Radio.Button>
          <Radio.Button value="X" className="block text-center w-1/4 bg-[#ECF8CB] text-[#004A39]">
            <p className="hidden md:block">X (formerly Twitter)</p>
            <XOutlined className="md:hidden"/>
          </Radio.Button>
          <Radio.Button value="youtube" className="block text-center w-1/4 bg-[#ECF8CB] text-[#004A39]">
            <p className="hidden md:block">Youtube</p>
            <YoutubeFilled className="md:hidden"/>
          </Radio.Button>
        </Radio.Group>
      </div>
      <div className="flex items-center justify-center h-1/2">
        {
          platfom === 'instagram' && (
            <div></div>
          )
        }
        {
          platfom === 'tiktok' && (
            <div>
              <PlatfromContent icon={<TikTokFilled className="text-[60px] opacity-40"/>} name="TikTok" />
            </div>
          )
        }
        {
          platfom === 'X' && (
            <div>
              <PlatfromContent icon={<XOutlined className="text-[60px] opacity-40"/>} name="X(formerly Twitter)" />
            </div>
          )
        }
        {
          platfom === 'youtube' && (
            <div>
              <PlatfromContent icon={<YoutubeFilled className="text-[60px] opacity-40"/>} name="Youtube" />
            </div>
          )
        }
      </div>
    </div>
    </DashboardLayout>
  );
}
 
export default Theatre;
"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Radio } from 'antd';
import {BellOutlined, ApiOutlined, SettingOutlined, DownOutlined} from "@ant-design/icons";

import ConnectLogo from '@/components/svg/ConnectLogo';
import deal from "@/app/_assets/deal.svg";
import fluent_video from "@/app/_assets/fluent_video.svg";
import mdi from "@/app/_assets/mdi.svg";
import plugs from "@/app/_assets/plugs-connected.svg";
import notification from "@/app/_assets/notification.svg";
import settings from "@/app/_assets/setting.svg";
import bolt from "@/app/_assets/Bolt.svg";
import code from "@/app/_assets/Code.svg";

import type { RadioChangeEvent } from 'antd';
type TabPosition = 'left' | 'right' | 'top' | 'bottom';


const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<TabPosition>('top');

  const handleModeChange = (e: RadioChangeEvent) => {
    setMode(e.target.value);
  }


  return (
    <div className="flex min-h-screen">
      <aside className="w-[275px] bg-sidebarcolor py-8 px-4 flex flex-col justify-between">
        <nav className="flex flex-col pb-4 mb-40">
        <div className='flex justify-between items-center bg-sidehover py-1 px-4 rounded-lg mb-16'>
          <div className='flex items-center justify-between gap-8 text-linkColor'>
            <ConnectLogo />
            <div>
              <p>Creator</p>
              <p>Alfred Wandjau</p>
            </div>
          </div>
          <DownOutlined className='text-linkColor text-xs'/>
        </div>
          <Link href="/dashboard" className="flex items-center gap-4 mb-2 p-2 text-linkColor hover:bg-sidehover rounded font-medium">
            <Image src={mdi} alt='mdi'/>
            Theatre
          </Link>
          <Link href="/profile" className="flex items-center gap-4 mb-2 p-2 text-linkColor hover:bg-sidehover  rounded-lg font-medium">
          <Image src={fluent_video} alt='fluent-video'/>
            Vision
          </Link>
          <Link href="/connections" className="mb-2 p-2 text-linkColor hover:bg-sidehover rounded-lg flex gap-4 font-medium">
            {/* <ApiOutlined /> */}
            <Image src={plugs} alt='plug'/>
            <p>Co:nnections</p>
          </Link>
          <Link href="/profile" className=" flex items-center gap-4 mb-2 p-2 text-linkColor hover:bg-sidehover rounded font-medium">
            <Image src={deal} alt='deal'/>
            Co-Creator
          </Link>
          {/* Add more links as needed */}
        </nav>
        <div className='text-linkColor mb-10'>
          <p className='mb-4 font-semibold'>Account</p>
          <div className='flex flex-col gap-4 px-4'>
            <Link href="" className='flex gap-4 hover:bg-sidehover p-2 rounded-lg font-medium'>
              {/* <BellOutlined /> */}
              <Image src={notification} alt='notifications'/>
              <p>Notifications</p>
            </Link>
            <Link href="/settings" className='flex gap-4 hover:bg-sidehover p-2 rounded-lg font-medium'>
              {/* <SettingOutlined /> */}
              <Image src={settings} alt='settings'/>
              <p>Settings</p>
            </Link>
          </div>
        </div>
        <div>
          <Radio.Group onChange={handleModeChange} className='flex items-center justify-center mb-4' value={mode} optionType='button' buttonStyle='solid'>
            <Radio.Button value="top">
              <div className='flex items-center gap-2'>
              <Image src={code} alt='test'/>
                <p>Test</p>
              </div>
            </Radio.Button>
            <Radio.Button value="left">
            <div className='flex items-center gap-2'>
                <Image src={bolt} alt='live'/>
              <p>Live</p>
            </div>
            </Radio.Button>
          </Radio.Group>
        </div>
      </aside>
      <main className="flex-1 py-10 px-16 bg-dashMain">{children}</main>
    </div>
  );
};

export default DashboardLayout;

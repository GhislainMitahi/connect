"use client";
import { useState } from 'react';
import { Radio } from 'antd';
import {DownOutlined} from "@ant-design/icons";

import ConnectLogo from '@/components/svg/ConnectLogo';
import Theatre from '@/components/svg/Theatre';
import Vision from '@/components/svg/vision';
import Connection from '@/components/svg/connection';
import Deal from '@/components/svg/deal';
import Bolt from "@/components/svg/Bolt";
import Code from '@/components/svg/code';
import NotificationBell from '@/components/svg/notification';
import SettingIcon from '@/components/svg/setting';

import LinkIcons from '../common/link';


import type { RadioChangeEvent } from 'antd';
type TabPosition = 'left' | 'right' | 'top' | 'bottom';




const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<TabPosition>('top');

  const handleModeChange = (e: RadioChangeEvent) => {
    setMode(e.target.value);
  }


  return (
    <div className="flex min-h-screen">
      <aside className="w-[250px] hidden h-full bg-sidebarcolor pt-8 px-4 md:flex flex-col justify-between fixed overflow-y-auto">
        <nav className="flex flex-col pb-4 mb-32">
        <div className='flex justify-between items-center bg-sidehover py-2 px-4 rounded-lg mb-8'>
          <div className='flex text-xs items-center justify-between gap-4 text-linkColor'>
            <ConnectLogo />
            <div>
              <p className='text-sm font-medium '>Creator</p>
              <p className=''>Alfred Wanjau</p>
            </div>
          </div>
          <DownOutlined className='text-linkColor text-xs'/>
        </div>
          <LinkIcons url="/theatre" title="Theatre" icon={<Theatre />} />
          <LinkIcons url="/vision" title="Vision" icon={<Vision />} />
          <LinkIcons url="/connections" title="Co:nnections" icon={<Connection />} />
          <LinkIcons url="/co-creator" title="Co-Creator" icon={<Deal />} label='Coming soon'/>
          {/* Add more links as needed */}
        </nav>
        <div className='text-linkColor mb-8'>
          <p className='mb-1 font-semibold text-xs'>Account</p>
          <div className='flex flex-col gap-1 px-1'>
            <LinkIcons url="/notifications" title="Notifications" icon={<NotificationBell />}/>
            <LinkIcons url="/settings" title="Settings" icon={<SettingIcon />}/>
          </div>
        </div>
        <div>
          <Radio.Group onChange={handleModeChange} className='flex items-center justify-center mb-4' value={mode} optionType='button' buttonStyle='solid'>
            <Radio.Button value="top">
              <div className='flex items-center gap-2'>
              <Code />
                <p>Test</p>
              </div>
            </Radio.Button>
            <Radio.Button value="left">
            <div className='flex items-center gap-2'>
                <Bolt />
              <p>Live</p>
            </div>
            </Radio.Button>
          </Radio.Group>
        </div>
      </aside>
      <main className="flex-1 py-10 px-6 md:px-16 bg-dashMain md:ml-[230px] min-h-screen">{children}</main>
    </div>
  );
};

export default DashboardLayout;

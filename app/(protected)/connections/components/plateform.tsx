"use client";

import { Button, Dropdown, Space } from "antd";
import { CloudUploadOutlined, SettingOutlined } from "@ant-design/icons";
import MoreDots from "@/components/svg/moreDot";

import type { MenuProps } from 'antd';

interface SocialsPlateformProps {
  icon: React.ReactNode;
  socialPlateform: string;
  description: string;
  btnText: string;
  btnColor: string;
  onButtonClick: () => void;
  grid?: boolean
};

const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        Co:nnections Details
      </a>
    ),
  },
  {
    key: '2',
    danger: true,
    label: 'Disconnect',
  },
];


const SocialsPlateform: React.FC<SocialsPlateformProps> = ({ icon, socialPlateform, description, btnText, btnColor, onButtonClick, grid }) => {
  return (
    <div className={`flex bg-[#ECF8CB] md:bg-inherit p-6 md:p-0 rounded-xl flex-col gap-4 ${grid ? 'flex-col items-start' : 'md:flex-row md:justify-between mb-8'}`}>
      <div className={`flex flex-col ${grid ? 'flex-col items-start gap-2' : 'gap-4'}`}>
        <div className='flex items-center justify-center h-12 w-12 bg-greenLight rounded-lg'>{icon}</div>
        <div>
          <h2 className="text-lg font-medium text-[#004A39]">{socialPlateform}</h2>
          <p className="text-sm md:text-xs text-[#004A39]">{description}</p>
        </div>
      </div>
      <div className={`flex ${grid ? 'justify-between w-full mt-2' : 'gap-2 justify-between md:justify-start'} items-center`}>
        <Button
          className={`py-4 px-2 ${btnText === "connected" ? 'text-[#BBFB00]' : ''}`} style={{ backgroundColor: `${btnColor}`}}
          onClick={onButtonClick}
        >
          {btnText}
          {btnText === "connected" ? <SettingOutlined /> : <CloudUploadOutlined />}
        </Button>
         <Dropdown menu={{ items }}>
          <a onClick={(e) => e.preventDefault()}>
            <Space className="">
            {btnText === "connected" ? <MoreDots />  : null}
            </Space>
          </a>
        </Dropdown>
      </div>
    </div>
  )
}

{/* <MoreOutlined className="cursor-pointer text-2xl text-[#004A39]"/> */}

export default SocialsPlateform;

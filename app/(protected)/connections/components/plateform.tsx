"use client";

import { Button, Dropdown, Space } from "antd";
import { MoreOutlined, SmileOutlined } from "@ant-design/icons";

import type { MenuProps } from 'antd';

interface SocialsPlateformProps {
  icon: any;
  socialPlateform: string;
  description: string;
  btnText: string;
  btnColor: string;
  onButtonClick: () => void;
};

const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        View Co:nnections
      </a>
    ),
  },
  // {
  //   key: '2',
  //   label: (
  //     <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
  //       2nd menu item (disabled)
  //     </a>
  //   ),
  //   icon: <SmileOutlined />,
  //   disabled: true,
  // },
  // {
  //   key: '3',
  //   label: (
  //     <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
  //       3rd menu item (disabled)
  //     </a>
  //   ),
  //   disabled: true,
  // },
  {
    key: '4',
    danger: true,
    label: 'Disconnect',
  },
];


const SocialsPlateform: React.FC<SocialsPlateformProps> = ({ icon, socialPlateform, description, btnText, btnColor, onButtonClick }) => {
  return (
    <div className='flex items-center justify-between mb-8'>
      <div className='flex items-center gap-4'>
        <div className='flex items-center justify-center h-12 w-12 bg-greenLight rounded-lg'>{icon}</div>
        <div>
          <h2>{socialPlateform}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button
          className='py-4 px-2' style={{ backgroundColor: `${btnColor}`}}
          onClick={onButtonClick}
        >
          {btnText}
        </Button>
         <Dropdown menu={{ items }}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
            {btnText === "connect" ? <MoreOutlined  className="cursor-pointer"/> : null}
            </Space>
          </a>
        </Dropdown>
      </div>
    </div>
  )
}

export default SocialsPlateform;

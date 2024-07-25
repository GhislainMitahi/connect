"use client";

import { useState } from "react";

import { Button, Divider, Input, Modal } from "antd";
import { AlignLeftOutlined, AppstoreOutlined, InstagramFilled,
  SearchOutlined, TikTokFilled, XOutlined, YoutubeFilled,
} from "@ant-design/icons";

import SocialsPlateform from "./plateform";
import InstagramModal from "../modals/instagram";

const DiscoverContent = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);

  const showModal = (content: React.ReactNode) => {
    setModalContent(content);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setModalContent(null);
  };

  const handleOk = () => {
    console.log("proccess")
    setIsModalVisible(false)
  }


  return (
    <div>
      <div className='flex justify-between items-center gap-4 mb-16 mt-4'>
        <Input size='large' prefix={<SearchOutlined />} placeholder='Search connections'
          className='bg-sidehover focus:bg-sidehover h-10 focus:outline-none focus:ring-2 hover:bg-sidehover active:bg-sidehover'
        />
        <div className='flex items-center gap-4 h-10 rounded-md px-3 bg-sidehover'>
          <AlignLeftOutlined />
          <AppstoreOutlined />
        </div>
      </div>
      {/* The socials plateform handles */}
      <SocialsPlateform  icon={<InstagramFilled className='text-2xl' color='#000' />} socialPlateform="Instagram"
        description='Elevate your social media game by seamlessly connecting your Instagram account to Co-nnect.'
        btnText='connect' btnColor='#bbfb00'
        onButtonClick={() => showModal(<InstagramModal />)}
      />
      <Divider />
      <SocialsPlateform  icon={<XOutlined className='text-2xl' color='#000'/>} socialPlateform="X (formerly Twitter)"
        description='Boost your social media strategy by seamlessly connecting your X account to Co-nnect.'
        btnText='coming soon' btnColor='#C8E3AD'
        onButtonClick={() => showModal(<div>X Modal Content</div>)}
      />
      <Divider />
      <SocialsPlateform  icon={<TikTokFilled className='text-2xl' color='#000'/>} socialPlateform="Tik Tok"
        description='Elevate your social media strategy by seamlessly connecting your TikTok account to Co-nnect.'
        btnText='coming soon' btnColor='#c8e3ad'
        onButtonClick={() => showModal(<div>TikTok Modal Content</div>)}
      />
      <Divider />
      <SocialsPlateform  icon={<YoutubeFilled className='text-2xl' color='#000'/>} socialPlateform="Youtube"
        description='Elevate your social media strategy by seamlessly connecting your YouTube account to Co-nnect.'
        btnText='coming soon' btnColor='#c8e3ad'
        onButtonClick={() => showModal(<div>Youtube Modal Content</div>)}
      />
      <Divider />
      <Modal
        title=""
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        {modalContent}
        <div className="flex justify-end gap-4">
          <Button
            onClick={handleCancel}
            className="bg-sidehover"
          >
            Cancel
          </Button>
          <Button
            onClick={handleOk}
            className="bg-green-950 text-green-500"
          >
            Connect
          </Button>
        </div>
      </Modal>
    </div>
  )
};

export default DiscoverContent;

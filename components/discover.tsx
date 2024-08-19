"use client";

import React, { useState } from "react";

import {
  AlignLeftOutlined,
  AppstoreOutlined,
  InstagramFilled,
  SearchOutlined,
  TikTokFilled,
  TwitterOutlined,
  YoutubeFilled,
} from "@ant-design/icons";
import { Button, Divider, Input, Modal, Radio } from "antd";

import PlateformModal from "./platefomModal";
import SocialsPlateform from "./plateform";

import type { RadioChangeEvent } from "antd";

interface DiscoverContentProps {
  socialPlateforms: { [key: string]: any }[];
}

const DiscoverContent: React.FC<DiscoverContentProps> = ({ socialPlateforms }) => {
  const [list, setList] = useState<string>("list");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const showModal = (content: React.ReactNode) => {
    setModalContent(content);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setModalContent(null);
  };

  const handleOk = () => {
    console.log("process");
    setIsModalVisible(false);
  };

  const onChangeList = (e: RadioChangeEvent) => {
    setList(e.target.value);
    console.log(list);
  };

  const filteredPlatforms = socialPlateforms.filter((platform) =>
    platform.socialPlatform.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="flex justify-between items-center gap-4 mb-16 mt-4">
        <Input
          size="large"
          prefix={<SearchOutlined />}
          placeholder="Search connections"
          className="bg-sidehover focus:bg-sidehover h-10 focus:outline-none focus:ring-2 hover:bg-sidehover active:bg-sidehover"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="hidden md:flex items-center gap-4 rounded-md bg-sidehover">
          <Radio.Group
            onChange={onChangeList}
            className="flex items-center"
            value={list}
            optionType="button"
            buttonStyle="solid"
          >
            <Radio.Button value="list">
              <AlignLeftOutlined />
            </Radio.Button>
            <Radio.Button value="grid">
              <AppstoreOutlined />
            </Radio.Button>
          </Radio.Group>
        </div>
      </div>

      {list === "list" ? (
        <div>
          {filteredPlatforms.map((platform, index) => (
            <div key={index}>
              <SocialsPlateform
                icon={platform.icon}
                plateformName={platform.socialPlatform}
                description={platform.description}
                btnText={platform.btnText}
                btnColor={platform.btnColor}
                onButtonClick={() =>
                  showModal(
                    <PlateformModal
                      icon={platform.icon}
                      plateformName={platform.socialPlatform}
                      btnText="connect"
                      btnColor=""
                    />
                  )
                }
              />
              {index < filteredPlatforms.length - 1 && <Divider />}
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-8">
          {filteredPlatforms.map((platform, index) => (
            <div
              key={index}
              className="border border-[#C8E3AD] rounded-[8px] p-4"
            >
              <SocialsPlateform
                icon={platform.icon}
                plateformName={platform.socialPlatform}
                description={platform.description}
                btnText={platform.btnText}
                btnColor={platform.btnColor}
                onButtonClick={() =>
                  showModal(
                    <PlateformModal
                      icon={platform.icon}
                      plateformName={platform.socialPlatform}
                      btnText="connect"
                      btnColor=""
                    />
                  )
                }
                grid={true}
              />
            </div>
          ))}
        </div>
      )}

      <Divider />
      <Modal
        title=""
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={
          <div className="flex justify-end gap-4">
            <Button onClick={handleCancel} className="bg-sidehover">
              Cancel
            </Button>
            <Button onClick={handleOk} className="bg-green-950 text-green-500">
              Connect
            </Button>
          </div>
        }
      >
        <div>{modalContent}</div>
      </Modal>
    </div>
  );
};

export default DiscoverContent;

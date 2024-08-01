"use client";

// import { useState } from "react";

// import { Button, Divider, Input, Modal, Radio } from "antd";
// import { AlignLeftOutlined, AppstoreOutlined, InstagramFilled,
  // SearchOutlined, TikTokFilled, XOutlined, YoutubeFilled,
// } from "@ant-design/icons";

// import SocialsPlateform from "./plateform";
// import PlateformModal from "../../common/platefomModal";

// import type { RadioChangeEvent } from 'antd';

// const options = [
//   { label: 'list', value: 'list' },
//   { label: 'grid', value: 'grid' },
// ]

// const DiscoverContent = () => {
//   const [list, setList] = useState<String>('list');

//   // const [grid, setGrid] = useState('grid');
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const [modalContent, setModalContent] = useState<React.ReactNode>(null);

//   const showModal = (content: React.ReactNode) => {
//     setModalContent(content);
//     setIsModalVisible(true);
//   };

//   const handleCancel = () => {
//     setIsModalVisible(false);
//     setModalContent(null);
//   };

//   const handleOk = () => {
//     console.log("proccess")
//     setIsModalVisible(false)
//   };

//   const onChangeList = (e: RadioChangeEvent) => {
//     setList(e.target.value)
//     console.log(list)
//   }


//   return (
//     <div>
//       <div className='flex justify-between items-center gap-4 mb-16 mt-4'>
//         <Input size='large' prefix={<SearchOutlined />} placeholder='Search connections'
//           className='bg-sidehover focus:bg-sidehover h-10 focus:outline-none focus:ring-2 hover:bg-sidehover active:bg-sidehover'
//         />
//         <div className='hidden md:flex items-center gap-4 rounded-md bg-sidehover'>
//           <Radio.Group onChange={onChangeList} className="flex items-center" value={list} optionType="button" buttonStyle="solid">
//             <Radio.Button value="list">
//               <AlignLeftOutlined />
//             </Radio.Button>
//             <Radio.Button value="grid">
//               <AppstoreOutlined />
//             </Radio.Button>
//           </Radio.Group>
//         </div>
//       </div>
      
//       {list === 'list' ? (
//         <div>
//           <SocialsPlateform 
//             icon={<InstagramFilled className='text-2xl' color='#000' />} 
//             socialPlateform="Instagram"
//             description='Elevate your social media game by seamlessly connecting your Instagram account to Co-nnect.'
//             btnText='connected'
//             btnColor='#004A39'
//             onButtonClick={() => showModal(<PlateformModal icon={<InstagramFilled className="text-2xl" color="#000"/>} plateformName="Instagram" btnText="connect" btnColor=""/>)}
//           />
//           <Divider />
//           <SocialsPlateform 
//             icon={<XOutlined className='text-2xl' color='#000' />} 
//             socialPlateform="X (formerly Twitter)"
//             description='Boost your social media strategy by seamlessly connecting your X account to Co-nnect.'
//             btnText='coming soon' 
//             btnColor='#C8E3AD'
//             onButtonClick={() => showModal(<PlateformModal  icon={<XOutlined className="text-2xl" color="#000"/>} plateformName="X (formerly Twitter)" btnText="connect" btnColor="red"/>)}
//           />
//           <Divider />
//           <SocialsPlateform 
//             icon={<TikTokFilled className='text-2xl' color='#000' />} 
//             socialPlateform="Tik Tok"
//             description='Elevate your social media strategy by seamlessly connecting your TikTok account to Co-nnect.'
//             btnText='coming soon' 
//             btnColor='#c8e3ad'
//             onButtonClick={() => showModal(<PlateformModal  icon={<TikTokFilled className="text-2xl" color="#000"/>} plateformName="TikTok" btnText="connect" btnColor="red"/>)}
//           />
//           <Divider />
//           <SocialsPlateform 
//             icon={<YoutubeFilled className='text-2xl' color='#000' />} 
//             socialPlateform="Youtube"
//             description='Elevate your social media strategy by seamlessly connecting your YouTube account to Co-nnect.'
//             btnText='coming soon' 
//             btnColor='#c8e3ad'
//             onButtonClick={() => showModal(<PlateformModal  icon={<YoutubeFilled className="text-2xl" color="#000"/>} plateformName="Youtube" btnText="connect" btnColor="red"/>)}
//           />
//         </div>
//       ) : (
//         <div className="grid grid-cols-3 gap-8">
//           <div className="border border-[#C8E3AD] rounded-[8px] p-4">
//             <SocialsPlateform 
//               icon={<InstagramFilled className='text-2xl' color='#000' />} 
//               socialPlateform="Instagram"
//               description='Elevate your social media game by seamlessly connecting your Instagram account to Co-nnect.'
//               btnText='connected'
//               btnColor='#004A39'
//               onButtonClick={() => showModal(<PlateformModal icon={<InstagramFilled className="text-2xl" color="#000"/>} plateformName="Instagram" btnText="connect" btnColor=""/>)}
//               grid={true}
//             />
//           </div>
//           <div className="border border-[#C8E3AD] rounded-[8px] p-4">
//             <SocialsPlateform 
//               icon={<XOutlined className='text-2xl' color='#000' />} 
//               socialPlateform="X (formerly Twitter)"
//               description='Boost your social media strategy by seamlessly connecting your X account to Co-nnect.'
//               btnText='coming soon' 
//               btnColor='#C8E3AD'
//               onButtonClick={() => showModal(<PlateformModal  icon={<XOutlined className="text-2xl" color="#000"/>} plateformName="X (formerly Twitter)" btnText="connect" btnColor="red"/>)}
//               grid={true}
//             />
//           </div>
//           <div className="border border-[#C8E3AD] rounded-[8px] p-4">
//             <SocialsPlateform 
//               icon={<TikTokFilled className='text-2xl' color='#000' />} 
//               socialPlateform="Tik Tok"
//               description='Elevate your social media strategy by seamlessly connecting your TikTok account to Co-nnect.'
//               btnText='coming soon' 
//               btnColor='#c8e3ad'
//               onButtonClick={() => showModal(<PlateformModal  icon={<TikTokFilled className="text-2xl" color="#000"/>} plateformName="TikTok" btnText="connect" btnColor="red"/>)}
//               grid={true}
//             />
//           </div>
//           <div className="border border-[#C8E3AD] rounded-[8px] p-4">
//             <SocialsPlateform 
//               icon={<YoutubeFilled className='text-2xl' color='#000' />} 
//               socialPlateform="Youtube"
//               description='Elevate your social media strategy by seamlessly connecting your YouTube account to Co-nnect.'
//               btnText='coming soon' 
//               btnColor='#c8e3ad'
//               onButtonClick={() => showModal(<PlateformModal  icon={<YoutubeFilled className="text-2xl" color="#000"/>} plateformName="Youtube" btnText="connect" btnColor="red"/>)}
//               grid={true}
//             />
//           </div>
//         </div>
//       )}
      
//       <Divider />
//       <Modal
//         title=""
//         open={isModalVisible}
//         onOk={handleOk}
//         onCancel={handleCancel}
//         footer={
//           <div className="flex justify-end gap-4">
//           <Button
//             onClick={handleCancel}
//             className="bg-sidehover"
//           >
//             Cancel
//           </Button>
//           <Button
//             onClick={handleOk}
//             className="bg-green-950 text-green-500"
//           >
//             Connect
//           </Button>
//         </div>
//         }
//       >
//         <div>
//         {modalContent}
//         </div>
//       </Modal>
//     </div>
//   )
// };

// export default DiscoverContent;

"use client";

import { useState } from "react";

import { Button, Divider, Input, Modal, Radio } from "antd";
import {
  AlignLeftOutlined,
  AppstoreOutlined,
  InstagramFilled,
  SearchOutlined,
  TwitterOutlined,
  TikTokFilled,
  YoutubeFilled,
} from "@ant-design/icons";

import SocialsPlateform from "./plateform";
import PlateformModal from "../../common/platefomModal";

import type { RadioChangeEvent } from 'antd';

const options = [
  { label: 'list', value: 'list' },
  { label: 'grid', value: 'grid' },
];

const socialPlatforms = [
  {
    icon: <InstagramFilled className='text-2xl' color='#000' />,
    socialPlatform: "Instagram",
    description: 'Elevate your social media game by seamlessly connecting your Instagram account to Co-nnect.',
    btnText: 'connected',
    btnColor: '#004A39',
  },
  {
    icon: <TwitterOutlined className='text-2xl' color='#000' />,
    socialPlatform: "X (formerly Twitter)",
    description: 'Boost your social media strategy by seamlessly connecting your X account to Co-nnect.',
    btnText: 'coming soon',
    btnColor: '#C8E3AD',
  },
  {
    icon: <TikTokFilled className='text-2xl' color='#000' />,
    socialPlatform: "TikTok",
    description: 'Elevate your social media strategy by seamlessly connecting your TikTok account to Co-nnect.',
    btnText: 'coming soon',
    btnColor: '#c8e3ad',
  },
  {
    icon: <YoutubeFilled className='text-2xl' color='#000' />,
    socialPlatform: "Youtube",
    description: 'Elevate your social media strategy by seamlessly connecting your YouTube account to Co-nnect.',
    btnText: 'coming soon',
    btnColor: '#c8e3ad',
  },
];

const DiscoverContent = () => {
  const [list, setList] = useState<string>('list');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

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

  const filteredPlatforms = socialPlatforms.filter(platform =>
    platform.socialPlatform.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className='flex justify-between items-center gap-4 mb-16 mt-4'>
        <Input
          size='large'
          prefix={<SearchOutlined />}
          placeholder='Search connections'
          className='bg-sidehover focus:bg-sidehover h-10 focus:outline-none focus:ring-2 hover:bg-sidehover active:bg-sidehover'
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        <div className='hidden md:flex items-center gap-4 rounded-md bg-sidehover'>
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

      {list === 'list' ? (
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
            <div key={index} className="border border-[#C8E3AD] rounded-[8px] p-4">
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

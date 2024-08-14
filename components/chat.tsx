import { AudioOutlined, CopyOutlined, PaperClipOutlined, SyncOutlined,
  PictureOutlined, SendOutlined, ShareAltOutlined, EllipsisOutlined
}
  from "@ant-design/icons";
import { Avatar } from "antd";

const VisionUserChat = () => {
  return (
    <div className="w-full flex flex-col items-center md:items-start md:justify-center md:w-[80%] md:mx-auto">
      <div className="bg-sidebarcolor min-h-52 rounded-lg py-6 px-4 my-6">
        <div className="flex justify-between gap-4">
          <Avatar className=""/>
          <div className="flex gap-2">
            <div>
              <p className="text-auth-text-color font-bold text-[13px] ">VISION</p>
              {/* <small>Today 2:45 PM</small> */}
              <p>Thank you your instagram is connected now</p>
              <p>Analyzing ...</p>
              <p>Analysis completed! Here's an overview of your recent performance:</p>
              <ul>
                <li>Engagment rate : 4.5%</li>
                <li>Top performaing Post : Your recent travel blog with 1200 likes and 300 comments</li>
                <li>Audience Demographics: Predominantly aged 18-24 with a strong following from New York and Los Angeles</li>
              </ul>
              <div className="flex mt-4 gap-4">
                <CopyOutlined />
                <SyncOutlined />
                <EllipsisOutlined rotate={90} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-lg py-6 px-4 mb-4">
        <div className="flex justify-between gap-4">
          <Avatar className=""/>
          <div className="flex gap-2">
            <div>
              <p className="text-auth-text-color font-bold text-[13px] ">Alfred Wandjau</p>
              <p>That's helpful. What can I do to improve my engagment?</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-sidebarcolor min-h-52 rounded-lg py-6 px-4 mt-4 mb-2">
        <div className="flex justify-between gap-4">
          <Avatar className=""/>
          <div className="flex gap-2">
            <div>
              <p className="text-auth-text-color font-bold text-[13px] ">VISION</p>
              {/* <small>Today 2:45 PM</small> */}
              <p>Thank you your instagram is connected now</p>
              <p>Analyzing ...</p>
              <p>Analysis completed! Here's an overview of your recent performance:</p>
              <ul>
                <li>Engagment rate : 4.5%</li>
                <li>Top performaing Post : Your recent travel blog with 1200 likes and 300 comments</li>
                <li>Audience Demographics: Predominantly aged 18-24 with a strong following from New York and Los Angeles</li>
              </ul>
              <div className="flex mt-4 gap-4">
                <CopyOutlined />
                <SyncOutlined />
                <EllipsisOutlined rotate={90} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border flex flex-col justify-between border-linkColor min-h-24 w-full rounded-xl p-3 mt-10 md:w-[80%] mx-auto">
        <p className="text-auth-text-color text-sm ">Message VISION</p>
        <p className="opacity-5 min-h-24 bg-custom-green-standard w-full my-1"></p>
        <div className="flex justify-between items-center">
          <div className="flex items-center justify-around gap-2">
            <PaperClipOutlined className="text-lg"/>
            <PictureOutlined className="text-lg"/>
            <AudioOutlined className="text-lg"/>
          </div>
          <div className=" bg-auth-text-color py-1 px-2 text-white rounded-lg">
            <SendOutlined rotate={-45}/>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default VisionUserChat;
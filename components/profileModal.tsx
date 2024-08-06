import { signOut } from "next-auth/react";
import { Avatar, Divider } from "antd";
import { AlignLeftOutlined, UserOutlined, LogoutOutlined } from "@ant-design/icons";

const ModalSetting = () => {
  const handleLogOut = async () => {
     await signOut()
  }
  return (
    <div className="absolute w-[170px] -left-[2px] top-14 py-2 px-3 z-50 bg-sidebarcolor">
      <div className="flex items-center gap-2 py-2">
        <UserOutlined />
        <p className="text-sm">Profile</p>
      </div>
      <Divider className="py-0 my-0"/>
      <div className="flex items-center gap-2 py-2" onClick={handleLogOut}>
        <LogoutOutlined />
        <p className="text-sm">Log Out</p>
      </div>
    </div>
  );
}
 
export default ModalSetting;
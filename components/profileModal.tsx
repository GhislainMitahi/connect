import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Avatar, Divider } from "antd";
import { AlignLeftOutlined, UserOutlined, LogoutOutlined } from "@ant-design/icons";

const ModalSetting = () => {
  const router = useRouter();

  const handleLogOut = async () => {
    await signOut()
  }

  const handleRedirect = (url: string) => {
    return router.push(url)
  }

  return (
    <div className="absolute w-[170px]  left-6 top-16 py-2 px-3 z-50 bg-sidebarcolor">
      <div className="flex items-center gap-3 py-2" onClick={() => handleRedirect("/settings/profile")}>
        <UserOutlined />
        <p className="text-sm">My Profile</p>
      </div>
      <Divider className="py-0 my-0"/>
      <div className="flex items-center gap-3 py-2" onClick={handleLogOut}>
        <LogoutOutlined />
        <p className="text-sm">Sign out</p>
      </div>
    </div>
  );
}
 
export default ModalSetting;
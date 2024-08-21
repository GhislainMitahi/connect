import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { Dropdown, type MenuProps } from "antd";
import { DownOutlined, LogoutOutlined, UserOutlined } from "@ant-design/icons";

import { Avatar } from "@/components/ui/avatar";
import { manrope } from "@/lib/fonts";

const Profile = ({ image, name, isCollapsed }: profilePropsType) => {
  const router = useRouter();

  const HandlerSignOut = async () => {
    await signOut();
  };

  const handleSeeProfile = () => {
    router.push("/settings/profile")
  }

  const items: MenuProps["items"] = [
    {
      label: (
        <div
          className={` custom-dropdown-label cursor-pointer hover:bg-[#516853] rounded-md hover:text-[#BBFB00] py-1 text-[0.75rem] md:text-[0.85rem] font-[400]  flex items-center gap-3 px-1 text-linkColor ${manrope.className}`}
        >
          <UserOutlined /> My Profile
        </div>
      ),
      key: "profile",
      onClick: () => handleSeeProfile(),
    },
    {
      label: (
        <div
          className={` custom-dropdown-label cursor-pointer hover:bg-[#516853] rounded-md hover:text-[#BBFB00] py-1 text-[0.75rem] md:text-[0.85rem] font-[400]  flex items-center gap-3 px-1 text-linkColor ${manrope.className}`}
        >
          <LogoutOutlined /> Sign out
        </div>
      ),
      key: "signout",
      onClick: () => HandlerSignOut(),
    },
  ];

  return (
    <Dropdown
      menu={{ items }}
      trigger={["click"]}
      className={manrope.className}
      overlayClassName="custom-dropdown-menu"
    >
      <div
        className={`${!isCollapsed ? `text-white flex justify-between items-center gap-1 py-2 px-[6px] bg-sidehover rounded-lg mt-4 ${manrope.className}` : "bg-none mt-4"}`}
      >
        <Avatar
          className={`${isCollapsed ? "w-[100%] h-[100%]" : "w-[20%] h-[20%]"}`}
        >
          <Image
            src={image}
            width={500}
            height={500}
            alt={`${name}'s image`}
            className="w-full h-full"
          />
        </Avatar>

        {!isCollapsed && (
          <div className="text-sx font-[300] text-linkColor">
            <p>Creator</p>
            <p className="text-xs font-[200] text-linkColor">{name}</p>
          </div>
        )}
        {!isCollapsed && <DownOutlined className="text-linkColor text-xs" />}
      </div>
    </Dropdown>
  );
};

export default Profile;

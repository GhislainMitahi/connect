import { Dropdown, type MenuProps } from "antd";

import { Avatar } from "@/components/ui/avatar";
import { poppins } from "@/lib/fonts";
import { DownOutlined, LogoutOutlined } from "@ant-design/icons";
import { signOut } from "next-auth/react";
import Image from "next/image";

const Profile = ({ image, name, isCollapsed }: profilePropsType) => {
  const HandlerSignOut = async () => {
    await signOut();
  };

  const items: MenuProps["items"] = [
    {
      label: (
        <div
          className={` custom-dropdown-label text-[0.75rem] md:text-[0.85rem] font-[400]  flex items-center gap-2 px-4 text-linkColor ${poppins.className}`}
        >
          <LogoutOutlined /> Sign out
        </div>
      ),
      key: "signout",
      onClick: () => HandlerSignOut(),
    },
    {
      label: (
        <div
          className={` custom-dropdown-label text-[0.75rem] md:text-[0.85rem] font-[400]  flex items-center gap-2 px-4 text-linkColor ${poppins.className}`}
        >
          <LogoutOutlined /> My Profile
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
      className={poppins.className}
      overlayClassName="custom-dropdown-menu"
    >
      <div
        className={`${!isCollapsed ? `text-white flex justify-between items-center gap-1 py-2 px-[6px] bg-sidehover rounded-lg mt-4 cursor-pointer ${poppins.className}` : "bg-none mt-4 cursor-pointer"}`}
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

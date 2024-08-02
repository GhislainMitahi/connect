import { Avatar } from "@/components/ui/avatar";
import { poppins } from "@/lib/fonts";
import { DownOutlined } from "@ant-design/icons";
import Image from "next/image";

interface propsType {
  image: string;
  name?: string;
  isCollapsed: boolean;
}

const Profile = ({ image, name, isCollapsed }: propsType) => {
  return (
    <div
      className={`${!isCollapsed ? `text-white flex justify-between items-center gap-1 py-2 px-[4px] bg-sidehover rounded-lg mt-4 ${poppins.className}` : "bg-none mt-4"}`}
    >
      <Avatar
        className={`${isCollapsed ? "w-[100%] h-[100%]" : "w-[20%] h-[20%]"}`}
      >
        <Image
          src={image}
          width={500}
          height={500}
          alt="Logo Image championLogoDashboard"
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
  );
};

export default Profile;


import { CloudUploadOutlined } from "@ant-design/icons";
import { Button } from "antd";

interface PlatformContentProps {
  icon: React.ReactNode;
  name: string;
}
const PlatfromContent: React.FC<PlatformContentProps> = ({
  icon, name
}) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="bg-[#C8E3AD] flex item-center justify-center rounded-lg w-[99px] h-[99px]">
        {icon}
      </div>
      <h1 className="text-center text-[#8BA373] text-3xl">{name}</h1>
      <div className="text-center">
        <Button className="bg-[#c8e3ad]">
          Coming soon
          <CloudUploadOutlined />
        </Button>
      </div>
    </div>
  );

}
 
export default PlatfromContent;
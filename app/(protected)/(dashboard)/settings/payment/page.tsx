import { DollarCircleFilled } from "@ant-design/icons";
import PlatfromContent from "@/components/plateformContent";

const Payment = () => {
  return (
    <div>
      <div>
            <PlatfromContent
              icon={<DollarCircleFilled className="text-[60px] opacity-40" />}
              name="TikTok"
            />
          </div>
    </div>
  );
}
 
export default Payment;
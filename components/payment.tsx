import PlatfromContent from "./plateformContent";
import { DollarCircleFilled } from "@ant-design/icons";

const PaymentContent = () => {
  return (
    <div className="flex items-center justify-center h-[300px]">
      <PlatfromContent
        icon={<DollarCircleFilled className="text-[60px] opacity-40" />}
        name="Monetization"
      />
    </div>
  );
}
 
export default PaymentContent;
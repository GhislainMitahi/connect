import ResetPassword from "@/components/ResetPassword";
import Foot from "@/components/shareds/Foot";
import ConnectLogo from "@/components/svg/ConnectLogo";

const page = () => {
  return (
    <div className="w-[50%] flex flex-col gap-4">
      <div className="flex flex-col items-center text-lg tracking-wide justify-center gap-4">
        <ConnectLogo /> <p>Co:nnect</p>
      </div>
      <ResetPassword />
      <Foot />
    </div>
  );
};

export default page;

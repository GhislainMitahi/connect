import Foot from "@/components/shareds/Foot";
import SignIn from "@/components/SignIn";
import ConnectLogo from "@/components/svg/ConnectLogo";

const page = () => {
  return (
    <div className="md:w-1/2 w-[95%] flex flex-col gap-4 justify-center">
      <div className="flex flex-col items-center text-lg tracking-wide justify-center gap-4">
        <ConnectLogo />{" "}
        <p className="text-2xl md:text-[32px] font-medium">Login to Co:nnect</p>
      </div>
      <SignIn />
      <Foot />
    </div>
  );
};

export default page;

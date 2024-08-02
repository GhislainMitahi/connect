import Foot from "@/components/shareds/Foot";
import Spinner from "@/components/shareds/Spinner";
import ConnectLogo from "@/components/svg/ConnectLogo";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const ResetPassword = dynamic(() => import("@/components/ResetPassword"), {
  ssr: false,
});

const page = () => {
  return (
    <div className="w-[50%] flex flex-col gap-4">
      <div className="flex flex-col items-center text-lg tracking-wide justify-center gap-4">
        <ConnectLogo /> <p>Co:nnect</p>
      </div>
      <Suspense
        fallback={
          <div className="bg-linkColor flex justify-center items-center w-[20%] h-[20%]">
            <Spinner />
          </div>
        }
      >
        <ResetPassword />
      </Suspense>
      <Foot />
    </div>
  );
};

export default page;

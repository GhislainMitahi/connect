import Foot from "@/components/shareds/Foot";
import SignIn from "@/components/SignIn";
import ConnectLogo from "@/components/svg/ConnectLogo";

const page = () => {
  return (
    <main
      style={{ backgroundImage: "url('/bg-pattern.svg')" }}
      className="flex  w-full min-h-screen xs:h-screen flex-col items-center justify-center bg-custom-green-night text-custom-light bg-no-repeat bg-cover bg-top"
    >
      <div className=" w-full md:w-[70%] xs:w-[50%] min-h-[100vh] flex items-center justify-center signup-gb px-4 py-6">
        <div className="w-full flex flex-col gap-4 justify-center">
          <div className="flex flex-col items-center text-lg tracking-wide justify-center gap-4">
            <ConnectLogo /> <p>Login to Co:nnect</p>
          </div>
          <SignIn />
          <Foot />
        </div>
      </div>
    </main>
  );
};

export default page;

import Foot from "@/components/shareds/Foot";
import SignIn from "@/components/SignIn";
import ConnectLogo from "@/components/svg/ConnectLogo";

const page = () => {
  return (
    <main
      style={{ backgroundImage: "url('/bg-pattern.svg')" }}
      className="flex min-h-screen flex-col items-center justify-center bg-custom-green-night text-custom-light bg-no-repeat bg-cover bg-top"
    >
      <div className="w-full h-[100vh] flex items-center justify-center signup-gb">
        <div className="w-[50%] flex flex-col gap-4">
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

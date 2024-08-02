import { poppins } from "@/lib/fonts";
import { LogoutOutlined } from "@ant-design/icons";
import { signOut } from "next-auth/react";
import { Button } from "../ui/button";

const SignOut = () => {
  const HandlerSignOut = async () => {
    await signOut();
  };

  return (
    <div className="flex justify-center items-center">
      <Button
        onClick={() => HandlerSignOut()}
        className={`text-[0.75rem] md:text-[0.85rem] bg-sidehover rounded-lg font-[400]  flex items-center gap-2 mr-4 px-4 text-linkColor hover:bg-sidebarcolor ease-in duration-150 delay-75 ${poppins.className}`}
      >
        Sign Out <LogoutOutlined />
      </Button>
    </div>
  );
};

export default SignOut;

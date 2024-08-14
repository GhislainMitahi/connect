import { raleway } from "@/lib/fonts";
import { manrope } from "@/lib/fonts";
import { Button } from "./ui/button";

import VerifiedIcon from "./svg/verifiedIcon";
import TwoFactorAuth from "./svg/factorAuth";

const SecurityContent = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className={`rounded-md border-[1px] p-4 md:p-8 border-[#B5D2CC] border-solid ${raleway.className}`}>
         <p className="text-auth-text-color font-semibold text-sm md:text-lg">Email Address</p>
         <p className="text-[#949494] text-xs md:text-base">The email address associated with your account</p>
        <div className="mt-3">
          <p className="text-auth-text-color font-semibold text-sm">markzuck@mail.com</p>
          <div className="flex items-center gap-2">
            <VerifiedIcon />
            <p className="text-[#09941F] font-medium text-xs">Verified</p>
          </div>
        </div>
      </div>
      <div className={`rounded-md border-[1px] p-4 md:p-8 border-[#B5D2CC] border-solid ${raleway.className}`}>
         <p className="text-auth-text-color font-semibold text-sm">Password</p>
         <p className="text-[#949494] text-xs">Set a unique password to protect your account</p>
        <div className="mt-3">
          <div className="flex items-center gap-2">
            <Button className="bg-transparent text-[#929292] border-solid border-[#929292] rounded-sm border-[1px] flex items-center gap-2">Change Password</Button>
          </div>
        </div>
      </div>
      <div className={`rounded-md border-[1px] p-4 md:p-8 border-[#B5D2CC] border-solid ${raleway.className}`}>
        <p className="text-auth-text-color font-semibold text-sm">Two-Factor Authentication</p>
        <span className="text-[#949494] text-xs">Disabled</span>
        <div className="mt-4">
          <p className={`text-[#949494] text-xs mb-2`}>Get verification codes in your email to enable two factor authentication.</p>
          <Button className={`bg-transparent text-[#004a39] font-bold text-xs border-solid border-[#004a39] rounded-sm border-[1px] flex items-center gap-2 ${manrope.className}`}>Send Code</Button>
        </div>
        <div className="flex items-center mt-4 gap-2">
          <TwoFactorAuth width="80" height="14"/>         
          <p className="text-[#949494] text-[13px]">Enter the 6-digit verification code sent to that email address associated with your account</p>
        </div>
        <div>
          {/* Input for verification auth code */}
        </div>
        <div className="mt-5">
          <Button className="bg-[#004a39] text-[#fff] font-bold text-xs border-solid border-[#004a39] rounded-sm border-[1px] flex items-center gap-2">Enable 2FA</Button>
        </div>
      </div>
      <div className={`rounded-md border-[1px] p-4 md:p-8 border-[#B5D2CC] border-solid ${raleway.className}`}>
        <p className="text-auth-text-color font-semibold text-sm">Deactivate my account</p>
        <p className="text-[#949494]">This will shut down your account. Your account will be reactivated when you sign in again</p>
        <div className="mt-5">
          <Button className="bg-transparent hover:bg-transparent text-auth-text-color font-bold text-xs rounded-sm border-[1px] flex items-center gap-2 capitalize">DEACTIVATE</Button>
        </div>
      </div>
      <div className={`rounded-md border-[1px] p-4 md:p-8 border-[#B5D2CC] border-solid ${raleway.className}`}>
        <p className="text-auth-text-color font-semibold text-sm">Delete my account</p>
        <p className="text-[#949494]">This will delete your account. Your account will be permanently deleted in the Circle</p>
        <div className="mt-5">
          <Button className="bg-transparent hover:bg-transparent text-[#E71919] font-bold text-xs rounded-sm border-[1px] flex items-center gap-2 capitalize">DELETE</Button>
        </div>
      </div>
    </div>
  );
}
 
export default SecurityContent;

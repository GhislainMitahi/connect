"use client";

import Foot from "@/components/shareds/Foot";
import H1 from "@/components/shareds/H1";
import SignUp from "@/components/SignUp";
import Analysis from "@/components/svg/Analysis";
import CheckCircle from "@/components/svg/CheckCircle";
import ConnectLogo from "@/components/svg/ConnectLogo";
import Monitor from "@/components/svg/Monitor";
import Users from "@/components/svg/Users";
import ServiceOnSignup from "@/components/ui/ServiceOnSignup";

export default function SignupPage() {
  return (
    <main
      style={{ backgroundImage: "url('/bg-pattern.svg')" }}
      className="flex min-h-screen flex-col items-center justify-center bg-custom-green-night text-custom-light bg-no-repeat bg-cover bg-top"
    >
      <div className="w-full h-[100vh] flex items-center justify-center signup-gb px-14">
        <div className=" w-[50%] h-[80%] flex justify-center items-center">
          <div className="h-full w-[100%] flex flex-col justify-between items-center">
            <div className="flex w-[80%] flex-col gap-1 tracking-wide">
              <div className="flex items-center gap-1">
                <ConnectLogo /> <p>co:nnect</p>
              </div>
              <H1 text="Start your Enhanced Journey today" />
              <div className="flex gap-1 items-center text-custom-gray">
                <CheckCircle />
                <small className="text-xs ">10x Cheaper, 100x Faster</small>
              </div>
            </div>
            <div className="w-[80%] flex flex-col gap-4">
              <ServiceOnSignup
                title="Co-Create with Vision"
                description="Get personalized tips on optimal content and collaboration suggestions."
                icon={<Users />}
              />
              <ServiceOnSignup
                title="Performance Monitoring"
                description="Analyze audience demographics and behavior to tailor content effectively."
                icon={<Monitor />}
              />
              <ServiceOnSignup
                title="Trend Analysis and Prediction"
                description="Forecast future performance based on historical data and industry trends."
                icon={<Analysis />}
              />
            </div>
            <Foot />
          </div>
        </div>
        <div className="w-[50%] flex justify-center items-center h-full">
          <div className="w-[80%] flex justify-center">
            <SignUp />
          </div>
        </div>
      </div>
    </main>
  );
}

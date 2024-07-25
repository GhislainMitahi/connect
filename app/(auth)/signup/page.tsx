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
      <div className="md:w-[100%] flex md:flex-row flex-col justify-between items-center gap-4 md:gap-0 signup-gb mt-10 mb-5">
        <div className="flex justify-center items-center">
          <div className="w-[100%] flex flex-col justify-between items-center xs:ml-20">
            <div className="flex w-[80%] flex-col gap-1 tracking-wide md:mb-8">
              <div className="flex items-center justify-center gap-1 md:justify-start md:gap-2">
                <ConnectLogo /> <p>co:nnect</p>
              </div>
              <H1 text="Start your Enhanced Journey today" />
              <div className="flex justify-center md:justify-start gap-1 items-center text-custom-gray py-2">
                <CheckCircle />
                <small className="text-xs md:hidden">No credit card required</small>
                <small className="text-xs hidden md:block">10x Cheaper, 100x Faster</small>

              </div>
            </div>
            <div className="w-[80%] hidden md:flex flex-col gap-4">
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
            <div className="w-[80%] hidden md:block md:mt-2">
              <Foot />
            </div>
          </div>
        </div>
        <div className="xs:w-[70%] w-full flex justify-center items-center">
          <div className="flex justify-center px-4">
            <SignUp />
          </div>
        </div>
      </div>
    </main>
  );
}

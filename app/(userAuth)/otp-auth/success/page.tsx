"use client";
import Ok from "@/components/svg/Ok";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  return (
    <main className="flex flex-col w-full justify-center items-center">
      <div className="md:w-[50%] w-[80%] flex flex-col justify-center items-center gap-4">
        <div className="flex flex-col gap-4">
          <h1 className="text-center text-2xl font-bold">Co:nnect</h1>
          <div className="">
            <Ok />
          </div>
        </div>
        <div className="text-center flex flex-col">
          <h1 className="md:text-[1.75em] text-[1.5em] font-medium">
            Account created successfully
          </h1>
          <p className="md:text-lg text-sm">
            Welcome to start your success journey with connect
          </p>
        </div>
        <Button
          onClick={() => {
            router.push("/dashboard");
          }}
          type="submit"
          className=" md:w-[20%] w-[100%] p-3 bg-auth-text-color mx-auto"
        >
          Let's Start!
        </Button>
      </div>
    </main>
  );
}

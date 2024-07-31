"use client";

import { CustomSession } from "@/app/types/next-auth";
import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import DashboardLayout from "../dashboard/layout";

const SettingsPage = () => {
  const [session, setSession] = useState<CustomSession | null>(null);
  const { data, status } = useSession();

  useEffect(() => {
    if (status === "authenticated" && data) {
      setSession(data as CustomSession);
    } else {
      setSession(null);
    }
  }, [data, status]);

  return (
    <DashboardLayout>
      <h1>Settings page</h1>
      <div className="">
        {JSON.stringify(session)}

        <Button
          onClick={() => signOut()}
          className="bg-sidehover text-green-800 hover:bg-sidehover"
        >
          Sign out
        </Button>
      </div>
    </DashboardLayout>
  );
};

export default SettingsPage;

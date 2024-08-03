"use client";

import { CustomSession } from "@/app/types/next-auth";
import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";

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
    <main>
      <h1>Settings page</h1>
      <div className="">
        <p>name: {session?.user.name}</p>
        <p>email: {session?.user.email}</p>
        {/* <pre>{JSON.stringify(session, null, 2)}</pre> */}
        <Button
          onClick={() => signOut()}
          className="bg-sidehover text-green-800 hover:bg-sidehover"
        >
          Sign out
        </Button>
      </div>
    </main>
  );
};

export default SettingsPage;

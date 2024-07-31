// "use client";

import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";

import DashboardLayout from "../dashboard/layout";

const SettingsPage = async() => {
  const session = await auth();
  console.log(session);
  const { user } = session;
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-semibold mb-5">Settings page</h1>
      <div className="flex flex-col gap-4 mb-3">
        {/* {JSON.stringify(session)} */}
        <p>{user.name}</p>
        <p>{user.email}</p>
      </div>
      <form action={async () => {
        "use server"
        await signOut();
      }}>
        {/* <Button type="submit">Sign out</Button> */}
        <Button type="submit" className="bg-sidehover text-green-800 hover:bg-sidehover">Logout</Button>

      </form>
    </DashboardLayout>
  );
}
 
export default SettingsPage;
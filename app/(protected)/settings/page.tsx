// "use client";

import { auth, signOut } from "@/auth";
// import { Button } from "antd";
import { Button } from "@/components/ui/button";

import DashboardLayout from "../dashboard/layout";

const SettingsPage = async() => {
  const session = await auth();
  console.log(session)
  return (
    <DashboardLayout>
      <h1>Settings page</h1>
      <div className="">
        {/* {JSON.stringify(session)} */}
      </div>
      <form action={async () => {
        "use server"
        await signOut();
      }}>
        {/* <Button type="submit">Sign out</Button> */}
        <Button type="submit"></Button>

      </form>
    </DashboardLayout>
  );
}
 
export default SettingsPage;
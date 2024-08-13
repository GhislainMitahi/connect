import { Select, Switch } from "antd";
import { Checkbox } from "./ui/checkbox";

import { raleway } from "@/lib/fonts";

const GeneralSettingsContent = () => {

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onChange = (checked: boolean) => {
   console.log(`switch to ${checked}`);
  };

  return (
    <div className="flex flex-col gap-4 my-4">
      <div className="flex flex-col gap-3 rounded-md border-[1px] p-4 md:p-8 border-[#B5D2CC] border-solid">
        <div className="md:flex md:justify-between items-center">
          <div >
            <h2 className="text-auth-text-color font-medium text-[15px] mb-1">Appearance</h2>
            <p className={`text-[#666666] font-medium text-[13px] ${raleway.className}`}>Customize how your themes look on your device</p>
          </div>
          <Select
            defaultValue="light"
            style={{ width: 120 }}
            onChange={handleChange}
            options={[
              { value: 'dark', label: 'Dark' },
              { value: 'light', label: 'Light' },
              { value: 'disabled', label: 'Disabled', disabled: true },
            ]}
          />
        </div>
        <div className="flex flex-col gap-3 md:flex-row md:justify-between md:items-center">
          <div >
            <h2 className="text-auth-text-color font-medium text-[15px] mb-1">Language</h2>
            <p className={`text-[#666666] font-medium text-[13px] ${raleway.className}`}>Choose your language</p>
          </div>
          <Select
            defaultValue="english"
            style={{ width: 120 }}
            onChange={handleChange}
            options={[
              { value: 'english', label: 'English' },
              { value: 'French', label: 'French' },
              { value: 'disabled', label: 'Disabled', disabled: true },
            ]}
          />
        </div>
      </div>
      <div className="flex flex-col gap-3 rounded-md border-[1px] p-4 md:p-8 border-[#B5D2CC] border-solid">
        <div>
          <div className="md:flex md:items-center md:justify-between md:mb-3">
            <h2 className={`font-semibold text-auth-text-color mb-2 text-xl`}>My Notifications</h2>
            <p className={`underline text-auth-text-color font-bold mb-2 ${raleway.className}`}>About notifications?</p>
          </div>
          <div className={`${raleway.className}`}>
            <p className="mb-2 text-auth-text-color font-semibold text-[15px]">Notify me when...</p>
            <ul className="font-semibold text-[15px] text-[#666666]">
              <li className="flex gap-3 items-center"><Checkbox setting={true} /> Daily productivity update</li>
              <li className="flex gap-3 items-center"><Checkbox setting={true} /> New event created</li>
              <li className="flex gap-3 items-center"><Checkbox setting={true} /> Daily productivity update</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 rounded-md border-[1px] p-4 md:p-8 border-[#B5D2CC] border-solid">
        <div className={`${raleway.className}`}>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-auth-text-color text-[15px] font-semibold">Email Push Notification</h2>
            <p><Switch defaultChecked onChange={onChange} /></p>
          </div>
          <p className="font-medium text-[13px]">Receive email notification whenever your startup requires attention</p>
        </div>
        <div className={`${raleway.className}`}>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-auth-text-color text-[15px] font-semibold">Desktop Notification</h2>
            <p><Switch defaultChecked onChange={onChange} disabled/></p>
          </div>
          <p className="font-medium text-[13px]">Receive email notification whenever your startup requires attention</p>
        </div>
      </div>
    </div>
  );
}
 
export default GeneralSettingsContent;
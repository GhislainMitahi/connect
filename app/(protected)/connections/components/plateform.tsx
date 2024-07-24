"use client";

import { Button } from "antd";

interface SocialsPlateformProps {
  icon: any;
  socialPlateform: string;
  description: string;
  btnText: string;
  btnColor: string;
  onButtonClick: () => void;
}


const SocialsPlateform: React.FC<SocialsPlateformProps> = ({ icon, socialPlateform, description, btnText, btnColor, onButtonClick }) => {
  return (
    <div className='flex items-center justify-between mb-8'>
      <div className='flex items-center gap-4'>
        <div className='flex items-center justify-center h-12 w-12 bg-greenLight rounded-lg'>{icon}</div>
        <div>
          <h2>{socialPlateform}</h2>
          <p>{description}</p>
        </div>
      </div>
      <Button
        className='py-4 px-2' style={{ backgroundColor: `${btnColor}`}}
        onClick={onButtonClick}
      >
        {btnText}
      </Button>
    </div>
  )
}

export default SocialsPlateform;

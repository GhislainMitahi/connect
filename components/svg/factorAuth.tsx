import React from "react";

interface TwoFactorAuthProps {
  width?: string;
  height?: string;
  color?: string
}

const TwoFactorAuth:React.FC<TwoFactorAuthProps> = ({ width = "34", height = "14", color= "#004A39"}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 34 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.304688 0.75V3.25H6.91359V5.75H3.60914C2.73274 5.75 1.89224 6.01339 1.27254 6.48223C0.652834 6.95107 0.304688 7.58696 0.304688 8.25V13.25H10.218V10.75H3.60914V8.25H6.91359C7.78998 8.25 8.63048 7.98661 9.25019 7.51777C9.86989 7.04893 10.218 6.41304 10.218 5.75V3.25C10.218 2.58696 9.86989 1.95107 9.25019 1.48223C8.63048 1.01339 7.78998 0.75 6.91359 0.75H0.304688ZM11.8703 0.75V13.25H15.1747V8.25H20.1314V5.75H15.1747V3.25H21.7836V0.75H11.8703ZM26.7403 0.75C25.8639 0.75 25.0234 1.01339 24.4037 1.48223C23.784 1.95107 23.4358 2.58696 23.4358 3.25V13.25H26.7403V9.5H30.0447V13.25H33.3492V3.25C33.3492 2.58696 33.001 1.95107 32.3813 1.48223C31.7616 1.01339 30.9211 0.75 30.0447 0.75H26.7403ZM26.7403 3.25H30.0447V7H26.7403V3.25Z" fill={color}/>
    </svg>
  );
}
 
export default TwoFactorAuth;
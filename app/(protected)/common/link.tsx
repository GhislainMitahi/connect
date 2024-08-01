"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface LinkIconsProps {
  url: string;
  title: string;
  icon: any;
  label?: string;
  inactive?: boolean
}

const LinkIcons: React.FC<LinkIconsProps> = ({ url, title, icon, label, inactive = false}) => {
  const pathname = usePathname();

  const isCurrentPage = pathname === url;

   const linkStyles = `
    flex items-center justify-between text-xs mb-1 p-2 rounded font-normal 
    ${isCurrentPage && !inactive ? "bg-sidehover" : "bg-inherit"}
    ${inactive ? "text-[#8BA373] pointer-events-none" : "hover:bg-[#c8e3ad80]"}
  `;
  
  return (
    <Link href={url} className={linkStyles}>
        <div className={`flex items-center gap-4 ${inactive ? "text-[#8ba373]" : "text-linkColor"}`}>
        {/* {icon} */}
        {React.cloneElement(icon, { color: inactive ? "#8BA373" : "#004A39" })}
        {title}
        </div>
        {label && (<p className='bg-greenLight p-1 rounded-sm'>{label}</p>)}
    </Link>
)
};

export default LinkIcons;

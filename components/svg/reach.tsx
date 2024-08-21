import React from "react";

interface reachIconProps {
  width?: string;
  height?: string;
  color?: string;
};

const ReachIcon: React.FC<reachIconProps> = ({ width = "18", height = "18", color="#004A39"}) => {
  return (
  <svg width={width} height={height} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.4165 5.75817C3.67484 5.75817 3.07484 5.15817 3.07484 4.4165C3.07484 4.06067 3.21619 3.71941 3.4678 3.4678C3.71941 3.21619 4.06067 3.07484 4.4165 3.07484C5.15817 3.07484 5.75817 3.67484 5.75817 4.4165C5.75817 4.77234 5.61682 5.11359 5.36521 5.36521C5.11359 5.61682 4.77234 5.75817 4.4165 5.75817ZM4.4165 0.666504C2.33317 0.666504 0.666504 2.33317 0.666504 4.4165C0.666504 7.22484 4.4165 11.3832 4.4165 11.3832C4.4165 11.3832 8.1665 7.22484 8.1665 4.4165C8.1665 2.33317 6.49984 0.666504 4.4165 0.666504ZM13.5832 5.75817C13.2273 5.75817 12.8861 5.61682 12.6345 5.36521C12.3829 5.11359 12.2415 4.77234 12.2415 4.4165C12.2415 4.24031 12.2762 4.06585 12.3436 3.90307C12.4111 3.74029 12.5099 3.59239 12.6345 3.4678C12.7591 3.34322 12.907 3.24439 13.0697 3.17697C13.2325 3.10954 13.407 3.07484 13.5832 3.07484C13.7594 3.07484 13.9338 3.10954 14.0966 3.17697C14.2594 3.24439 14.4073 3.34322 14.5319 3.4678C14.6565 3.59239 14.7553 3.74029 14.8227 3.90307C14.8901 4.06585 14.9248 4.24031 14.9248 4.4165C14.9248 4.77234 14.7835 5.11359 14.5319 5.36521C14.2803 5.61682 13.939 5.75817 13.5832 5.75817ZM13.5832 0.666504C11.4998 0.666504 9.83317 2.33317 9.83317 4.4165C9.83317 7.22484 13.5832 11.3832 13.5832 11.3832C13.5832 11.3832 17.3332 7.22484 17.3332 4.4165C17.3332 2.33317 15.6665 0.666504 13.5832 0.666504ZM13.5832 12.3332C12.5248 12.3332 11.5832 12.9998 11.2332 13.9998H6.7665C6.54569 13.3761 6.08664 12.8654 5.48995 12.5796C4.89325 12.2937 4.20758 12.2561 3.58317 12.4748C3.27282 12.5836 2.98695 12.7524 2.7419 12.9717C2.49684 13.191 2.29741 13.4565 2.15501 13.7529C2.01261 14.0493 1.93002 14.3709 1.91197 14.6992C1.89393 15.0276 1.94077 15.3563 2.04984 15.6665C2.27364 16.2918 2.73579 16.8032 3.33535 17.0889C3.93491 17.3746 4.62317 17.4115 5.24984 17.1915C5.95817 16.9415 6.49984 16.3748 6.7665 15.6665H11.2415C11.6998 16.9665 13.1332 17.6498 14.4165 17.1915C14.7278 17.0839 15.0148 16.9158 15.2609 16.6969C15.507 16.478 15.7075 16.2127 15.8507 15.9161C15.994 15.6195 16.0772 15.2976 16.0957 14.9687C16.1141 14.6398 16.0674 14.3106 15.9582 13.9998C15.5998 12.9998 14.6498 12.3332 13.5832 12.3332ZM13.5832 16.0832C13.2516 16.0832 12.9337 15.9515 12.6993 15.7171C12.4649 15.4826 12.3332 15.1647 12.3332 14.8332C12.3332 14.5016 12.4649 14.1837 12.6993 13.9493C12.9337 13.7149 13.2516 13.5832 13.5832 13.5832C13.9147 13.5832 14.2326 13.7149 14.4671 13.9493C14.7015 14.1837 14.8332 14.5016 14.8332 14.8332C14.8332 15.1647 14.7015 15.4826 14.4671 15.7171C14.2326 15.9515 13.9147 16.0832 13.5832 16.0832Z" fill={color} />
  </svg>
  );
}
 
export default ReachIcon;
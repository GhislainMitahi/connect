import React from "react";

interface FollowersIconProps {
  width?: string;
  height?: string;
  color?: string;
};

const FollowersIcon: React.FC<FollowersIconProps> = ({ width = "18", height = "17", color="#004A39"}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.3333 10.1665C12.4384 10.1665 13.4982 10.6055 14.2796 11.3869C15.061 12.1683 15.5 13.2281 15.5 14.3332V15.1665C15.5 15.6085 15.3244 16.0325 15.0118 16.345C14.6993 16.6576 14.2754 16.8332 13.8333 16.8332H2.16667C1.72464 16.8332 1.30072 16.6576 0.988155 16.345C0.675595 16.0325 0.5 15.6085 0.5 15.1665V14.3332C0.5 13.2281 0.938987 12.1683 1.72039 11.3869C2.50179 10.6055 3.5616 10.1665 4.66667 10.1665H11.3333ZM15.845 6.06734C15.9946 5.91629 16.1963 5.82814 16.4088 5.82093C16.6213 5.81372 16.8285 5.888 16.988 6.02856C17.1475 6.16912 17.2473 6.36532 17.2668 6.57702C17.2864 6.78872 17.2244 6.9999 17.0933 7.16734L17.0233 7.2465L14.6667 9.60317C14.5232 9.74665 14.3323 9.83284 14.1297 9.84558C13.9272 9.85831 13.727 9.79671 13.5667 9.67234L13.4883 9.60317L12.31 8.42484C12.159 8.27522 12.0708 8.07353 12.0636 7.86105C12.0564 7.64857 12.1307 7.44136 12.2712 7.28185C12.4118 7.12234 12.608 7.02259 12.8197 7.003C13.0314 6.98342 13.2426 7.04549 13.41 7.1765L13.4883 7.2465L14.0775 7.83567L15.845 6.06734ZM8 0.166504C9.10507 0.166504 10.1649 0.605491 10.9463 1.38689C11.7277 2.16829 12.1667 3.2281 12.1667 4.33317C12.1667 5.43824 11.7277 6.49805 10.9463 7.27945C10.1649 8.06085 9.10507 8.49984 8 8.49984C6.89493 8.49984 5.83512 8.06085 5.05372 7.27945C4.27232 6.49805 3.83333 5.43824 3.83333 4.33317C3.83333 3.2281 4.27232 2.16829 5.05372 1.38689C5.83512 0.605491 6.89493 0.166504 8 0.166504Z" fill={color}/>
    </svg>
  );
}
 
export default FollowersIcon;

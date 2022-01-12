import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="22" height="22" viewBox="0 0 22 22" {...props}>
      <path
        d="M20.0881 10.692C19.2974 7.11783 18.1248 4.83791 16.2454 4.28232C15.8814 4.17614 15.5039 4.12317 15.1247 4.12506C13.9693 4.12506 13.0575 4.81256 10.9997 4.81256C8.94197 4.81256 8.02845 4.12506 6.87474 4.12506C6.47975 4.12301 6.08639 4.17594 5.70599 4.28232C3.82396 4.83791 2.66123 7.11998 1.86158 10.692C1.04517 14.3405 1.19298 17.2232 2.78884 17.7767C3.90603 18.1634 4.90505 17.3637 5.85123 16.1868C6.92544 14.8462 8.24845 14.4337 10.9997 14.4337C13.751 14.4337 15.0225 14.8462 16.0984 16.1868C17.0437 17.3646 18.0797 18.1544 19.1672 17.7835C20.9298 17.1815 20.9049 14.3834 20.0881 10.692Z"
        stroke="white"
        strokeMiterlimit="10"
        fill="none"
      />
      <path
        d="M12.5469 10.4844C13.0215 10.4844 13.4062 10.0996 13.4062 9.625C13.4062 9.15038 13.0215 8.76562 12.5469 8.76562C12.0723 8.76562 11.6875 9.15038 11.6875 9.625C11.6875 10.0996 12.0723 10.4844 12.5469 10.4844Z"
        fill="white"
      />
      <path
        d="M14.4375 12.375C14.2674 12.375 14.1012 12.3245 13.9598 12.23C13.8185 12.1355 13.7083 12.0012 13.6433 11.844C13.5784 11.6868 13.5615 11.5139 13.5948 11.3472C13.6281 11.1804 13.7102 11.0273 13.8306 10.9072C13.951 10.7871 14.1043 10.7054 14.2712 10.6725C14.438 10.6396 14.6109 10.6569 14.7679 10.7223C14.9249 10.7877 15.0589 10.8981 15.1531 11.0397C15.2473 11.1814 15.2973 11.3477 15.2969 11.5178C15.2963 11.7453 15.2055 11.9634 15.0444 12.1241C14.8833 12.2848 14.665 12.375 14.4375 12.375Z"
        fill="white"
      />
      <path
        d="M14.4375 8.59375C14.9121 8.59375 15.2969 8.20899 15.2969 7.73438C15.2969 7.25976 14.9121 6.875 14.4375 6.875C13.9629 6.875 13.5781 7.25976 13.5781 7.73438C13.5781 8.20899 13.9629 8.59375 14.4375 8.59375Z"
        fill="white"
      />
      <path
        d="M16.3281 10.4844C16.8027 10.4844 17.1875 10.0996 17.1875 9.625C17.1875 9.15038 16.8027 8.76562 16.3281 8.76562C15.8535 8.76562 15.4688 9.15038 15.4688 9.625C15.4688 10.0996 15.8535 10.4844 16.3281 10.4844Z"
        fill="white"
      />
      <path d="M6.875 7.5625V11.6875" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.9375 9.625H4.8125" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
};

export default Icon;

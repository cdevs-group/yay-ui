import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" {...props}>
      <defs>
        <linearGradient id="prefix__a" x1={48.733} y1={944.09} x2={942.955} y2={64.09} gradientUnits="userSpaceOnUse">
          <stop offset={0} stopColor="#151515" />
          <stop offset={0.994} stopColor="#252525" />
        </linearGradient>
        <linearGradient
          id="prefix__b"
          x1={761.394}
          y1={238.668}
          x2={275.02}
          y2={725.043}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#fdea6a" />
          <stop offset={0.129} stopColor="#f6df65" />
          <stop offset={0.709} stopColor="#d8b14e" />
          <stop offset={1} stopColor="#cc9f45" />
        </linearGradient>
      </defs>
      <title>Wallet</title>
      <rect width={1000} height={1000} rx={182.477} fill="url(#prefix__a)" />
      <path
        d="M470.273 616.333a133.712 133.712 0 01-133.635 133.835c-73.577 0-133.838-59.857-133.838-133.835h64.237c0 38.381 31.218 69.8 69.6 69.8s69.6-31.42 69.6-69.8zm22.668-210.2c0 86.107-70.2 156.107-156.3 156.107-86.307 0-156.307-70-156.307-156.107s70-156.3 156.307-156.3c86.101-.001 156.3 70.198 156.3 156.304zm-64.033 0a92.272 92.272 0 00-184.544 0c0 50.71 41.564 92.272 92.274 92.272a92.467 92.467 0 0092.27-92.268zm-81.535-26.448v-23.264H325.9v23.268a31.9 31.9 0 00-21.678 30.226 32.315 32.315 0 1064.63 0 31.719 31.719 0 00-21.479-30.226zm472.3 214.372c0 86.107-70 156.107-156.1 156.107s-156.507-70-156.507-156.107c0-86.5 70.4-156.5 156.507-156.5s156.096 70 156.096 156.504zm-63.834 0a92.27 92.27 0 10-184.539 0c0 50.71 41.36 91.874 92.27 91.874s92.265-41.16 92.265-91.87zM663.57 562.24a32.548 32.548 0 00-32.417 32.414 31.709 31.709 0 0021.677 30.425v23.466h21.479v-23.462a32.05 32.05 0 0021.474-30.425 32.506 32.506 0 00-32.217-32.414zm0-312.412c-73.777 0-133.834 59.857-133.834 133.635a132.935 132.935 0 0016.5 64.033 177.809 177.809 0 0156.081-31.022 68.405 68.405 0 01-8.351-33.011 69.6 69.6 0 01139.2 0 70.726 70.726 0 01-8.355 33.011 177.761 177.761 0 0156.08 31.022 132.7 132.7 0 0016.309-64.029c0-73.778-60.057-133.635-133.634-133.635z"
        fill="url(#prefix__b)"
      />
    </Svg>
  );
};

export default Icon;

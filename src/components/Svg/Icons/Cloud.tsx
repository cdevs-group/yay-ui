import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 26 26" {...props}>
      <g clipPath="url(#clip0_5809_2126)">
        <path
          d="M18.4203 11.4816V11.3732C18.4203 8.33795 16.0354 5.95312 13.0002 5.95312C10.2902 5.95312 8.01376 7.90434 7.68856 10.6144C5.73734 11.2648 4.32812 12.9992 4.32812 15.1672C4.32812 17.8772 6.49615 20.0453 9.20617 20.0453C11.049 20.0453 15.6018 20.0453 17.3363 20.0453C19.7211 20.0453 21.6723 18.094 21.6723 15.7092C21.6723 13.6496 20.2631 12.0236 18.4203 11.4816Z"
          fill="white"
        />
        <path
          d="M14.0841 14.6251V17.8771H11.9161V14.6251H8.66406L13.0001 10.2891L17.3361 14.6251H14.0841Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_5809_2126">
          <rect width="17.3442" height="14.0921" fill="white" transform="translate(4.32812 5.95312)" />
        </clipPath>
      </defs>
    </Svg>
  );
};

export default Icon;

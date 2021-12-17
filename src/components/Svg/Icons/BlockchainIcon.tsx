import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="22" height="22" viewBox="0 0 22 22" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.9996 0.167969L11.4542 0.428302L20.0098 5.31719L20.4718 5.58119V16.4577L19.9646 16.7107L11.409 20.9885L10.9996 21.1939L10.5901 20.9885L2.03457 16.7107L1.52734 16.4577V5.58119L1.98934 5.31719L10.5449 0.428302L10.9996 0.167969ZM3.36068 15.3235V7.69319L10.0829 11.5346V18.6859L3.36068 15.3247V15.3235ZM11.9162 18.6846L18.6385 15.3235V7.69319L11.9162 11.5346V18.6859V18.6846ZM10.9996 2.27997L17.7071 6.11286L10.9996 9.94575L4.29201 6.11286L10.9996 2.27997Z"
        fill="white"
        {...props}
      />
    </Svg>
  );
};

export default Icon;

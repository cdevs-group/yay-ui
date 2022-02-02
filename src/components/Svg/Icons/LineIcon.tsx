import React from "react";
import { useTheme } from "styled-components";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  const theme = useTheme();
  return (
    <Svg width="166" height="69" viewBox="0 0 166 69" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M1 67.388C8.21337 65.1045 14.145 51.1797 22.7519 48.8391C27.3393 47.5916 31.0142 50.0196 35.1145 53.7922C39.2148 57.5649 38.4121 59.1939 47.6336 62.1024C55.2434 64.5025 57.234 38.6255 64.6908 39.6197C72.1477 40.6139 75.5966 9.50179 83.4695 12.0989C91.3423 14.696 92.9153 7.98128 100.316 20.7072C107.716 33.433 114.554 3.76985 123.844 1.17273C133.133 -1.42439 135.553 26.141 139.962 25.1021C144.371 24.0633 148.34 43.7054 152.119 46.5623C155.898 49.4191 156.97 39.0412 165 39.0412"
        stroke={props.fill || theme.colors.green}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Icon;

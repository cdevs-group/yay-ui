import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14.7566 4.58005L9.60021 0.16978C9.14886 -0.216302 8.4375 0.0971198 8.4375 0.69686V3.01982C3.73157 3.07319 0 4.00736 0 8.42462C0 10.2075 1.1596 11.9738 2.4414 12.8972C2.84139 13.1854 3.41145 12.8237 3.26397 12.3566C1.93553 8.14861 3.89405 7.03148 8.4375 6.96674V9.51784C8.4375 10.1185 9.14942 10.4305 9.60021 10.0449L14.7566 5.63421C15.0809 5.35674 15.0814 4.8579 14.7566 4.58005V4.58005Z"
        fill="#F9FAFC"
      />
    </Svg>
  );
};

export default Icon;

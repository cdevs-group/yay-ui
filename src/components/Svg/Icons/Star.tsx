import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8 12.0553L11.93 14.3961C12.3094 14.622 12.7741 14.2812 12.6725 13.8515L11.632 9.45L15.0913 6.49267C15.4286 6.20428 15.251 5.65205 14.8088 5.61442L10.248 5.22632L8.45931 1.06784C8.28586 0.664596 7.71414 0.664597 7.54069 1.06784L5.752 5.22632L1.18973 5.61455C0.747737 5.65216 0.569965 6.20395 0.906876 6.4925L4.36 9.45L3.32543 13.8533C3.2245 14.2828 3.68893 14.623 4.06804 14.3972L8 12.0553Z"
        fill="#F9FAFC"
      />
    </Svg>
  );
};

export default Icon;

import React from "react";
import { DefaultTheme } from "styled-components";
import { TimerProps, TimerColorProps } from "./types";
declare const TimerNotSolid: React.FC<TimerProps>;
export default TimerNotSolid;
export declare const Wrap: import("styled-components").StyledComponent<"div", DefaultTheme, {}, never>;
export declare const Block: import("styled-components").StyledComponent<"div", DefaultTheme, TimerColorProps, never>;
export declare const Item: import("styled-components").StyledComponent<"div", DefaultTheme, {
    avax?: boolean | undefined;
}, never>;
export declare const Dots: import("styled-components").StyledComponent<"div", DefaultTheme, {}, never>;

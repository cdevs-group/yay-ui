import React from "react";
export interface LogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    srcs: string[];
}
declare const Logo: React.FC<LogoProps>;
export default Logo;

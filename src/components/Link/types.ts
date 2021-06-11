import { AnchorHTMLAttributes } from "react";
import { SvgProps } from "../Svg";
import { TextProps } from "../Text";

export interface LinkProps extends TextProps, AnchorHTMLAttributes<HTMLAnchorElement> {
  external?: boolean;
  props?:any 
}

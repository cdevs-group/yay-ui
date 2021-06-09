import { SpaceProps, TypographyProps } from "styled-system";

export interface TextProps extends SpaceProps, TypographyProps {
  color?: string;
  fontSize?: string;
  bold?: boolean;
  small?: boolean;
  textTransform?: "uppercase" | "lowercase" | "capitalize";
}

export const sizes = {
  SM:"sm",
  MD: "md",
  LG: "lg",
  XL: "xl",
  XXL: "xxl",
} as const;
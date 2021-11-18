import { BinanceIcon } from "../Svg";
import React from "react";
import styled from "styled-components";
import Logo from "./Logo";

const StyledLogo = styled(Logo)<{ size: string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
`;

export default function CurrencyLogo({
  currency,
  size = "24px",
  style,
  srcs,
  isEther,
}: {
  currency: any;
  size?: string;
  style?: React.CSSProperties;
  srcs: string[];
  isEther: boolean;
}) {
  if (isEther) {
    return <BinanceIcon width={size} style={style} />;
  }

  return <StyledLogo size={size} srcs={srcs} alt={`${currency?.symbol ?? "token"} logo`} style={style} />;
}

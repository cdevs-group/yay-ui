import React from "react";
import { StyledCardProps } from "../../Card/types";
import StyledCardBTC from "./StyledCardBTC";

const CardBTC: React.FC<StyledCardProps> = ({ children, ...props }) => {
  return <StyledCardBTC {...props}>{children}</StyledCardBTC>;
};

export default CardBTC;

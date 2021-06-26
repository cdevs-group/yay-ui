import React from "react";
import styled from "styled-components";
import { StyledCardProps } from "../../Card/types";
import StyledCardBTC from "./StyledCardBTC";

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  width: 335px;
`;

const CardBTC: React.FC<StyledCardProps> = ({ children, ...props }) => {
  return (
    <Wrap>
      <StyledCardBTC {...props}>{children}</StyledCardBTC>
    </Wrap>
  );
};
export default CardBTC;

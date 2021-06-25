import React from "react";
import styled from "styled-components";
import { StyledCardProps } from "./types";
import StyledCard from "./components/StyledCard";

interface CardProps extends StyledCardProps {}

const Wrap = styled.div`
  width: 335px;
`;

const Card: React.FC<CardProps> = ({ children, ...props }) => {
  return (
    <Wrap>
      <StyledCard {...props}>{children}</StyledCard>
    </Wrap>
  );
};
export default Card;

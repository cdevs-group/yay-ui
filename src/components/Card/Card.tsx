import React from "react";
import styled from "styled-components";
import StyledCard from "../Cards/CardLater/StyledCard";
import { StyledCardProps } from "./types";
import { transparentize } from "polished";
import { GreenArrow, ChartIcon, HistoryIcon } from "../Svg";

interface CardProps extends StyledCardProps {}

const Wrap = styled.div`
  width: 335px;
  /* height: 470px; */
`;

const BottomCard = styled.div`
  position: absolute;
  left: 35%;
  bottom: 1%;
  transform: rotate(-25deg);
  width: 45px;
  height: 61px;
  background: ${({ theme }) => theme.colors.lightGreyBg};
  box-shadow: ${({ theme }) => theme.colors.boxShadow3};
  border-radius: 10px;
`;

const Card: React.FC<CardProps> = ({ children, ...props }) => {
  return (
    <Wrap>
      <StyledCard {...props}>{children}</StyledCard>
    </Wrap>
  );
};
export default Card;

import React from "react";
import { StyledCardProps } from "./types";
import StyledCard from "./components/StyledCard";

interface CardProps extends StyledCardProps {}

const Card: React.FC<CardProps> = ({ children, ...props }) => {
  return <StyledCard {...props}>{children}</StyledCard>;
};

export default Card;

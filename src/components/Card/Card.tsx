import React from 'react';
import StyledCard from './StyledCard';
import { CardProps } from './types';

const Card: React.FC<CardProps> = ({ children, active, ...props }) => {
  return <StyledCard {...props}>{children}</StyledCard>;
};

export default Card;

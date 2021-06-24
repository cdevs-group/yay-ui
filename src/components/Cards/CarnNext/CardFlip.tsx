import React, { ReactNode } from "react";
import styled from "styled-components";
import { CardFlipProps } from "../types";

const Front = styled.div`
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

const Back = styled(Front)`
  transform: rotateY(180deg);
`;

const Inner = styled.div<{ isFlipped: CardFlipProps["isFlipped"] }>`
  height: 100%;
  position: relative;
  transform: rotateY(${({ isFlipped }) => (isFlipped ? 180 : 0)}deg);
  transform-style: preserve-3d;
  transition: transform 600ms, background 0.6s;
  border-radius: 15px;
  box-sizing: border-box;
  /* background: ${({ theme, isFlipped }) => (isFlipped ? theme.colors.cardBg : theme.colors.bgCard)}; */

  ${Front} {
    z-index: ${({ isFlipped }) => (isFlipped ? 5 : 10)};
    padding: 18px 15px 14px;
    justify-content: space-between;
    flex-direction: column;
    backface-visibility: hidden;
    display: flex;
    border-radius: 15px;
    transition: 0;
    background: ${({ theme }) => theme.colors.bgCard};
    position: absolute;
    height: 293px;
    bottom: 0;
    top: auto;
  }

  ${Back} {
    z-index: ${({ isFlipped }) => (isFlipped ? 10 : 5)};
    padding: 18px 15px 20px;
    transition: 0;
    background: ${({ theme }) => theme.colors.cardBg};
    border-radius: 15px;
    height: 100%;
  }
`;

const StyledCardFlip = styled.div`
  perspective: 1000px;
  height: 367px;
  width: 308px;
  border-radius: 15px;
  @media (max-width: 767px) {
    width: 278px;
  }
`;
const getComponents = (children: CardFlipProps["children"]) => {
  if (children.length !== 2) {
    throw new Error("CardFlip: Two children are required");
  }

  return children;
};

const CardFlip: React.FC<CardFlipProps> = ({ isFlipped, children }) => {
  const [front, back] = getComponents(children);

  return (
    <StyledCardFlip>
      <Inner isFlipped={isFlipped}>
        <Front>{front}</Front>
        <Back>{back}</Back>
      </Inner>
    </StyledCardFlip>
  );
};

export default CardFlip;

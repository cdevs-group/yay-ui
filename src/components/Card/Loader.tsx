import React from "react";
import styled, { keyframes } from "styled-components";
import { StyledCardProps } from "./types";
import { transparentize } from "polished";

let orangeAnimation = keyframes`
  0%, 100% { transform: translate(0, 0); }
  25% { transform: translate(0, -20px); }
  50% { transform: translate(20px, 0); }
  75% { transform: translate(-20px, 0); }
`;

let redAnimation = keyframes`
  0%, 100% { transform: translate(0, 0); }
  25% { transform: translate(0, 20px); }
  50% { transform: translate(-20px, 0); }
  75% { transform: translate(20px, 0); }
`;

let greenAnimation = keyframes`
  0%, 100% { transform: translate(0, 0); }
  25% { transform: translate(20px, 0px); }
  50% { transform: translate(0, 20px); }
  75% { transform: translate(0, -20px); }
`;

let yellowAnimation = keyframes`
  0%, 100% { transform: translate(0, 0); }
  25% { transform: translate(-20px, 0); }
  50% { transform: translate(0, -20px); }
  75% { transform: translate(0, 20px); }
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
`;

const Loader = styled.div`
  /* position: relative; */
  /* top: 50%;
  bottom: 0;
  left: 0;
  right: 0; */
  /* display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center; */
  /* justify-content: center; */
  /* height: 50%; */
`;

const OrangeCircle = styled.div`
  position: absolute;
  width: 14px;
  height: 14px;
  animation: ${orangeAnimation} 2s linear infinite;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.orangeBg};
`;

const GreenCircle = styled.div`
  position: absolute;
  width: 14px;
  height: 14px;
  animation: ${greenAnimation} 2s linear infinite;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.greenBg};
`;

const RedCircle = styled.div`
  position: absolute;
  width: 14px;
  height: 14px;
  animation: ${redAnimation} 2s linear infinite;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.redBg};
`;

const YellowCircle = styled.div`
  position: absolute;
  width: 14px;
  height: 14px;
  animation: ${yellowAnimation} 2s linear infinite;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.yellowBg};
`;

const BottomText = styled.div`
  margin-top: 40px;
  text-align: center;
  font-weight: normal;
  font-size: 11px;
  line-height: 14px;
  color: ${({ theme }) => theme.colors.greyText};
  letter-spacing: 0.05em;
`;

const LoaderCard: React.FC<StyledCardProps> = ({ negative, closedCount, linePrice, lockedPrice, prize, colorIcon }) => {
  return (
    <Wrap>
      <Loader>
        <OrangeCircle />
        <GreenCircle />
        <RedCircle />
        <YellowCircle />
      </Loader>
      <BottomText>
        This round`s closing transactions has <br />
        been submitted to the blockchain, and is <br />
        awaiting confirmation
      </BottomText>
    </Wrap>
  );
};
export default LoaderCard;

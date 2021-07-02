import React from "react";
import styled, { keyframes } from "styled-components";
import { StyledCardProps } from "../../Card/types";

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

const Loader = styled.div<{ textTooltip?: string }>`
  position: ${({ textTooltip }) => (textTooltip ? "static" : "absolute")};
  top: 50%;
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
  margin-top: 75px;
  text-align: center;
  font-weight: normal;
  font-size: 11px;
  line-height: 14px;
  color: ${({ theme }) => theme.colors.greyText};
  letter-spacing: 0.05em;
`;

const LoaderCardText: React.FC<StyledCardProps> = ({ textTooltip }) => {
  return (
    <Wrap>
      <Loader textTooltip={textTooltip}>
        <OrangeCircle />
        <GreenCircle />
        <RedCircle />
        <YellowCircle />
      </Loader>
      <BottomText>{textTooltip}</BottomText>
    </Wrap>
  );
};

export default LoaderCardText;

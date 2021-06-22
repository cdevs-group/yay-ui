import React from "react";
import styled, { keyframes } from "styled-components";

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
  height: 480px;
`;

const Loader = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: flex-end;
  height: 50%;
`;

const OrangeCircle = styled.div`
  position: absolute;
  width: 22px;
  height: 22px;
  animation: ${orangeAnimation} 2s linear infinite;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.orangeBg};
`;

const GreenCircle = styled.div`
  position: absolute;
  width: 22px;
  height: 22px;
  animation: ${greenAnimation} 2s linear infinite;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.greenBg};
`;

const RedCircle = styled.div`
  position: absolute;
  width: 22px;
  height: 22px;
  animation: ${redAnimation} 2s linear infinite;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.redBg};
`;

const YellowCircle = styled.div`
  position: absolute;
  width: 22px;
  height: 22px;
  animation: ${yellowAnimation} 2s linear infinite;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.yellowBg};
`;

const Text = styled.div`
  margin: 30px 0 100px;
  font-weight: 500;
  font-size: 15px;
  line-height: 19px;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
`;

const BottomText = styled.div`
  text-align: center;
  font-size: 13px;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.greyText};
  letter-spacing: 0.05em;
`;

const LoaderCard: React.FC = () => {
  return (
    <Wrap>
      <Loader>
        <OrangeCircle />
        <GreenCircle />
        <RedCircle />
        <YellowCircle />
      </Loader>
      <Text>Calculating...</Text>
      <BottomText>
        This round`s closing transactions has <br />
        been submitted to the blockchain, and is <br />
        awaiting confirmation
      </BottomText>
    </Wrap>
  );
};

export default LoaderCard;

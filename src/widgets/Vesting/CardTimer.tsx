import React from "react";
import styled from "styled-components";
import { transparentize } from "polished";
import { Text } from "../../components/Text";
import { TimerSimple } from "../../components/Timer";

interface IProps {
  data: {
    textFront: string;
    textBack: string;
    textStage: string;
    timeSecond: number;
    totalSeconds: number;
    textsTime: {
      days: string;
      hours: string;
      minutes: string;
      seconds: string;
    };
  };
  canClaim: boolean;
  disabledTopCards?: boolean;
}

const CardTimer = ({ data, canClaim, disabledTopCards }: IProps) => {
  const progress = 100 - (data.timeSecond * 100) / data.totalSeconds;

  const Progress = () => (
    <ProgressTrack>
      <ProgressBar progress={progress} />
    </ProgressTrack>
  );

  return (
    <Wrapper canClaim={canClaim} disabledTopCards={!!disabledTopCards}>
      <Inner className="card-inner">
        <CardFront canClaim={canClaim} disabledTopCards={!!disabledTopCards}>
          <Text
            color="greyText"
            fontSize="14px"
            lineHeight="24px"
            letterSpacing="-0.02em"
            marginBottom="2px"
            fontWeight="400"
          >
            {data.textBack}
          </Text>
          <Text fontSize="24px" lineHeight="32px" letterSpacing="-0.02em" fontWeight="400">
            {data.textStage}
          </Text>
          <Progress />
        </CardFront>
        <CardBack canClaim={canClaim} disabledTopCards={!!disabledTopCards}>
          <Text
            color="greyText"
            fontSize="14px"
            lineHeight="24px"
            letterSpacing="-0.02em"
            marginBottom="2px"
            fontWeight="400"
          >
            {data.textFront}
          </Text>
          <TimerSimple time={data.timeSecond} texts={data.textsTime} />
          <Progress />
        </CardBack>
      </Inner>
      <Claimed canClaim={canClaim} disabledTopCards={!!disabledTopCards} />
    </Wrapper>
  );
};

const CardFront = styled.div<{ canClaim: boolean; disabledTopCards: boolean }>`
  width: 100%;
  padding: 18px 24px 10px;
  background: ${({ theme }) => theme.colors.dark};
  box-shadow: ${({ theme }) => theme.colors.boxShadow2};
  border-radius: 20px;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
  top: 0;
  transition: 0;
  backface-visibility: ${({ canClaim, disabledTopCards }) => (disabledTopCards || !canClaim ? "" : "hidden")};
`;

const CardBack = styled(CardFront)`
  transform: rotateY(180deg) translateX(50%);
`;

const Wrapper = styled.div<{ canClaim: boolean; disabledTopCards: boolean }>`
  position: relative;
  perspective: 1000px;
  min-height: 97px;
  width: 100%;
  border-radius: 20px;
  &:hover {
    & .card-inner {
      transform: ${({ canClaim, disabledTopCards }) => (disabledTopCards || !canClaim ? "none" : "rotateY(180deg)")};
    }
  }
`;

const Inner = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 600ms;
  border-radius: 15px;
  box-sizing: border-box;
`;

const ProgressTrack = styled.div`
  height: 2px;
  width: 100%;
  margin-top: 8px;
  background: ${({ theme }) => transparentize(0.9, theme.colors.greyBg2)};
  box-shadow: ${({ theme }) => theme.colors.boxShadow7};
  border-radius: 6px;
`;

const ProgressBar = styled.div<{ progress: number }>`
  height: 100%;
  width: ${({ progress }) => `${progress}%`};
  background: ${({ theme }) => theme.colors.greenBg2};
  border-radius: inherit;
`;
const Claimed = styled.div<{ canClaim: boolean; disabledTopCards: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(15px);
  background: ${({ theme }) => transparentize(0.5, theme.colors.bgGray)};
  transition: 0.3s;
  opacity: ${({ canClaim, disabledTopCards }) => (disabledTopCards || !canClaim ? 1 : 0)};
  pointer-events: ${({ canClaim, disabledTopCards }) => (disabledTopCards || !canClaim ? "auto" : "none")};
  border-radius: inherit;
`;

export default CardTimer;

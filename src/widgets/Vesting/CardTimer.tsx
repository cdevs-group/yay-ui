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
}

const CardTimer = ({ data }: IProps) => {
  const progress = 100 - (data.timeSecond * 100) / data.totalSeconds;
  
  const Progress = () => (
    <ProgressTrack>
      <ProgressBar progress={progress} />
    </ProgressTrack>
  );

  return (
    <Wrapper>
      <Inner>
        <CardFront>
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
        </CardFront>
        <CardBack>
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
        </CardBack>
      </Inner>
    </Wrapper>
  );
};

const CardFront = styled.div`
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
`;

const CardBack = styled(CardFront)`
  transform: rotateY(180deg) translateX(50%);
`;

const Wrapper = styled.div`
  perspective: 1000px;
  min-height: 97px;
  width: 100%;
  border-radius: 20px;
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

  ${Wrapper}:hover & {
    transform: rotateY(180deg);
  }
  ${CardFront} {
    backface-visibility: hidden;
  }
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

export default CardTimer;

import React from "react";
import styled from "styled-components";
import { Text } from "../../components/Text";
import { TimerText } from "../../components/Timer";

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
    };
  };
}

const CardTimer = ({ data }: IProps) => {
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
          <TimerText color="green" time={data.timeSecond} texts={data.textsTime} />
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

export default CardTimer;

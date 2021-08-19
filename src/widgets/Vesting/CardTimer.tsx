import React from "react";
import styled from "styled-components";
import { Text } from "../../components/Text";

interface IProps {
  data?: {
    text: string;
    value: string;
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
            1f
          </Text>
          <Text fontSize="24px" lineHeight="32px" letterSpacing="-0.02em" fontWeight="400">
            1f
          </Text>
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
            f
          </Text>
          <Text fontSize="24px" lineHeight="32px" letterSpacing="-0.02em" fontWeight="400">
            f
          </Text>
        </CardBack>
      </Inner>
    </Wrapper>
  );
};
const CardFront = styled.div`
  padding: 18px 24px;
  background: ${({ theme }) => theme.colors.dark};
  box-shadow: ${({ theme }) => theme.colors.boxShadow2};
  border-radius: 20px;
  height: 100%;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
  top: 0;
  width: 100%;
`;

const CardBack = styled(CardFront)`
  transform: rotateY(180deg) translateX(50%);
`;

const Wrapper = styled.div`
  perspective: 1000px;
  height: 371px;
  width: 335px;
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
  &:hover {
    transform: rotateY(180deg);
  }

  ${CardFront} {
    backface-visibility: hidden;
    transition: 0;
    width: 278px;
    ${({ theme }) => theme.mediaQueries.sm} {
      width: 308px;
    }
  }

  ${CardBack} {
    padding: 18px 15px 20px;
    transition: 0;
    background: ${({ theme }) => theme.colors.cardBg};
    border-radius: 15px;
    height: 100%;
    width: 100%;
  }
`;

export default CardTimer;

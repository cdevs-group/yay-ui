import React from "react";
import styled from "styled-components";
import { Text } from "../../components/Text";
import { COIN4 } from "../../constants/images";
import { baseColors } from "../../theme/colors";
import { Flex } from "../../components/Box";
import { Button } from "../../components/Button";

interface IAchievementProps {
  id?: string | number;
  image: string;
  count?: string | number;
  countMax?: string | number;
  title: string;
  description: string;
  fullDescription?: string;
  collectText?: string;
  handleCollect?: (val?: string | number) => void;
  progress?: boolean;
  collectTextMob?: string;
  disabledButton?: boolean;
  loadingButton?: boolean;
  refferal?: boolean;
  refferalReward?: string;
  network?: string;
}

const Achievement = ({
  image,
  count,
  countMax,
  title,
  description,
  fullDescription,
  collectText,
  collectTextMob,
  handleCollect,
  progress,
  disabledButton,
  loadingButton,
  refferal,
  refferalReward,
  network,
}: IAchievementProps) => {
  return (
    <Wrapper progress={progress}>
      <Inner className="card-inner">
        <CardFront progress={progress}>
          {network && <Network src={network} alt="" />}
          {progress && (
            <Counter>
              <Flex alignItems="center" justifyContent="center">
                <Text
                  fontWeight={500}
                  color={count === 0 || count === "0" ? "text" : baseColors.green}
                  letterSpacing="0.05em"
                  fontSize="10px"
                >
                  {count}
                </Text>
                <Text fontSize="10px">/</Text>
                <Text fontWeight={500} letterSpacing="0.05em" fontSize="10px">
                  {countMax}
                </Text>
              </Flex>
              <img src={COIN4} />
            </Counter>
          )}
          {refferal && (
            <Counter>
              <Flex alignItems="center" justifyContent="center">
                <Text fontWeight={500} letterSpacing="0.05em" fontSize="10px">
                  {refferalReward}
                </Text>
              </Flex>
              <img src={COIN4} />
            </Counter>
          )}
          <Content>
            <ImageBlock>
              <img src={image} />
            </ImageBlock>
            <TitleStyle mb="5px" fontWeight={500} letterSpacing="0.05em" fontSize="13px">
              {title}
            </TitleStyle>
            <DescriptionStyle fontWeight={500} letterSpacing="0.05em" fontSize="11px" color={baseColors.textGray}>
              {description}
            </DescriptionStyle>
            {progress && countMax && (count || count === 0) && <RangeTrack progress={(+count / +countMax) * 100} />}
            {!progress && (
              <ButtonStyle
                padding="0 15px"
                height="30px"
                width="100%"
                variant="green"
                onClick={handleCollect}
                disabled={disabledButton}
                spin={loadingButton}
              >
                <ButtonText loading={loadingButton}>{collectText}</ButtonText>
                <ButtonTextMob loading={loadingButton}>{collectTextMob}</ButtonTextMob>
              </ButtonStyle>
            )}
          </Content>
        </CardFront>
        <CardBack progress={progress}>
          <Flex alignItems="center" justifyContent="center" height="100%">
            <Text fontWeight={400} letterSpacing="0.05em" fontSize="10px">
              {fullDescription}
            </Text>
          </Flex>
        </CardBack>
      </Inner>
    </Wrapper>
  );
};

export default Achievement;

const Counter = styled.div`
  top: -5px;
  right: -5px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 54px;
  height: 25px;
  padding: 6px 3px 6px 8px;
  background: ${({ theme }) => theme.colors.bgGray5};
  box-shadow: ${({ theme }) => theme.colors.boxShadow11};
  border-radius: 4px;
  z-index: 2;
`;
const Content = styled.div`
  text-align: center;
`;
const ImageBlock = styled.div`
  position: relative;
  width: fit-content;
  height: 109px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ theme }) => theme.mediaQueries.sm} {
    height: 114px;
  }
  &:after {
    width: 100%;
    height: 4px;
    content: "";
    display: block;
    position: absolute;
    background: ${({ theme }) => theme.colors.darkGradient};
    filter: blur(4px);
    bottom: 5px;
    left: 0;
    opacity: 0.5;
  }
  & img {
    transform: scale(0.7);
    ${({ theme }) => theme.mediaQueries.sm} {
      transform: none;
    }
  }
`;
const RangeTrack = styled.div<{ progress?: number }>`
  position: relative;
  width: 100%;
  margin-top: 18px;
  height: 12px;
  background: ${({ theme }) => theme.colors.buttonBg};
  box-shadow: ${({ theme }) => theme.colors.boxShadow4};
  border-radius: 3px;
  &:after {
    display: block;
    content: "";
    position: absolute;
    width: ${({ progress }) => (progress ? `calc(${progress}% - 5px)` : 0)};
    height: calc(100% - 6px);
    top: 3px;
    left: 2.5px;
    border-radius: 2px;
    background: ${({ theme }) => theme.colors.greenText2};
  }
`;
const ButtonStyle = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  padding: 0;
  font-size: 13px;
  border-radius: 7px;
`;
const ButtonText = styled(Text)<{ loading?: boolean }>`
  position: relative;
  display: none;
  &:after {
    display: block;
    content: ${({ loading }) => (loading ? "none" : `url("${COIN4}")`)};
    position: absolute;
    right: -20px;
    top: 0;
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    display: block;
    font-size: 13px;
  }
`;
const ButtonTextMob = styled(ButtonText)<{ loading?: boolean }>`
  font-size: 13px;
  display: block;
  &:after {
    content: ${({ loading }) => (loading ? "none" : `url("${COIN4}")`)};
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    display: none;
  }
`;
const TitleStyle = styled(Text)`
  font-size: 11px;
  ${({ theme }) => theme.mediaQueries.sm} {
    font-size: 13px;
  }
`;
const DescriptionStyle = styled(Text)`
  font-size: 9px;
  ${({ theme }) => theme.mediaQueries.sm} {
    font-size: 11px;
  }
`;

const Network = styled.img`
  position: absolute;
  left: 7px;
  top: 7px;
  width: 22px;
  height: 22px;
`;

const Wrapper = styled.div<{ progress?: boolean }>`
  position: relative;
  perspective: 1000px;
  min-height: 210px;
  width: 100%;
  border-radius: 10px;
  &:hover {
    & .card-inner {
      transform: ${({ progress }) => (!progress ? "none" : "rotateY(180deg)")};
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
  border-radius: 10px;
  box-sizing: border-box;
`;

const CardFront = styled.div<{ progress?: boolean }>`
  position: absolute;
  height: 100%;
  width: 100%;
  padding: 0 14px 16px;
  background: ${({ theme }) => theme.colors.bgGray};
  border: 1.5px solid ${({ theme }) => theme.colors.bgGray};
  border-radius: 10px;
  transition: 0.3s;
  cursor: pointer;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
  transition: 0;
  backface-visibility: ${({ progress }) => (!progress ? "" : "hidden")};

  &:hover {
    border: 1.5px solid ${({ theme }) => theme.colors.green};
    box-shadow: ${({ theme }) => theme.colors.boxShadow14};
  }
`;

const CardBack = styled(CardFront)`
  transform: rotateY(180deg) translateX(50%);
`;

import React from "react";
import styled from "styled-components";
import { Text } from "../../components/Text";
import { COIN4 } from "../../constants/images";
import { baseColors, lightColors } from "../../theme/colors";
import { Flex } from "../../components/Box";
import { Button } from "../../components/Button";

interface IAchievementProps {
  image: string;
  count?: string | number;
  countMax?: string | number;
  title: string;
  description: string;
  collectText?: string;
  handleCollect?: () => void;
  complete: boolean;
  collectTextMob?: string;
}

const Achievement = ({
  image,
  count,
  countMax,
  title,
  description,
  collectText,
  collectTextMob,
  handleCollect,
  complete,
}: IAchievementProps) => {
  return (
    <AchievementWrap>
      {!complete && (
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
            <span style={{ color: lightColors.text }}>/</span>
            <Text fontWeight={500} letterSpacing="0.05em" fontSize="10px">
              {countMax}
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
        {count && countMax && !complete && <RangeTrack progress={(+count / +countMax) * 100} />}
        {complete && (
          <ButtonStyle padding="0 15px" height="30px" width="100%" variant="green" onClick={handleCollect}>
            <ButtonText>{collectText}</ButtonText>
            <ButtonTextMob>{collectTextMob}</ButtonTextMob>
          </ButtonStyle>
        )}
      </Content>
    </AchievementWrap>
  );
};

export default Achievement;

const AchievementWrap = styled.div`
  width: 146px;
  position: relative;
  height: 194px;
  padding: 0 14px 25px;
  background: ${({ theme }) => theme.colors.bgGray};
  border: 1.5px solid ${({ theme }) => theme.colors.bgGray};
  border-radius: 10px;
  transition: 0.3s;
  cursor: pointer;
  ${({ theme }) => theme.mediaQueries.sm} {
    width: 178px;
    height: 208px;
  }
  &:hover {
    border: 1.5px solid ${({ theme }) => theme.colors.green};
  }
`;
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
  margin-top: 15px;
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
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
`;
const ButtonText = styled(Text)`
  position: relative;
  display: none;
  ${({ theme }) => theme.mediaQueries.sm} {
    display: block;
    font-size: 13px;
  }
  &:after {
    display: block;
    content: url("${COIN4}");
    position: absolute;
    right: -20px;
    top: 0;
  }
`;
const ButtonTextMob = styled(ButtonText)`
  font-size: 13px;
  display: block;
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

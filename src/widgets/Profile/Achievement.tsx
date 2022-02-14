import React from "react";
import styled from "styled-components";
import { Text } from "../../components/Text";
import { Flex, Box } from "../../components/Box";
import { ButtonStyle, Network, Reward, ButtonText, ButtonTextMob, TitleStyle, DescriptionStyle } from "./StyledCards";

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
  reward?: string;
  network?: string;
  backTitle?: string;
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
  reward,
  network,
  backTitle,
}: IAchievementProps) => {
  return (
    <Wrapper progress={progress}>
      <Inner className="card-inner">
        <CardFront progress={progress}>
          {network && <Network src={network} alt="" />}
          <Reward>
            <Text fontWeight={500} letterSpacing="0.05em" fontSize="10px">
              {reward}
            </Text>
          </Reward>
          <ImageBlock>
            <img src={image} />
          </ImageBlock>
          <TitleStyle textAlign="center">{title}</TitleStyle>
          <DescriptionStyle fontWeight={500} letterSpacing="0.05em" textAlign="center" fontSize="11px" color="textGray">
            {description}
          </DescriptionStyle>
          {progress && countMax && (count || count === 0) && (
            <Box marginTop="auto" width="100%">
              <RangeTrack progress={(+count / +countMax) * 100} />
              <Flex justifyContent="center" mt="5px">
                <Text
                  fontWeight={500}
                  color={count === 0 || count === "0" ? "text" : "green"}
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
            </Box>
          )}
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
              <ButtonText loadingButton={loadingButton}>{collectText}</ButtonText>
              <ButtonTextMob loadingButton={loadingButton}>{collectTextMob}</ButtonTextMob>
            </ButtonStyle>
          )}
        </CardFront>
        <CardBack progress={progress}>
          <Flex alignItems="center" justifyContent="center" height="100%">
            <div>
              <Text fontWeight={400} letterSpacing="0.05em" fontSize="13px" textAlign="center" mb="5px">
                {backTitle}
              </Text>
              <Text
                fontWeight={400}
                letterSpacing="0.05em"
                color="grayText"
                textAlign="center"
                fontSize="11px"
                lineHeight="14px"
              >
                {fullDescription}
              </Text>
            </div>
          </Flex>
        </CardBack>
      </Inner>
    </Wrapper>
  );
};

export default Achievement;

const ImageBlock = styled.div`
  margin: 0 auto 5px;
  & img {
    max-width: 100%;
    max-height: 61px;
    ${({ theme }) => theme.mediaQueries.sm} {
      max-height: 95px;
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

const Wrapper = styled.div<{ progress?: boolean }>`
  position: relative;
  perspective: 1000px;
  min-height: 240px;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ progress }) => (progress ? "14px 14px 6px" : "14px 14px 16px")};
  background: ${({ theme }) => theme.colors.bgGray};
  border: 1.5px solid ${({ theme }) => theme.colors.bgGray};
  border-radius: 10px;
  transition: 0.3s;
  cursor: pointer;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
  transition: 0;
  backface-visibility: hidden;

  &:hover {
    border: 1.5px solid ${({ theme }) => theme.colors.green};
    box-shadow: ${({ theme }) => theme.colors.boxShadow14};
  }
`;

const CardBack = styled(CardFront)`
  transform: rotateY(180deg) translateX(50%);
`;

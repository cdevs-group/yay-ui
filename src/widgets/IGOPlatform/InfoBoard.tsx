import React from "react";
import styled from "styled-components";
import { Text } from "../../components/Text";
import { InfoBoardProps } from "./types";

const InfoBoard = ({ imgMain, images, texts }: InfoBoardProps) => {
  return (
    <Wrapper>
      <MainImg src={imgMain} />
      <Title>{texts.title}</Title>
      <Description>{texts.description}</Description>
      <Images>
        {images.map((item, i) => (
          <ImgItem src={item} key={i} />
        ))}
      </Images>
      <Description>{texts.description2}</Description>
    </Wrapper>
  );
};

export default InfoBoard;

const Wrapper = styled.div`
  padding: 22px;
  background: ${({ theme }) => theme.colors.bgGray};
  border-radius: 10px;
  ${({ theme }) => theme.mediaQueries.md} {
    padding: 32px 32px 25px;
  }
`;
const Title = styled(Text)`
  margin-top: 14px;
  margin-bottom: 16px;
  font-weight: normal;
  font-size: 23px;
  line-height: 100%;
  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 28px;
  }
`;
const MainImg = styled.div<{ src: string }>`
  height: 250px;
  background: ${({ src, theme }) => (src === "" ? theme.colors.whiteRgba : `url(${src})`)};
  background-size: cover;
  border-radius: 6px;
  background-position: center;
`;
const Description = styled(Text)`
  font-size: 15px;
  line-height: 19px;
  font-weight: normal;
  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 18px;
    line-height: 22px;
  }
`;
const Images = styled.div`
  margin: 24px 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px 0;
  ${({ theme }) => theme.mediaQueries.sm} {
    gap: 24px 24px;
    grid-template-columns: 1fr 1fr;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    gap: 0 24px;
    grid-template-columns: repeat(4, 1fr);
  }
`;
const ImgItem = styled.div<{ src: string }>`
  max-width: 254px;
  width: 100%;
  height: 109px;
  border-radius: 12px;
  justify-self: center;
  background: ${({ src, theme }) => (src === "" ? theme.colors.whiteRgba : `url(${src})`)};
  background-size: cover;
  background-position: center;
`;

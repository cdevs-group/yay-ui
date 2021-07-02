import React from "react";
import styled from "styled-components";
import { TitleBlockProps } from "./types";

const TitleBlock: React.FC<TitleBlockProps> = ({ src, title, subtitle, children }) => {
  return (
    <Block>
      <Img>
        <img src={src} alt="" />
      </Img>
      <div>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <Timer>{children}</Timer>
      </div>
    </Block>
  );
};
export default TitleBlock;

const Block = styled.div`
  display: flex;
  align-items: center;
`;

const ImgWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 186px;
  height: 186px;
  margin-right: 50px;
  border-radius: 50%;
`;

const Img = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  margin-right: 25px;
  border-radius: 50%;
  flex: none;
  border: 2px solid ${({ theme }) => theme.colors.green};
  ${({ theme }) => theme.mediaQueries.sm} {
    width: 120px;
    height: 120px;
    margin-right: 30px;
  }
  ${({ theme }) => theme.mediaQueries.xl} {
    width: 170px;
    height: 170px;
    margin-right: 50px;
  }
  &::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    display: block;
    width: calc(100% + 16px);
    height: calc(100% + 16px);
    background: ${({ theme }) => theme.colors.greenGradient2};
    border-radius: inherit;
    opacity: 0.15;
    transform: translate(-50%, -50%);
  }
  & img {
    width: calc(100% + 6px);
    height: calc(100% + 6px);
    margin-right: 2px;
    margin-top: 2px;
    max-width: none;
  }
`;

const Title = styled.h3`
  display: block;
  margin-bottom: 7px;
  font-weight: bold;
  font-size: 18px;
  line-height: 23px;
  letter-spacing: 0.03em;
  color: ${({ theme }) => theme.colors.text};
  ${({ theme }) => theme.mediaQueries.sm} {
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 10px;
  }
  ${({ theme }) => theme.mediaQueries.xl} {
    font-size: 31px;
    line-height: 39px;
  }
`;
const Subtitle = styled.span`
  display: block;
  margin-bottom: 13px;
  font-size: 11px;
  line-height: 13px;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.textGray};
  ${({ theme }) => theme.mediaQueries.sm} {
    font-size: 13px;
    line-height: 16px;
  }
  ${({ theme }) => theme.mediaQueries.xl} {
    font-size: 15px;
    line-height: 19px;
    margin-bottom: 26px;
  }
`;

const Timer = styled.div`
  display: none;
  ${({ theme }) => theme.mediaQueries.sm} {
    display: block;
  }
`;

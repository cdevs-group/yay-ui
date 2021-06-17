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
        {children}
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
  width: 170px;
  height: 170px;
  margin-right: 50px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.green};
  &::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    display: block;
    width: 186px;
    height: 186px;
    background: ${({ theme }) => theme.colors.greenGradient2};
    border-radius: inherit;
    opacity: 0.15;
    transform: translate(-50%, -50%);
  }
  & img {
    min-width: 176px;
    height: 176px;
    margin-right: 2px;
    margin-top: 2px;
  }
`;

const Title = styled.h3`
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 31px;
  line-height: 39px;
  letter-spacing: 0.03em;
  color: ${({ theme }) => theme.colors.text};
`;
const Subtitle = styled.span`
  display: block;
  margin-bottom: 26px;
  font-size: 15px;
  line-height: 19px;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.textGray};
`;

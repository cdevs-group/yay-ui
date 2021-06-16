import React, { ReactNode } from "react";
import styled from "styled-components";
import { CardHeaderProps } from "../types";

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TextLeft = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 21px;
  line-height: 27px;
  /* background: ${({ theme }) => theme.colors.linkColor};
  -webkit-background-clip: text; */
  /* -webkit-text-fill-color: transparent; */
  & div:nth-child(2) {
    margin: 0 5px 0 16px;
    background: ${({ theme }) => theme.colors.text};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const UpDown = styled.div<{ negative?: boolean }>`
  margin-left: 2px;
  font-weight: 500;
  font-size: 21px;
  line-height: 27px;
  color: ${({ theme, negative }) => (negative ? theme.colors.redBg : theme.colors.greenText)};
`;

const TextRight = styled.div`
  display: flex;
  align-items: center;
  font-weight: normal;
  font-size: 13px;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.greyText};
  & div {
    margin-left: 10px;
  }
`;
const CardHeader: React.FC<CardHeaderProps> = ({ icon, coin, num, svg, negative }) => {
  return (
    <Title>
      <TextLeft>
        <div>{icon}</div>
        <div>{coin}</div>
        <UpDown negative={negative}>{negative ? "DOWN" : "UP"}</UpDown>
      </TextLeft>
      <TextRight>
        {num} <div>{svg}</div>
      </TextRight>
    </Title>
  );
};

export default CardHeader;

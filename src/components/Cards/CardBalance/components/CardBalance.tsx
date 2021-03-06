import React from "react";
import styled from "styled-components";
import { CardBalanceProps } from "../../types";
import Text from "../../../Text/Text";
import GHOST from "../../image/ghost.png";

const CardBalance = ({ right, children, texts, account }: CardBalanceProps) => {
  return (
    <CardWrap right={right}>
      {account ? (
        <CardHeader size="xl">{texts.title}</CardHeader>
      ) : (
        <Ghost>
          <img alt="" src={GHOST} />
        </Ghost>
      )}
      <CardText>{account ? texts.text : texts.connect}</CardText>
      {children}
    </CardWrap>
  );
};

export default CardBalance;

const CardWrap = styled.div<{ right?: boolean }>`
  position: relative;
  margin-bottom: 18px;
  padding: 25px;
  background-color: ${({ theme }) => theme.colors.bgGray};
  box-shadow: ${({ theme }) => theme.colors.boxShadow2};
  border-radius: 15px;
  z-index: 1;
  & svg {
    position: absolute;
    left: ${(props) => (props.right ? "auto" : "0")};
    right: ${(props) => (props.right ? "0" : "auto")};
    bottom: 0;
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    margin-bottom: 0px;
  }
`;

const CardHeader = styled(Text)`
  text-align: center;
  letter-spacing: 0.05em;
  margin-bottom: 14px;
`;

const CardText = styled(Text)`
  text-align: center;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.textGray};
`;

const Ghost = styled.div`
  text-align: center;
`;

import React from "react";
import styled from "styled-components";
import { transparentize } from "polished";
import { Flex } from "../Box";
import { Text } from "../Text";
import { ClosedPriceProp } from "./types";

const PriceBlock = styled.div<{ negative?: boolean }>`
  position: relative;
  padding: 17px 13px 14px 25px;
  border-radius: 12px;
  background: ${({ theme, negative }) => (negative ? theme.colors.redBg : theme.colors.linkColor)};
  z-index: 1;
  &::before {
    position: absolute;
    display: block;
    content: "";
    width: calc(100% - 2px);
    height: calc(100% - 2px);
    box-sizing: border-box;
    top: 1px;
    left: 1px;
    background: ${({ theme }) => theme.colors.darkGreyBg};
    border-radius: 12px;
  }
`;

const Price = styled.div<{ negative?: boolean }>`
  font-weight: 500;
  font-size: 17px;
  line-height: 22px;
  background: ${({ theme, negative }) => (negative ? theme.colors.redBg : theme.colors.linkColor)};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const RightText = styled.div<{ negative?: boolean }>`
  padding: 6px 12px;
  background: ${({ theme, negative }) =>
    negative ? transparentize(0.85, theme.colors.redBg) : theme.colors.gradients.greenGradient};
  border-radius: 7px;
  font-size: 15px;
  line-height: 19px;
`;

const ClosedPrice: React.FC<ClosedPriceProp> = ({ price, rightText, result, negative }) => {
  return (
    <PriceBlock negative={negative}>
      <div style={{ position: "relative", zIndex: 3 }}>
        <Text color="greyText" mb={18} fontWeight={400}>
          {!result ? "Closed Price" : "Your Result"}
        </Text>
        <Flex justifyContent="space-between" alignItems="center">
          <Price negative={negative}>{price}</Price>
          <Text size="sm" fontWeight={400} mr="auto" ml={9}>
            {result}
          </Text>
          <RightText negative={rightText === "UP" ? false : negative}>
            <Price negative={rightText === "UP" ? false : negative}>{rightText}</Price>
          </RightText>
        </Flex>
      </div>
    </PriceBlock>
  );
};

export default ClosedPrice;

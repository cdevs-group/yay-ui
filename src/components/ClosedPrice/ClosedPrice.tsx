import React from "react";
import styled from "styled-components";
import { transparentize } from "polished";
import { Flex } from "../Box";
import { Text } from "../Text";
import { ClosedPriceProp } from "./types";
import { GreenArrow } from "../Svg";

const PriceBlock = styled.div`
  padding: 17px 13px 14px 13px;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.darkGreyBg};
  box-shadow: ${({ theme }) => theme.colors.boxShadow4};

  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 17px 13px 14px 25px;
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
  display: flex;
  align-items: center;
  padding: 6px 12px;
  background: ${({ theme, negative }) =>
    negative ? transparentize(0.85, theme.colors.redBg) : theme.colors.gradients.greenGradient};
  border-radius: 7px;
  font-size: 15px;
  line-height: 19px;
  & path {
    stroke: ${({ theme, negative }) => (negative ? theme.colors.redBg : theme.colors.green)};
  }
  & svg {
    margin-right: 10px;
    transform: ${({ theme, negative }) => (negative ? "rotate(270deg)" : "rotate(90deg)")};
  }
`;

const ClosedPrice: React.FC<ClosedPriceProp> = ({ price, rightText, result, negative, roundFailed, textPrice }) => {
  return (
    <PriceBlock>
      <div style={{ position: "relative", zIndex: 3 }}>
        <Text color="greyText" mb={18} fontWeight={400}>
          {textPrice || (!result ? "Closed Price" : "Your Result")}
        </Text>
        {((!roundFailed && !result) || result) && (
          <Flex justifyContent="space-between" alignItems="center">
            <Price negative={negative}>{price}</Price>
            <Text size="sm" fontWeight={400} mr="auto" ml={9}>
              {result}
            </Text>
            <RightText negative={rightText === "UP" ? false : negative}>
              <GreenArrow />
              <Price negative={rightText === "UP" ? false : negative}>{rightText}</Price>
            </RightText>
          </Flex>
        )}
        {roundFailed && !result && <Text>CANCELED</Text>}
      </div>
    </PriceBlock>
  );
};

export default ClosedPrice;

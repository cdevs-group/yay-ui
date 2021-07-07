import React from "react";
import styled from "styled-components";
import { transparentize } from "polished";
import { Flex } from "../Box";
import { Text } from "../Text";
import { ClosedPriceProp } from "./types";
import { GreenArrow } from "../Svg";

const getColorBg = (negative: boolean, roundFailed: boolean, result: string, theme: any) => {
  if (roundFailed || result) return theme.colors.darkGreyBg;
  if (negative) return theme.colors.redBg;
  if (!negative) return theme.colors.greenGradient;
};

const PriceBlockWrap = styled.div<{ negative: boolean; roundFailed: boolean; result: string }>`
  padding: 1px;
  background: ${({ theme, negative, roundFailed, result }) => getColorBg(negative, roundFailed, result, theme)};
  border-radius: 12px;
`;

const PriceBlock = styled.div`
  padding: 17px 13px 14px 13px;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.darkGreyBg};
  /* box-shadow: ${({ theme }) => theme.colors.boxShadow4}; */
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
`;

const ClosedPrice: React.FC<ClosedPriceProp> = ({ price, rightText, result, negative, roundFailed, textPrice }) => {
  return (
    <PriceBlockWrap negative={negative || false} roundFailed={roundFailed || false} result={result || ""}>
      <PriceBlock>
        <Text color="text" mb={18} fontWeight={500} fontSize="13px" textTransform="uppercase">
          {textPrice || (!result ? "Closed Price" : "Your Result")}
        </Text>
        {((!roundFailed && !result) || result) && (
          <Flex justifyContent="space-between" alignItems="center">
            <Price negative={negative}>{price}</Price>
            <Text fontWeight={400} mr="auto" ml={9}>
              {result}
            </Text>
            <RightText negative={rightText === "UP" ? false : negative}>
              <Price negative={rightText === "UP" ? false : negative}>
                <Text>{rightText}</Text>
              </Price>
            </RightText>
          </Flex>
        )}
        {roundFailed && !result && <Text color="greyText">CANCELED</Text>}
      </PriceBlock>
    </PriceBlockWrap>
  );
};

export default ClosedPrice;

import React from "react";
import styled from "styled-components";
import { transparentize } from "polished";
import { Flex } from "../Box";
import { Text } from "../Text";
import { ClosedPriceBTCProp } from "./types";

const getColorBg = (negative: boolean, roundFailed: boolean, isBTCWon: boolean, theme: any) => {
  if (roundFailed) return theme.colors.darkGreyBg;
  if (!negative && !isBTCWon) return theme.colors.colorCardBtc;
  if (!negative && isBTCWon) return theme.colors.yellowGradient2;
  return theme.colors.darkGreyBg;
};

const PriceBlockWrap = styled.div<{ negative: boolean; roundFailed: boolean; isBTCWon: boolean }>`
  padding: 1px;
  background: ${({ theme, negative, roundFailed, isBTCWon }) => getColorBg(negative, roundFailed, isBTCWon, theme)};
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

const ClosedPriceBTC: React.FC<ClosedPriceBTCProp> = ({
  price,
  rightText,
  negative,
  roundFailed,
  textPrice,
  textLockedPrice,
  lockedPrice,
  textTitle,
  isBTCWon,
  btc
}) => {
  return (
    <PriceBlockWrap negative={negative || false} roundFailed={roundFailed || false} isBTCWon={isBTCWon || false}>
      <PriceBlock>
        <Flex justifyContent="space-between" alignItems="center" marginBottom="6px">
          <Text color="text" fontWeight={500} fontSize="13px" textTransform="uppercase">
            {textPrice || "Closed Price"} {btc ? 'BTC' : "ETH"}
          </Text>
          {!roundFailed && <Text fontSize="17px">{price}</Text>}
        </Flex>

        {!roundFailed && (
          <>
            <Flex justifyContent="space-between" marginBottom="10px">
              <Text color="textGray" fontWeight={500}>
                {textLockedPrice || "Locked Price"}
              </Text>
              <Text color="textGray" fontWeight={500}>
                {lockedPrice}
              </Text>
            </Flex>
            <Flex justifyContent="space-between" alignItems="center">
              <Text color="textGray" fontWeight={500}>
                {textTitle || "Title"}
              </Text>
              <RightText negative={rightText === "UP" ? false : negative}>
                <Price negative={rightText === "UP" ? false : negative}>{rightText}</Price>
              </RightText>
            </Flex>
          </>
        )}
        {roundFailed && (
          <Text color="greyText" marginTop="40px">
            CANCELED
          </Text>
        )}
      </PriceBlock>
    </PriceBlockWrap>
  );
};

export default ClosedPriceBTC;

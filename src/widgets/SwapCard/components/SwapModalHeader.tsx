import React from "react";
import { Button, Text, Flex } from "../../..";
import { AutoColumn } from "../../../components/Layout/Column";
import { RowBetween, RowFixed } from "../../../components/Layout/Row";
import { SwapModalHeaderProps } from "../types";
import { SwapShowAcceptChanges } from "./styleds";
import { YAY_TOKEN_GREEN } from "../../../constants/images";
import styled from "styled-components";
import { baseColors } from "../../../theme/colors";

const SwapModalHeader: React.FC<SwapModalHeaderProps> = ({
  recipient,
  showAcceptChanges,
  onAcceptChanges,
  currencyFrom,
  currencyTo,
  texts,
  priceTo,
  priceFrom,
  outputEstimates,
}) => {
  return (
    <div>
      <Flex justifyContent="space-between" alignItems="flex-start">
        <Flex alignItems="flex-start">
          <img style={{ width: "33px", height: "33px" }} src={currencyFrom.logo || YAY_TOKEN_GREEN} />
          <CurrencyName>
            <ShortName>{currencyFrom.shortName}</ShortName>
            <FullName>{currencyFrom.fullName}</FullName>
          </CurrencyName>
        </Flex>
        <Price>{priceFrom}</Price>
      </Flex>
      <Flex mt="31px" justifyContent="space-between" alignItems="flex-start">
        <Flex alignItems="flex-start">
          <img style={{ width: "33px", height: "33px" }} src={currencyTo.logo} />
          <CurrencyName>
            <ShortName>{currencyTo.shortName}</ShortName>
            <FullName>{currencyTo.fullName}</FullName>
          </CurrencyName>
        </Flex>
        <Price>{priceTo}</Price>
      </Flex>
      {showAcceptChanges ? (
        <SwapShowAcceptChanges justify="flex-start" gap="0px">
          <RowBetween>
            <RowFixed>
              <Text color={baseColors.green} fontWeight="500">
                {" "}
                {texts.priceUpdated}
              </Text>
            </RowFixed>
            <Button variant="green" onClick={onAcceptChanges}>
              {texts.accept}
            </Button>
          </RowBetween>
        </SwapShowAcceptChanges>
      ) : null}
      <Text mt="28px" fontSize="13px" color={baseColors.textGray}>
        {outputEstimates}
      </Text>
      {/*<AutoColumn justify="flex-start" gap="sm" style={{ padding: "24px 0 0 0px" }}>*/}
      {/*  <Text small color="textSubtle" textAlign="left" style={{ width: "100%" }}>*/}
      {/*    {texts.estimatedText}*/}
      {/*  </Text>*/}
      {/*</AutoColumn>*/}
      {recipient !== null ? (
        <AutoColumn justify="flex-start" gap="sm" style={{ padding: "12px 0 0 0px" }}>
          <Text color="textSubtle">{texts.recipientSentToText}</Text>
        </AutoColumn>
      ) : null}
    </div>
  );
};

export default SwapModalHeader;

const CurrencyName = styled.div`
  margin-left: 15px;
`;
const ShortName = styled(Text)`
  margin-bottom: 5px;
  font-weight: 500;
  font-size: 15px;
  line-height: 15px;
  letter-spacing: 0.5px;
`;
const FullName = styled(Text)`
  font-size: 11px;
  line-height: 14px;
  letter-spacing: 0.5px;
`;
const Price = styled(ShortName)`
  margin-bottom: 0;
`;

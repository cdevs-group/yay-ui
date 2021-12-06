import React from "react";
import { Button, Text, Flex, ArrowBigDownIcon } from "../../..";
import { AutoColumn } from "../../../components/Layouts/Column";
import { RowBetween, RowFixed } from "../../../components/Layouts/Row";
import { SwapModalHeaderProps } from "../types";
import { SwapShowAcceptChanges } from "./styleds";
import styled from "styled-components";
import { baseColors } from "../../../theme/colors";

const SwapModalHeader: React.FC<SwapModalHeaderProps> = ({
  recipient,
  showAcceptChanges,
  onAcceptChanges,
  outputEstimates,
  recipientSentToText,
  currencyIconFrom,
  currencyFromSymbol,
  currencyFromName,
  priceFrom,
  currencyIconTo,
  currencyToSymbol,
  currencyToName,
  priceTo,
  texts,
}) => {
  return (
    <div>
      <Flex justifyContent="space-between" alignItems="flex-start">
        <Flex alignItems="flex-start">
          {currencyIconFrom}
          <CurrencyName>
            <ShortName>{currencyFromSymbol}</ShortName>
            {currencyFromName && <FullName>{currencyFromName}</FullName>}
          </CurrencyName>
        </Flex>
        <Price>{priceFrom}</Price>
      </Flex>
      <Flex mt="31px" justifyContent="space-between" alignItems="flex-start">
        <Flex alignItems="flex-start">
          {currencyIconTo}
          <CurrencyName>
            <ShortName>{currencyToSymbol}</ShortName>
            {currencyToName && <FullName>{currencyToName}</FullName>}
          </CurrencyName>
        </Flex>
        <Price>{priceTo}</Price>
      </Flex>
      {showAcceptChanges ? (
        <SwapShowAcceptChanges justify="flex-start" gap="0px">
          <RowBetween>
            <RowFixed>
              <Text color={baseColors.green} fontWeight="500">
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
      {recipient !== null ? (
        <AutoColumn justify="flex-start" gap="sm" style={{ padding: "12px 0 0 0px" }}>
          <Text color="text">{recipientSentToText}</Text>
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
  font-weight: 500;
  font-size: 15px;
  line-height: 15px;
  letter-spacing: 0.5px;
`;
const FullName = styled(Text)`
  margin-top: 5px;
  font-size: 11px;
  line-height: 14px;
  letter-spacing: 0.5px;
`;
const Price = styled(ShortName)`
  margin-bottom: 0;
`;

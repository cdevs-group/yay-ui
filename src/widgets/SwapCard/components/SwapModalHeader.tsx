import React, { useMemo } from "react";
import { Trade, TradeType } from "@pancakeswap/sdk";
import { Button, Text, ErrorIcon, ArrowDownIcon } from "@pancakeswap/uikit";
import { Field } from "state/swap/actions";
import { useTranslation } from "contexts/Localization";
import { computeSlippageAdjustedAmounts, computeTradePriceBreakdown, warningSeverity } from "utils/prices";
import { AutoColumn } from "components/Layout/Column";
import { CurrencyLogo } from "components/Logo";
import { RowBetween, RowFixed } from "components/Layout/Row";
import truncateHash from "utils/truncateHash";

import { TruncatedText, SwapShowAcceptChanges } from "./styleds";

const SwapModalHeader: React.FC<SwapModalHeaderProps> = ({
  recipient,
  showAcceptChanges,
  onAcceptChanges,
  currencyLogoFrom,
  currencyLogoTo,
  texts,
  truncatedTextColorFrom,
  truncatedTextColorTo,
}) => {
  return (
    <AutoColumn gap="md">
      <RowBetween align="flex-end">
        <RowFixed gap="0px">
          {currencyLogoFrom}
          <TruncatedText fontSize="24px" color={truncatedTextColorFrom}>
            {texts.truncatedTextFrom}
          </TruncatedText>
        </RowFixed>
        <RowFixed gap="0px">
          <Text fontSize="24px" ml="10px">
            {texts.currencySymbolFrom}
          </Text>
        </RowFixed>
      </RowBetween>
      <RowFixed>
        <ArrowDownIcon width="16px" ml="4px" />
      </RowFixed>
      <RowBetween align="flex-end">
        <RowFixed gap="0px">
          {currencyLogoTo}
          <TruncatedText fontSize="24px" color={truncatedTextColorTo}>
            {texts.truncatedTextTo}
          </TruncatedText>
        </RowFixed>
        <RowFixed gap="0px">
          <Text fontSize="24px" ml="10px">
            {texts.currencySymbolTo}
          </Text>
        </RowFixed>
      </RowBetween>
      {showAcceptChanges ? (
        <SwapShowAcceptChanges justify="flex-start" gap="0px">
          <RowBetween>
            <RowFixed>
              <ErrorIcon mr="8px" />
              <Text bold> {texts.priceUpdated}</Text>
            </RowFixed>
            <Button onClick={onAcceptChanges}>{texts.accept}</Button>
          </RowBetween>
        </SwapShowAcceptChanges>
      ) : null}
      <AutoColumn justify="flex-start" gap="sm" style={{ padding: "24px 0 0 0px" }}>
        <Text small color="textSubtle" textAlign="left" style={{ width: "100%" }}>
          {texts.estimatedText}
        </Text>
      </AutoColumn>
      {recipient !== null ? (
        <AutoColumn justify="flex-start" gap="sm" style={{ padding: "12px 0 0 0px" }}>
          <Text color="textSubtle">{texts.recipientSentToText}</Text>
        </AutoColumn>
      ) : null}
    </AutoColumn>
  );
};

export default SwapModalHeader;

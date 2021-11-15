import React from "react";
import { Text } from "../../../components/Text";
import { AutoColumn } from "../../../components/Layout/Column";
import QuestionHelper from "../../../components/QuestionHelper";
import { RowBetween, RowFixed } from "../../../components/Layout/Row";
import SwapRoute from "./SwapRoute";

export enum Field {
  INPUT = "INPUT",
  OUTPUT = "OUTPUT",
}

export interface TradeSummaryTextProps {
  receivedOrSold: string;
  slippageAdjusted: string;
  transactionHelper: string;
  priceImpact: string;
  priceDifference: string;
  fee: string;
  amountFee: string;
  amountLP: string;
  amountTreasury: string;
  amountTowards: string;
  realizedLPFeeText: string;
}

export interface ErrorNodeText {
  errorText: React.ReactNode;
}

export interface TradeSummaryProps {
  texts: TradeSummaryTextProps;
  errorText: ErrorNodeText;
}

function TradeSummary({ texts, errorText }: TradeSummaryProps) {
  const {
    receivedOrSold,
    slippageAdjusted,
    transactionHelper,
    priceImpact,
    priceDifference,
    fee,
    amountFee,
    amountLP,
    amountTreasury,
    amountTowards,
    realizedLPFeeText,
  } = texts;

  return (
    <AutoColumn style={{ padding: "0 16px" }}>
      <RowBetween>
        <RowFixed>
          <Text fontSize="14px" color="textSubtle">
            {receivedOrSold}
          </Text>
          <QuestionHelper text={transactionHelper} ml="4px" />
        </RowFixed>
        <RowFixed>
          <Text fontSize="14px">{slippageAdjusted}</Text>
        </RowFixed>
      </RowBetween>
      <RowBetween>
        <RowFixed>
          <Text fontSize="14px" color="textSubtle">
            {priceImpact}
          </Text>
          <QuestionHelper text={priceDifference} ml="4px" />
        </RowFixed>
        {errorText}
      </RowBetween>

      <RowBetween>
        <RowFixed>
          <Text fontSize="14px" color="textSubtle">
            {fee}
          </Text>
          <QuestionHelper
            text={
              <>
                <Text mb="12px">{amountFee}</Text>
                <Text>- {amountLP}</Text>
                <Text>- {amountTreasury}</Text>
                <Text>- {amountTowards}</Text>
              </>
            }
            ml="4px"
          />
        </RowFixed>
        <Text fontSize="14px">{realizedLPFeeText}</Text>
      </RowBetween>
    </AutoColumn>
  );
}

export interface AdvancedSwapDetailsProps {
  trade?: any;
  lastTrade?: any;
  routeText: string;
  routingFromToken: string;
  tradeSummaryTexts: TradeSummaryTextProps;
  errorText: ErrorNodeText;
  showRoute: boolean;
}

export function AdvancedSwapDetails({
  trade,
  routeText,
  routingFromToken,
  tradeSummaryTexts,
  errorText,
  showRoute,
}: AdvancedSwapDetailsProps) {
  return (
    <AutoColumn gap="0px">
      {trade && (
        <>
          <TradeSummary texts={tradeSummaryTexts} errorText={errorText} />
          {showRoute && (
            <>
              <RowBetween style={{ padding: "0 16px" }}>
                <span style={{ display: "flex", alignItems: "center" }}>
                  <Text fontSize="14px" color="textSubtle">
                    {routeText}
                  </Text>
                  <QuestionHelper text={routingFromToken} ml="4px" />
                </span>
                <SwapRoute trade={trade} />
              </RowBetween>
            </>
          )}
        </>
      )}
    </AutoColumn>
  );
}

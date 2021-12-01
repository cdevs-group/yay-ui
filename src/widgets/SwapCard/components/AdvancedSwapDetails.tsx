import React from "react";
import { Text } from "../../../components/Text";
import { AutoColumn } from "../../../components/Layouts/Column";
import QuestionHelper from "../../../components/QuestionHelper";
import { RowBetween, RowFixed } from "../../../components/Layouts/Row";
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

export interface TradeSummaryProps {
  texts: TradeSummaryTextProps;
  errorText: React.ReactNode;
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
          <Text fontSize="11px">
            {receivedOrSold}
          </Text>
          <QuestionHelper text={transactionHelper} ml="8px" />
        </RowFixed>
        <RowFixed>
          <Text fontSize="11px">
            {slippageAdjusted}
          </Text>
        </RowFixed>
      </RowBetween>
      <RowBetween>
        <RowFixed>
          <Text fontSize="11px">
            {priceImpact}
          </Text>
          <QuestionHelper text={priceDifference} ml="8px" />
        </RowFixed>
        <Text fontSize="11px">
          {errorText}
        </Text>
      </RowBetween>

      <RowBetween>
        <RowFixed>
          <Text fontSize="11px">
            {fee}
          </Text>
          <QuestionHelper
            text={
              <>
                <Text mb="12px" fontSize="11px">
                  {amountFee}
                </Text>
                <Text fontSize="11px">- {amountLP}</Text>
                <Text fontSize="11px">- {amountTreasury}</Text>
                <Text fontSize="11px">- {amountTowards}</Text>
              </>
            }
            ml="8px"
          />
        </RowFixed>
        <Text fontSize="11px">{realizedLPFeeText}</Text>
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
  errorText: React.ReactNode;
  showRoute: boolean;
  unwrappedToken: any;
}

export function AdvancedSwapDetails({
  trade,
  routeText,
  routingFromToken,
  tradeSummaryTexts,
  errorText,
  showRoute,
  unwrappedToken,
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
                  <Text fontSize="11px" color="text">
                    {routeText}
                  </Text>
                  <QuestionHelper text={routingFromToken} ml="4px" />
                </span>
                <SwapRoute trade={trade} unwrappedToken={unwrappedToken} />
              </RowBetween>
            </>
          )}
        </>
      )}
    </AutoColumn>
  );
}
export default AdvancedSwapDetails;

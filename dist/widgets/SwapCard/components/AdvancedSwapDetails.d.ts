import React from "react";
export declare enum Field {
    INPUT = "INPUT",
    OUTPUT = "OUTPUT"
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
export interface AdvancedSwapDetailsProps {
    trade?: any;
    lastTrade?: any;
    routeText: string;
    routingFromToken: string;
    tradeSummaryTexts: TradeSummaryTextProps;
    errorText: React.ReactNode;
    showRoute: boolean;
}
export declare function AdvancedSwapDetails({ trade, routeText, routingFromToken, tradeSummaryTexts, errorText, showRoute, }: AdvancedSwapDetailsProps): JSX.Element;

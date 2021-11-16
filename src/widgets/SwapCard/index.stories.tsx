import React from "react";
import TradePrice from "./components/TradePrice";
import SwapRoute from "./components/SwapRoute";
import CurrencySearch from "./components/SerachCurrency/CurrencySearch";

export default {
  title: "Widgets/Swap",
  argTypes: {},
};

export const TradePriceBlock = () => {
  return (
    <div>
      <TradePrice price showInverted setShowInverted={() => null} show label="label" formattedPrice="1231" />
    </div>
  );
};

export const SwapRouteBlock = () => {
  const trade = {
    route: {
      path: [{ symbol: "eth" }, { symbol: "eth" }, { symbol: "eth" }, { symbol: "eth" }],
    },
  };

  return (
    <div>
      <SwapRoute trade={trade} />
    </div>
  );
};

export const CurrencySearchBlock = () => {
  return (
    <div>
      <CurrencySearch showImportView={() => null} filterTokens={1} />
    </div>
  );
};

import React from "react";
import { StyledBalanceMaxMini } from "./styleds";
import { Text } from "../../../components/Text";
import { AutoRenewIcon } from "../../../components/Svg";

export interface TradePriceProps {
  showInverted: boolean;
  setShowInverted: (showInverted: boolean) => void;
  show?: boolean;
  label?: string;
  formattedPrice?: string;
}

export default function TradePrice({ showInverted, setShowInverted, show, label, formattedPrice }: TradePriceProps) {
  return (
    <Text style={{ justifyContent: "center", alignItems: "center", display: "flex" }}>
      {show ? (
        <>
          {formattedPrice ?? "-"} {label}
          <StyledBalanceMaxMini onClick={() => setShowInverted(!showInverted)}>
            <AutoRenewIcon width="14px" color="#000" />
          </StyledBalanceMaxMini>
        </>
      ) : (
        "-"
      )}
    </Text>
  );
}

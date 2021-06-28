import { ReactNode } from "react";

export interface ExpireCardBTCProps {
  clodedBTC: string;
  lockedBRC: string;
  closedETH: string;
  lockedETH: string;
  prize: string;
  btc?: boolean;
}

export interface SetPositionCardBTCProps {
  onBack: (e: any) => void;
  children: ReactNode;
  inputValue: string;
  handleInputChange: (e: any) => void;
  showFieldWarning: boolean;
  inputProps: { disabled: boolean };
}

import { InputHTMLAttributes, ReactNode, ReactText } from "react";

export interface ItextExpired {
  collection?: string;
  payout?: string;
  locked?: string;
  closed?: string;
  prize?: string;
  last?: string;
}
export interface ExpireCardBTCProps {
  clodedBTC: string;
  lockedBRC: string;
  closedETH: string;
  lockedETH: string;
  prize: string;
  btc?: boolean;
  texts?: ItextExpired;
}
export interface Itext {
  payout?: string;
  entered?: string;
  prize?: string;
  setPosition?: string;
  commit?: string;
}

export interface SetPositionCardBTCProps {
  onBack: (e: any) => void;
  children: ReactNode;
  inputValue: ReactText;
  showFieldWarning?: boolean;
  onUserInput?: (input: string) => void;
  inputProps?: Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "placeholder" | "onChange">;
  handlePercentChange?: (sliderPercent: number) => void;
  disabledTab?: boolean;
  handleInputChange?: (e: any) => void;
  texts?: Itext;
}

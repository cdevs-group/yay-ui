import { InputHTMLAttributes, ReactNode, ReactText } from "react";
import { ITextsButtons } from "../Cards/types";
export interface ItextExpired {
    prize?: string;
    payout?: string;
    locked?: string;
    closed?: string;
}
export interface ITextActive {
    closed?: string;
    locked?: string;
    last?: string;
    prize?: string;
}
export interface ExpireCardBTCProps {
    clodedBTC: string;
    lockedBRC: string;
    closedETH: string;
    lockedETH: string;
    prize: string;
    btc?: boolean;
    texts?: ITextActive;
}
export interface Itext {
    entered?: string;
    prize?: string;
}
export interface SetPositionCardBTCProps {
    onBack: (e: any) => void;
    children: ReactNode;
    inputValue: ReactText;
    showFieldWarning?: boolean;
    onUserInput: (input: string) => void;
    inputProps?: Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "placeholder" | "onChange">;
    handlePercentChange: (sliderPercent: number) => void;
    disabledTab?: boolean;
    texts?: string;
    inputText?: string;
    textsButtons?: ITextsButtons;
}

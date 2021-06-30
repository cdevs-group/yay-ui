import { InputHTMLAttributes, ReactNode, ReactText } from "react";
import { BetPosition, Itexts } from "../Card/types";
export interface ItextExpired {
    prize?: string;
    closed?: string;
    locked?: string;
    payout?: string;
    last?: string;
    entered?: string;
}
export interface IProps {
    roundEpoch: string;
    time: number;
    payoutWin: string;
    payoutLose: string;
    handleSetPosition: (newPosition: BetPosition) => void;
    pool: string;
    hasEnteredUp: boolean;
    hasEnteredDown: boolean;
    disabledButton: boolean;
    disabledTimer?: boolean;
    ethButton: string;
    btcButton: string;
    textRow?: string;
    textsButtons?: Itexts;
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
export interface SetPositionCardProps {
    onBack: (e: any) => void;
    children: ReactNode;
    inputValue: ReactText;
    onUserInput: (input: string) => void;
    showFieldWarning?: boolean;
    inputProps?: Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "placeholder" | "onChange"> | {
        disabled: boolean;
    };
    handlePercentChange: (sliderPercent: number) => void;
    disabledTab?: boolean;
    texts?: string;
    inputText?: string;
    textsButtons?: Itexts;
}
export interface BalanceBlockProps {
    btc?: boolean;
    value: string;
}

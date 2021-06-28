import { InputHTMLAttributes, ReactNode, ReactText } from "react";
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
    inputValue: ReactText;
    showFieldWarning?: boolean;
    onUserInput: (input: string) => void;
    inputProps?: Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "placeholder" | "onChange">;
    handlePercentChange: (sliderPercent: number) => void;
    disabledTab: boolean;
}

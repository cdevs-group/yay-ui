/// <reference types="react" />
import { ButtonProps } from "../../../../components/Button/types";
interface IProps {
    onDismiss: () => void;
    texts: {
        title: string;
        balance: string;
        stake: string;
        daily: string;
        monthly: string;
        yearly: string;
        button: string;
        stakeTooltip: string;
        monthlyTooltip: string;
        yearlyTooltip: string;
        dailyTooltip: string;
    };
    lp: string;
    shortLp: string;
    balance: string | number;
    onUserInput: (input: string) => void;
    inputValue: string;
    pair: string;
    tokenImg0: string;
    tokenImg1: string;
    handleButton: () => void | Promise<void>;
    buttonProps: ButtonProps;
    tokenName: string;
    stakeUsd: string;
    dailyUsd: string;
    monthlyUsd: string;
    yearlyUsd: string;
    stakeToken: string | number;
    dailyToken: string | number;
    monthlyToken: string | number;
    yearlyToken: string | number;
}
declare const DepositFarmModal: ({ onDismiss, texts, lp, shortLp, balance, onUserInput, inputValue, pair, tokenImg0, tokenImg1, handleButton, tokenName, buttonProps, dailyUsd, monthlyUsd, yearlyUsd, dailyToken, monthlyToken, yearlyToken, stakeUsd, stakeToken, }: IProps) => JSX.Element;
export default DepositFarmModal;
export declare const StyledModal: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;

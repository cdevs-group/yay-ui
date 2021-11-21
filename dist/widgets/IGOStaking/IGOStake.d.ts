/// <reference types="react" />
interface IGOStakeProps {
    handleCooldown: () => void | Promise<void>;
    tabValue: number | string;
    valueInput: number | string;
    handleTab: (e: any) => void;
    disableStake: boolean;
    disableApprove: boolean;
    handleApprove: () => void | Promise<void>;
    handleStake: () => void | Promise<void>;
    tabsList: Array<string | number>;
    disabledInput?: boolean;
    iconBalanceInput?: string;
    onUserInput: (input: string) => void;
    cooldownDisabled: boolean;
    balance: string;
    time: number;
    isBlur?: boolean;
    texts: {
        stakeTitle: string;
        stakeDescription: string;
        balance: string;
        buttonApprove: string;
        buttonStake: string;
        unstakeTitle: string;
        unstakeDescription: string;
        cooldownButton: string;
        textTooltip: string;
        tooltip: string;
        currencyInput?: string;
        totalStake: string;
        myStake: string;
        avaible: string;
        tookPart: string;
    };
    totalValue: string | number;
    myStakeValue: string | number;
    avaibleValue: string | number;
    tookPartValue: string | number;
    loadingApprove?: boolean;
    loadingStake?: boolean;
}
declare const IGOStake: ({ totalValue, myStakeValue, avaibleValue, tookPartValue, time, cooldownDisabled, onUserInput, iconBalanceInput, disabledInput, balance, tabsList, handleStake, handleApprove, handleCooldown, texts, valueInput, tabValue, handleTab, disableStake, disableApprove, loadingStake, loadingApprove, isBlur, }: IGOStakeProps) => JSX.Element;
export default IGOStake;

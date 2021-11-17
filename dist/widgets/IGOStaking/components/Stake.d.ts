/// <reference types="react" />
interface IStakeProps {
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
    valueInput: string | number;
    onUserInput: (input: string) => void;
    iconBalanceInput?: string;
    disabledInput?: boolean;
    balance: string;
    tabsList: Array<number | string>;
    tabValue: number | string;
    handleTab: (e: any) => void;
    handleApprove: () => void | Promise<void>;
    handleStake: () => void | Promise<void>;
    disableStake: boolean;
    disableApprove: boolean;
}
declare const Stake: ({ disableApprove, disableStake, handleApprove, handleStake, tabValue, handleTab, tabsList, texts, onUserInput, valueInput, iconBalanceInput, disabledInput, balance, }: IStakeProps) => JSX.Element;
export default Stake;

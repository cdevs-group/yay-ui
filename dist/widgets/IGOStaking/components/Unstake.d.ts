/// <reference types="react" />
interface IUnstakeProps {
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
    cooldownDisabled: boolean;
    handleCooldown: () => void | Promise<void>;
    time: number;
    isBlur?: boolean;
}
declare const Unstake: ({ texts, cooldownDisabled, handleCooldown, time, isBlur }: IUnstakeProps) => JSX.Element;
export default Unstake;

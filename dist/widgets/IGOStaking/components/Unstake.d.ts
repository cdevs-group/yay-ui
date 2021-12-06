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
        restake: string;
        tooltipButton: string;
        countdown?: string;
        unstake?: string;
        claim?: string;
    };
    cooldownDisabled: boolean;
    handleCooldown: () => void | Promise<void>;
    time: number;
    isBlur?: boolean;
    loadingCooldown?: boolean;
    progress: number;
    restakeDisabed?: boolean;
    handleRestake?: () => void | Promise<void>;
    loadingRestake?: boolean;
    isStaker?: boolean;
}
declare const Unstake: ({ texts, cooldownDisabled, handleCooldown, time, isBlur, loadingCooldown, progress, restakeDisabed, handleRestake, loadingRestake, isStaker, }: IUnstakeProps) => JSX.Element;
export default Unstake;
export declare const StyledTooltip: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;

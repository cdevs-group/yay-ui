/// <reference types="react" />
import { ButtonProps } from "../../../../components/Button/types";
interface IProps {
    logoToken0: string;
    logoToken1: string;
    texts: {
        total: string;
        farming: string;
        startDate: string;
        endDate: string;
        yourStake: string;
        reward: string;
        deposit: string;
        claim: string;
        withdraw: string;
        exit: string;
        withdrawAndClaim: string;
        andEarn: string;
        getLp: string;
        tooltip: string;
    };
    tokenReward: string;
    startDate: string;
    endDate: string;
    yourStake: string;
    reward: string;
    lp: string;
    pair: string;
    total: string;
    apy: string;
    depositButtonProps?: ButtonProps;
    claimButtonProps?: ButtonProps;
    withdrawButtonProps?: ButtonProps;
    exitButtonProps?: ButtonProps;
    depositHandleClick: () => void | Promise<void>;
    claimHandleClick: () => void | Promise<void>;
    widthDrawHandleClick: () => void | Promise<void>;
    exitHandleClick: () => void | Promise<void>;
    getLpHandleClick: () => void | Promise<void>;
}
declare const StakingCard: ({ logoToken0, logoToken1, texts, tokenReward, startDate, endDate, yourStake, reward, lp, pair, total, apy, exitButtonProps, withdrawButtonProps, claimButtonProps, depositButtonProps, depositHandleClick, claimHandleClick, widthDrawHandleClick, exitHandleClick, getLpHandleClick, }: IProps) => JSX.Element;
export default StakingCard;

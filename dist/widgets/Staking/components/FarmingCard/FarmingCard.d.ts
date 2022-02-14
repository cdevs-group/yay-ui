import { ReactNode } from "react";
import { ButtonProps } from "../../../../components/Button/types";
interface IProps {
    logoToken0: string | ReactNode;
    logoToken1: string | ReactNode;
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
    tokenReward: string | ReactNode;
    startDate: string | ReactNode;
    endDate: string | ReactNode;
    yourStake: string | ReactNode;
    reward: string | ReactNode;
    lp: string | ReactNode;
    pair: string | ReactNode;
    total: string | ReactNode;
    apy: string | ReactNode;
    buttonsFooter?: ReactNode;
    depositButtonProps?: ButtonProps;
    claimButtonProps?: ButtonProps;
    withdrawButtonProps?: ButtonProps;
    exitButtonProps?: ButtonProps;
    depositHandleClick: () => void | Promise<void>;
    claimHandleClick: () => void | Promise<void>;
    widthDrawHandleClick: () => void | Promise<void>;
    exitHandleClick: () => void | Promise<void>;
    getLpHandleClick: () => void | Promise<void>;
    getLPTokenNode?: ReactNode;
}
declare const FarmingCard: ({ logoToken0, logoToken1, texts, tokenReward, startDate, endDate, yourStake, reward, lp, pair, total, apy, buttonsFooter, exitButtonProps, withdrawButtonProps, claimButtonProps, depositButtonProps, depositHandleClick, claimHandleClick, widthDrawHandleClick, exitHandleClick, getLpHandleClick, getLPTokenNode }: IProps) => JSX.Element;
export default FarmingCard;

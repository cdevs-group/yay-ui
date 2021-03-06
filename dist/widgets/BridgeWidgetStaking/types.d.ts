import { ReactNode } from "react";
export interface BridgeStepProps {
    tabs: string[];
    onUserInput: (input: any) => void;
    inputDisabled?: boolean;
    value: string | number;
    iconBalanceInput?: ReactNode;
    iconNetwork1?: ReactNode;
    iconNetwork2?: ReactNode;
    texts: {
        nameNetwork1?: string;
        nameNetwork2?: string;
        from: string;
        to: string;
        commit: string;
        currency: string;
        buttonLeft: string;
        buttonTransfer: string;
    };
    buttonLeft: ReactNode;
    buttonRight: ReactNode;
    hiddenToBlock?: boolean;
}
export interface ApproveStakingBPTProps {
    texts: {
        titleToken: string;
        nameToken: string;
        totalStake: string;
        totalBPT: string;
        totalAVAX: string;
        buttonApprove: string;
        waitingApprove: string;
        infoLink: string;
        contactLink: string;
        addTokenLink: string;
    };
    isLoad: boolean;
    handleApprove: () => void;
    handleAddToken: () => void;
    imgToken1?: string;
    imgToken2?: string;
    stakingBalance?: string;
    BPTBalance?: string;
    AVAXBalance?: string;
    hrefSeeTokenInfo: string;
    hrefViewContract: string;
}

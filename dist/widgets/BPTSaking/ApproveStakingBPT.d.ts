/// <reference types="react" />
interface ApproveStakingBPTProps {
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
}
declare const ApproveStakingBPT: ({ handleAddToken, texts, isLoad, imgToken1, imgToken2, stakingBalance, BPTBalance, AVAXBalance, handleApprove, }: ApproveStakingBPTProps) => JSX.Element;
export default ApproveStakingBPT;

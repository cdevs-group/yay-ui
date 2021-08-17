/// <reference types="react" />
interface IProps {
    data: {
        totalRaised: string;
        total: string;
    };
    handleClaimTokens: () => void;
    texts: {
        title: string;
        button: string;
        totalRaised: string;
        total: string;
    };
}
declare const ClaimTokens: ({ data, texts, handleClaimTokens }: IProps) => JSX.Element;
export default ClaimTokens;

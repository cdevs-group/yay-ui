import React from "react";
interface IProps {
    text: {
        title: string;
        description: string;
        button: string;
    };
    canClaim?: boolean;
    handleClaimBlock?: () => void;
    isLoading?: boolean;
    endIcon?: React.ReactNode;
}
declare const ClaimBlock: ({ text, canClaim, isLoading, endIcon, handleClaimBlock }: IProps) => JSX.Element;
export default ClaimBlock;

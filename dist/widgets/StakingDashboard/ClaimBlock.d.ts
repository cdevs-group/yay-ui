import React from "react";
interface IProps {
    text: {
        title: string;
        description: string;
        button: string;
    };
    canClaim?: boolean;
    onClick?: () => void;
    isLoading?: boolean;
    endIcon?: React.ReactNode;
}
declare const ClaimBlock: ({ text, canClaim, isLoading, endIcon }: IProps) => JSX.Element;
export default ClaimBlock;

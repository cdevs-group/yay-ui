import React from "react";
interface CollectRoundWinningsModalProps {
    onDismiss?: () => void;
    isLoading?: boolean;
    handleClick?: () => void;
    title: string;
    collectText?: string;
    bnbText?: object;
    convert?: object;
    buttonText: string;
}
declare const CollectRoundWinningsModal: React.FC<CollectRoundWinningsModalProps>;
export default CollectRoundWinningsModal;

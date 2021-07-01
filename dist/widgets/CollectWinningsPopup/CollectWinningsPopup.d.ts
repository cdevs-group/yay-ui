import React from "react";
interface CollectWinningsPopupProps {
    handleOpenHistory?: () => void;
    handleClick?: () => void;
    btnText: string;
    img?: string;
}
declare const CollectWinningsPopup: React.FC<CollectWinningsPopupProps>;
export default CollectWinningsPopup;

import React, { RefObject } from "react";
interface CollectWinningsPopupProps {
    handleOpenHistory?: () => void;
    handleClick?: () => void;
    btnText: string;
    img?: string;
    ref?: RefObject<HTMLDivElement>;
}
declare const CollectWinningsPopup: React.FC<CollectWinningsPopupProps>;
export default CollectWinningsPopup;

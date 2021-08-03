import React, { RefObject } from "react";
interface GiftPopupProps {
    handleOpenForm?: () => void;
    btnText: string;
    img?: string;
    ref?: RefObject<HTMLDivElement>;
}
declare const GiftPopup: React.FC<GiftPopupProps>;
export default GiftPopup;

import React from "react";
interface ChartDisclaimerProps {
    handleConfirm?: () => void;
    topText: string;
    bottomText: string;
    btnText: string;
    href: string;
    linkText: string;
}
declare const ChartDisclaimer: React.FC<ChartDisclaimerProps>;
export default ChartDisclaimer;

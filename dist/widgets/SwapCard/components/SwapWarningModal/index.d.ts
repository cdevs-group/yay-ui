import React from "react";
import { SafemoonWarningProps } from "./SafemoonWarning";
import { AcknowledgementTexsts } from "./Acknowledgement";
interface SwapWarningModalProps {
    swapCurrency: any;
    onDismiss?: () => void;
    SwapWarningTokensConfig: any;
    bondlyWarningText: string;
    noticeForTradingText: string;
}
declare const SwapWarningModal: React.FC<SwapWarningModalProps & SafemoonWarningProps & AcknowledgementTexsts>;
export default SwapWarningModal;

import React from "react";
export interface AcknowledgementTexsts {
    buttonText: string;
    understandngText: string;
}
interface AcknowledgementProps extends AcknowledgementTexsts {
    handleContinueClick?: () => void;
}
declare const Acknowledgement: React.FC<AcknowledgementProps>;
export default Acknowledgement;

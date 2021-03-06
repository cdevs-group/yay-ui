import React from "react";
interface Props {
    title: string;
    buttonText: string;
    description: string | React.ReactNode;
    handleConfirm?: () => void;
    disabledButton?: boolean;
    errorPadding?: boolean;
    onDismiss?: () => void;
}
declare const CongratulateModal: React.FC<Props>;
export default CongratulateModal;

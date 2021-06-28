import React from "react";
interface Props {
    onDismiss?: () => void;
    title: string;
    textCheckbox1: string;
    textCheckbox2: string;
    continueText: string;
    description: string;
    handleConfirm?: () => void;
    disabledButton?: boolean;
    handleChangeCheckbox1?: () => void;
    handleChangeCheckbox2?: () => void;
    checkedCheckbox1?: boolean;
    checkedCheckbox2?: boolean;
}
declare const WelcomeModal: React.FC<Props>;
export default WelcomeModal;

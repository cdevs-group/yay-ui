import React, { ChangeEvent } from "react";
interface PropsGiftFormModal {
    onDismiss?: () => void;
    title: string;
    textCheckbox: string;
    continueText: string;
    description: string;
    handleConfirm?: () => void;
    disabledButton?: boolean;
    handleChangeCheckbox?: () => void;
    checkedCheckbox?: boolean;
    labelInput1: string;
    labelInput2: string;
    placeholderInput1: string;
    placeholderInput2: string;
    onChangeInput1?: (e: ChangeEvent<HTMLInputElement>) => void;
    onChangeInput2?: (e: ChangeEvent<HTMLInputElement>) => void;
    valueInput1?: string | number;
    valueInput2?: string | number;
    linkText: string;
}
declare const GiftFormModal: React.FC<PropsGiftFormModal>;
export default GiftFormModal;

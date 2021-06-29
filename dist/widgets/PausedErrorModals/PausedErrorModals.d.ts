import React from "react";
interface Props {
    title: string;
    buttonText: string;
    descriptionTop: string;
    descriptionBottom?: string;
    handleConfirm?: () => void;
    disabledButton?: boolean;
    errorPadding?: boolean;
}
declare const PausedErrorModals: React.FC<Props>;
export default PausedErrorModals;

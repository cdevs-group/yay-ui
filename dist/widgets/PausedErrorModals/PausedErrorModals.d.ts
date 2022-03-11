import React from "react";
import { Variant } from "../../components/Button/types";
interface Props {
    title: string;
    buttonText: string;
    descriptionTop: string | React.ReactNode;
    descriptionBottom?: string | React.ReactNode;
    handleConfirm?: () => void;
    disabledButton?: boolean;
    errorPadding?: boolean;
    buttonVariant?: Variant;
    img?: string;
    marginImg?: string;
    hideCloseButton?: boolean;
    onDismiss?: () => void;
    loaderButton?: boolean;
}
declare const PausedErrorModals: React.FC<Props>;
export default PausedErrorModals;

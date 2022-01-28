import React from "react";
import { Variant } from "../../components/Button/types";
interface Props {
    title: string;
    buttonText: string;
    descriptionTop: string;
    descriptionBottom?: string;
    handleConfirm?: () => void;
    disabledButton?: boolean;
    errorPadding?: boolean;
    buttonVariant?: Variant;
}
declare const PausedErrorModals: React.FC<Props>;
export default PausedErrorModals;

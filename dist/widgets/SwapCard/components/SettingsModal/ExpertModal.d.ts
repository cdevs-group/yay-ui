import { Dispatch, SetStateAction } from "react";
import { IText } from "./types";
declare const ExpertModal: ({ onDismiss, setShowConfirmExpertModal, setShowExpertModeAcknowledgement, texts, toggleExpertModeFunc, isRememberChecked, setIsRememberChecked, }: {
    onDismiss?: (() => void) | undefined;
    setShowConfirmExpertModal: any;
    setShowExpertModeAcknowledgement: any;
    texts: IText;
    toggleExpertModeFunc: any;
    isRememberChecked: boolean;
    setIsRememberChecked: Dispatch<SetStateAction<boolean>>;
}) => JSX.Element;
export default ExpertModal;

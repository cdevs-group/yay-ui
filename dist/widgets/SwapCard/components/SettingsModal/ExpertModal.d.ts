import { Dispatch, SetStateAction } from "react";
import { IText } from "./types";
declare const ExpertModal: ({ setShowConfirmExpertModal, setShowExpertModeAcknowledgement, texts, toggleExpertModeFunc, isRememberChecked, setIsRememberChecked, }: {
    setShowConfirmExpertModal: any;
    setShowExpertModeAcknowledgement: any;
    texts: IText;
    toggleExpertModeFunc: any;
    isRememberChecked: boolean;
    setIsRememberChecked: Dispatch<SetStateAction<boolean>>;
}) => JSX.Element;
export default ExpertModal;

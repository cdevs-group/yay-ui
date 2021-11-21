import { Dispatch, SetStateAction } from "react";
export interface IText {
    settings?: string;
    disableMultihops?: string;
    funSoudsToMake?: string;
    expertModeDescription?: string;
    onlyUseThis?: string;
    turnOnExpert?: string;
    enterValidSlippage?: string;
    transactionMayFail?: string;
    transactionMayFront?: string;
    txDeadline?: string;
    yourTransactionRevent?: string;
    defaultTransaction?: string;
    adjustGasPrice?: string;
    slippageTollerance: string;
    expert: string;
    dontAskAgain: string;
    pleaseTypeThe: string;
}
export interface SettingsModalProps {
    onDismiss: any;
    texts: IText;
    showExpertModeAcknowledgement: boolean;
    setShowExpertModeAcknowledgement: Dispatch<SetStateAction<boolean>>;
    expertMode: boolean;
    toggleExpertMode: Dispatch<SetStateAction<boolean>>;
    singleHopOnly: boolean;
    setSingleHopOnly: Dispatch<SetStateAction<boolean>>;
    showConfirmExpertModal: boolean;
    setShowConfirmExpertModal: Dispatch<SetStateAction<boolean>>;
    gasTabs: string[];
    slippageTabs: string[];
    isRememberChecked: boolean;
    setIsRememberChecked: Dispatch<SetStateAction<boolean>>;
    activeTabGas: number | null;
    activeTabSlippage: number | null;
    toggleTabGas: (e: any) => void;
    toggleTabSlippage: (e: any) => void;
    slippageInput: string;
    deadlineInput: string;
    handleSlippageInput: (e: any) => void;
    handleDeadlineInput: (e: any) => void;
}

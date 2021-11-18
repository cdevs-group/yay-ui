import { Dispatch, ReactNode, SetStateAction } from "react";

export interface IText {
  global: string;
  settings: string;
  swapLiquid: string;
  bypasses: string;
  disableMultihops: string;
  restricsSwaps: string;
  funSoudsToMake: string;
  expertMode: string;
  expertModeDescription: string;
  onlyUseThis: string;
  pleaseTypeThe: string;
  turnOnExpert: string;
  settingsHightSplippage: string;
  enterValidSlippage: string;
  transactionMayFail: string;
  transactionMayFront: string;
  txDeadline: string;
  yourTransactionRevent: string;
  defaultTransaction: string;
  adjustGasPrice: string;
  standard: string;
  fast: string;
  instant: string;
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
  userSlippageTolerance: number;
  setUserSlippageTolerance: Dispatch<SetStateAction<number>>;
  ttl: number;
  setTtl: Dispatch<SetStateAction<number>>;
  slippageInput: string;
  setSlippageInput: Dispatch<SetStateAction<string>>;
  deadlineInput: string;
  setDeadlineInput: Dispatch<SetStateAction<string>>;
  gasPrice: string;
  setGasPrice: Dispatch<SetStateAction<string>>;
}

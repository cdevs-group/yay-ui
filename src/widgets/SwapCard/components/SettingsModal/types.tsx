export interface IText {
  global?: string;
  settings?: string;
  swapLiquid?: string;
  bypasses?: string;
  disableMultihops?: string;
  restricsSwaps?: string;
  funSoudsToMake?: string;
  expertMode?: string;
  expertModeDescription?: string;
  onlyUseThis?: string;
  pleaseTypeThe?: string;
  turnOnExpert?: string;
  settingsHightSplippage?: string;
  enterValidSlippage?: string;
  transactionMayFail?: string;
  transactionMayFront?: string;
  txDeadline?: string;
  yourTransactionRevent?: string;
  defaultTransaction?: string;
  adjustGasPrice?: string;
  standard?: string;
  fast?: string;
  instant?: string;
}

export interface SettingsModalProps {
  onDismiss: any;
  texts: IText;
}

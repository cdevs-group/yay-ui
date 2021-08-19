export interface BridgeStep1Props {
  onUserInput: (input: any) => void;
  value: string | number;
  inputError?: boolean;
  toMax: any;
  texts: {
    from: string;
    to: string;
    fee: string;
    button: string;
  };
  balanceText: {
    message1: string;
    message2: string;
  };
  fee: string;
  fromChange: boolean;
  switchHandler: () => void;
  handleButton: any;
}

export interface BridgeStep2Props {
  isErrorProgress?: boolean;
  step: number;
  textsProgress1: {
    waiting: string;
    confirmations: string;
    checkIt: string;
    error: string;
    start: string;
    step1: string;
    step2: string;
    finish: string;
  };
}

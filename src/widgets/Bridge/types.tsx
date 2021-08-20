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
  isLoadGas?: boolean;
  isErrorProgress?: boolean;
  progress1: number;
  isError?: boolean;
  timer1: string;
  timer2: string;
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
  textsProgress2: {
    waiting: string;
    start: string;
    final: string;
  };
  progress2: number;
  texts: {
    title: string;
    token: string;
    addToken: string;
    amount: string;
    network: string;
    timer: string;
    coast: string;
  };
}

import { ReactNode } from "react";

export interface BridgeStep1Props {
  tabs: string[];
  onUserInput: (input: any) => void;
  value: string | number;
  iconBalanceInput?: ReactNode;
  handleButtonLeft: () => void;
  handleButtonTransfer: () => void;
  iconNetwork1?: ReactNode;
  iconNetwork2?: ReactNode;
  texts: {
    nameNetwork1?: string;
    nameNetwork2?: string;
    from: string;
    to: string;
    commit: string;
    currency: string;
    buttonLeft: string;
    buttonTransfer: string;
  };
  disabledBtnLeft: boolean;
  disabledBtnTransfer: boolean;
}

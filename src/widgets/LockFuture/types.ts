import { ReactNode } from "react";

export interface ICardChoose {
  texts: {
    title: string;
    choose: string;
    balance: string;
    currency?: string;
  };
  tabs: { value: number; disabled: boolean }[];
  valueInput: number;
  buttonLeft: ReactNode;
  buttonRight: ReactNode;
  onUserInput: (el: number) => void;
  balance: string;
  iconCurrency?: ReactNode;
}

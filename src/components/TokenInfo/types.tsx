import { ReactNode } from "react";

export interface TokenInfoProps {
  textsInfo: {
    address: string;
    token: string;
    network: string;
    textCopy: string;
    title: string;
  };
  addTokenIcon?: ReactNode;
  supple?: boolean;
  addTokenHandler: () => void;
  BSCSkanHandler: () => void;
}

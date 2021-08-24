import { ReactNode } from "react";

export interface TokenInfoProps {
  textsInfo: {
    address: string;
    token: string;
    network: string;
    textCopy: string;
  };
  addTokenIcon?: ReactNode;
  margin?: string;
  addTokenHandler: () => void;
  BSCSkanHandler: () => void;
}

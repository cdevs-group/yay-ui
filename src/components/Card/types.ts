import { ReactNode } from "react";

export interface CardHeaderProps {
  icon?: ReactNode;
  coin: string;
  upDown: string;
  num: string;
  greenColor: boolean;
  whiteCoin: boolean;
  svg: string;
}

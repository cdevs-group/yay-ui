import { ChangeEvent } from "react";

export interface InputSearchProp {
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
  width?: string;
}

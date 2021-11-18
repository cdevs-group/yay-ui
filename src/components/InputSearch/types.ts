import { ChangeEvent, InputHTMLAttributes, Ref, RefObject } from "react";

export interface InputSearchProp extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
  iconLess?: boolean;
  width?: string;
  height?: string;
  name: string;
  ref?: Ref<HTMLInputElement>
}

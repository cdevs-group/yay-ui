import { ChangeEvent, InputHTMLAttributes, ReactNode, Ref, RefObject } from "react";
import { BackgroundProps, SpaceProps } from "styled-system";

export interface InputSearchProp extends InputHTMLAttributes<HTMLInputElement>, BackgroundProps, SpaceProps {
  placeholder: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
  iconLess?: boolean;
  width?: string;
  height?: string;
  name: string;
  ref?: Ref<HTMLInputElement>;
  icon?: ReactNode;
  disabled?: boolean;
}

import { ChangeEvent, InputHTMLAttributes, ReactNode, Ref, RefObject } from "react";
import { BackgroundProps, BorderProps, SpaceProps } from "styled-system";

export interface InputSearchProp
  extends InputHTMLAttributes<HTMLInputElement>,
    BackgroundProps,
    SpaceProps,
    BorderProps {
  placeholder: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
  iconLess?: boolean;
  width?: string;
  height?: string;
  name: string;
  ref?: Ref<HTMLInputElement>;
  innerRef?: Ref<HTMLInputElement>;
  icon?: ReactNode;
  disabled?: boolean;
}

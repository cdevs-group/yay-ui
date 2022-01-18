import { ReactNode } from "react";
import { ButtonProps } from "../../../components/Button/types";

export interface IRegisterProfileProps {
  title?: ReactNode | string;
  description?: ReactNode | string;
  handleSubmit?: (e?: any) => void | Promise<void>;
  onClick?: (e?: any) => void | Promise<void>;
  onChange: (e: any) => void;
  inputValue1: string;
  inputValue2: string;
  inputName1: string;
  inputName2: string;
  inputError1: string;
  inputError2: string;
  loginInputDisabled?: boolean;
  sponsorInputDisabled?: boolean;
  texts: {
    inputTitle1: string;
    inputTitle2: string;
    inputPlaceholder1: string;
    inputPlaceholder2: string;
    buttonText: string;
  };
  buttonProps: ButtonProps;
}

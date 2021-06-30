import { ReactNode } from "react";
import { LangType } from "../../widgets/Menu/types";

export interface LanguagesProps {
  currentLang: string;
  langs: Array<string>;
  setLang: any;
}

export interface DropDownProps {
  icon: ReactNode;
  open: boolean;
  setOpen: (value: boolean) => void;
  children: ReactNode;
}

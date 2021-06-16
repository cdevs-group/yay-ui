import { Login } from "../WalletModal/types";

export const sizes = {
  MD: "md",
  LG: "lg",
  XL: "xl",
  XXL: "xxl",
} as const;

export interface LinkHeaderProps{
  name:string,
  url:string, 
  size?:string,
  className?:string
}

export interface AccProps{
  isAuth:boolean,
  accName?:string
}

export interface Profile {
  username?: string;
  image?: string;
  profileLink: string;
  noProfileLink: string;
  showPip?: boolean;
}

export interface Language {
  code: string;
  language: string;
  locale: string;
}
export interface MenuEntry {
  name: string;
  url: string;
}

export interface PanelProps {
  isDark: boolean;
  toggleTheme: (isDark: boolean) => void;
  currentLang: string;
  langs: Language[];
  setLang: (lang: Language) => void;
  links: Array<MenuEntry>;
}

export interface NavProps extends PanelProps {
  account?: string;
  login: Login;
  profile?: Profile;
  logout: () => void;
}
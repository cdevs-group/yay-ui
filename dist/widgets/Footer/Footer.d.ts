/// <reference types="react" />
import { IText, IDataLinks, IDataSocial } from "./types";
declare const Footer: ({ valueInput, handleInput, handleBuy, handleSignIn, texts, aboutData, companyData, socialData, tokenData, }: {
    valueInput: string;
    handleInput: (e: any) => void;
    handleBuy: () => void | Promise<void>;
    handleSignIn: () => void | Promise<void>;
    texts: IText;
    tokenData: IDataLinks;
    aboutData: IDataLinks;
    companyData: IDataLinks;
    socialData: IDataSocial;
}) => JSX.Element;
export default Footer;
import { ReactNode } from "react";
export interface InjectedImportTokenProps {
    tokens: any[];
    handleCurrencySelect?: (currency: any) => void;
    children: ReactNode;
    texts: {
        createToken: string;
        purchaseToken: string;
        understanding: string;
        importText: string;
    };
    addToken: (token: any) => void;
}
declare function ImportToken({ tokens, handleCurrencySelect, children, texts, addToken }: InjectedImportTokenProps): JSX.Element;
export default ImportToken;

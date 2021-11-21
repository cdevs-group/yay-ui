import { ReactNode } from "react";
export interface InjectedImportTokenProps {
    tokens: any[];
    handleCurrencySelect?: (currency: any) => void;
    listLogo: ReactNode;
    texts: {
        createToken: string;
        purchaseToken: string;
        via: string;
        unknownSource: string;
        viewOnbscScan: string;
        understanding: string;
        importText: string;
    };
    addToken: (token: any) => void;
    chainId: number;
    inactiveTokenList: any;
    truncateHash: any;
    bscScanLink: string;
}
declare function ImportToken({ tokens, handleCurrencySelect, listLogo, texts, addToken, chainId, inactiveTokenList, truncateHash, bscScanLink, }: InjectedImportTokenProps): JSX.Element;
export default ImportToken;

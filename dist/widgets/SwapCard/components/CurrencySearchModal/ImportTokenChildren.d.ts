import { ReactNode } from "react";
export interface InjectedImportTokenProps {
    token: any;
    address: any;
    listLogo: ReactNode;
    texts: {
        via: string;
        unknownSource: string;
        viewOnbscScan: string;
    };
    hrefLink: string;
    chainId: number;
    inactiveTokenList: any;
}
declare function ImportTokenChildren({ token, address, listLogo, texts, hrefLink, chainId, inactiveTokenList, }: InjectedImportTokenProps): JSX.Element;
export default ImportTokenChildren;

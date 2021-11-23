import { ReactNode } from "react";
export default function CommonBases({ onSelect, selectedCurrency, texts, currencyLogoETHER, currencyEquals, ETHER, children, }: {
    selectedCurrency?: any | null;
    onSelect: (currency: any) => void;
    texts: {
        common: string;
        token: string;
    };
    currencyEquals?: any;
    currencyLogoETHER: ReactNode;
    ETHER: any;
    children: ReactNode;
}): JSX.Element;

import { ReactNode } from "react";
export default function CommonBases({ chainId, onSelect, selectedCurrency, texts, CurrencyLogo, currencyEquals, SUGGESTED_BASES, }: {
    chainId?: any;
    selectedCurrency?: any | null;
    onSelect: (currency: any) => void;
    texts: any;
    currencyEquals?: any;
    SUGGESTED_BASES?: any;
    CurrencyLogo: ReactNode;
}): JSX.Element;

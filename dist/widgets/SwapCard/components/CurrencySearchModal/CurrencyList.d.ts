import { CSSProperties, ReactNode } from "react";
export declare const LightGreyCard: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, import("../../../../components/Box").BoxProps & {
    width?: string | undefined;
    padding?: string | undefined;
    border?: string | undefined;
    borderRadius?: string | undefined;
}, never>;
export declare function CurrencyRow({ currency, onSelect, isSelected, otherSelected, style, account, balance, hasBalanse, customAdded, isOnSelectedList, key, CurrencyLogo, }: {
    currency: any;
    onSelect: () => void;
    isSelected: boolean;
    otherSelected: boolean;
    style: CSSProperties;
    account: any;
    balance: ReactNode;
    hasBalanse: boolean;
    customAdded: any;
    isOnSelectedList: any;
    key: any;
    CurrencyLogo: ReactNode;
}): JSX.Element;
export default function CurrencyList({ height, fixedListRef, currencyKey, itemData, row, }: {
    height: number;
    fixedListRef: any;
    currencyKey: any;
    itemData: any[];
    row: any;
}): JSX.Element;

import { CSSProperties, ReactNode } from "react";
export declare const LightGreyCard: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, import("../../../../components/Box").BoxProps & {
    width?: string | undefined;
    padding?: string | undefined;
    border?: string | undefined;
    borderRadius?: string | undefined;
}, never>;
export declare function CurrencyRow({ currency, onSelect, isSelected, otherSelected, style, account, balance, balanceComponent, customAdded, isOnSelectedList, keyID, CurrencyLogo, }: {
    currency: any;
    onSelect: () => void;
    isSelected: boolean;
    otherSelected: boolean;
    style: CSSProperties;
    account: any;
    balanceComponent: ReactNode;
    balance: any;
    customAdded: any;
    isOnSelectedList: any;
    keyID: any;
    CurrencyLogo: ReactNode;
}): JSX.Element;
export default function CurrencyList({ height, fixedListRef, currencyKey, itemData, row, }: {
    height: number;
    fixedListRef: any;
    currencyKey: any;
    itemData: any[];
    row: any;
}): JSX.Element;

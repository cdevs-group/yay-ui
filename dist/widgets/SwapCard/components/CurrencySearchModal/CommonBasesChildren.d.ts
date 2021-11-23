import { ReactNode } from "react";
export default function CommonBasesChildren({ onSelect, currencyLogoToken, selected, token, }: {
    onSelect: (currency: any) => void;
    currencyLogoToken: ReactNode;
    selected: any;
    token: any;
}): JSX.Element;

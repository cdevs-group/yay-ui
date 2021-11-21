import React, { CSSProperties } from "react";
export default function ImportRow({ token, style, dim, list, isAdded, isActive, currencyLogo, listLogo, handleClickImport, texts, }: {
    token: any;
    style?: CSSProperties;
    dim?: boolean;
    list: any;
    isAdded?: boolean;
    isActive?: boolean;
    currencyLogo: React.ReactNode;
    listLogo: React.ReactNode;
    handleClickImport: () => void;
    texts: {
        via: string;
        import: string;
        active: string;
    };
}): JSX.Element;

import React from "react";
export default function ManageTokenList({ currencyLogo, linkHref, chainId, removeToken, token, }: {
    currencyLogo: React.ReactNode;
    linkHref: string;
    token: any;
    chainId: number;
    removeToken: (chainId: number, address: string) => void;
}): JSX.Element;

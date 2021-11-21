import React from "react";
export default function ManageTokens({ handleInput, searchQuery, handleRemoveAll, currencyLogo, importRow, linkHref, userAddedTokens, chainId, isAddressValid, removeToken, texts, }: {
    handleInput: (e: any) => void;
    searchQuery: string;
    handleRemoveAll: () => void;
    currencyLogo: React.ReactNode;
    importRow: React.ReactNode;
    linkHref: string;
    userAddedTokens: any[];
    chainId: number;
    isAddressValid: boolean;
    removeToken: (chainId: number, address: string) => void;
    texts: {
        customToken: string;
        customTokens: string;
        clearAll: string;
        errorValidText: string;
    };
}): JSX.Element;

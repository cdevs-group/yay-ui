import React from "react";
export default function ManageTokens({ handleInput, searchQuery, handleRemoveAll, importRow, userAddedTokens, isAddressValid, texts, tokenList, }: {
    handleInput: (e: any) => void;
    searchQuery: string;
    handleRemoveAll: () => void;
    importRow: React.ReactNode;
    userAddedTokens: any[];
    isAddressValid: string | boolean;
    texts: {
        customToken: string;
        customTokens: string;
        clearAll: string;
        errorValidText: string;
    };
    tokenList: any;
}): JSX.Element;

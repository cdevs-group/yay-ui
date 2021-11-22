import React from "react";
export default function Manage({ manageLists, manageTokens, texts, }: {
    manageLists: React.ReactNode;
    manageTokens: React.ReactNode;
    texts: {
        lists: string;
        tokens: string;
    };
}): JSX.Element;

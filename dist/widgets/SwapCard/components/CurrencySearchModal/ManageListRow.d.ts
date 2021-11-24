import React, { ReactNode } from "react";
declare function ManageListRow({ tooltipVisible, tooltip, targetRef, isActive, onChangeBaseToggle, list, listUrl, listLogo, texts, }: {
    tooltipVisible: boolean;
    tooltip: ReactNode;
    targetRef: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
    isActive: boolean;
    onChangeBaseToggle: () => void;
    list: any;
    listUrl: string;
    listLogo: ReactNode;
    texts: {
        tokens: string;
    };
}): JSX.Element;
export default ManageListRow;

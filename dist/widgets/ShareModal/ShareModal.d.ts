import React from "react";
interface Props {
    onDismiss?: () => void;
    texts: {
        title: string;
        copyLink: string;
    };
    buttonsSocial?: React.ReactNode;
    copyLink: string;
}
export declare const Button: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, {}, never>;
declare const ShareModal: React.FC<Props>;
export default ShareModal;

import React from "react";
import { InjectedModalProps } from "../../../../widgets/Modal";
export interface UnsupportedModalProps extends InjectedModalProps {
    tokens: any[];
    srcs: string[];
    isEther: boolean;
    chainId: any;
    getBscScanLink: any;
    unsupportedTokens: {
        [address: string]: any;
    };
    texts: {
        title: string;
        someAssets: string;
    };
}
export interface UnsupportedCurrencyFooterProps extends InjectedModalProps {
    texts: string;
    onPresentModal: () => void;
}
export declare const UnsupportedModal: React.FC<UnsupportedModalProps>;
export default function UnsupportedCurrencyFooter({ onPresentModal, texts, }: UnsupportedCurrencyFooterProps): JSX.Element;

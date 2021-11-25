import React, { ReactNode } from "react";
import { InjectedModalProps } from "../../../../widgets/Modal";
export interface UnsupportedModalProps {
    token: any;
    unsupportedTokens: {
        [address: string]: any;
    };
    currencyLogo: ReactNode;
    chainId: any;
    hrefLink: string;
}
export interface UnsupportedCurrencyFooterProps extends InjectedModalProps {
    texts: string;
    onPresentModal: () => void;
}
export declare const UnsupportedModal: React.FC<UnsupportedModalProps>;
export default function UnsupportedCurrencyFooter({ onPresentModal, texts }: UnsupportedCurrencyFooterProps): JSX.Element;

/// <reference types="react" />
import { InjectedModalProps } from "../../../../widgets/Modal";
export interface UnsupportedCurrencyFooterProps extends InjectedModalProps {
    tokens: any[];
    srcs: string[];
    isEther: boolean;
    chainId: any;
    bscScanLink: string;
    unsupportedTokens: {
        [address: string]: any;
    };
    texts: {
        someAssets: string;
        readMore: string;
    };
}
export default function UnsupportedCurrencyFooter({ tokens, srcs, isEther, chainId, bscScanLink, unsupportedTokens, texts, }: UnsupportedCurrencyFooterProps): JSX.Element;

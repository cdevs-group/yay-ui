import { ReactNode } from "react";
import { BackgroundProps } from "styled-system";
export interface CardBalanceProps {
    right?: boolean;
    children?: ReactNode;
    account: string;
    texts: {
        title: string;
        text: string;
        connect?: string;
    };
}
export interface ImageProps {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
    maxWidth?: string;
}
export interface ArrowProps {
    center?: boolean;
}
export interface TextCardsProps {
    texts?: {
        text1?: string;
        title1?: string;
        text2?: string;
        title2?: string;
        connect?: string;
    };
    account: string;
    hideArrow?: boolean;
}
export interface CardProductProp {
    title: string;
    img?: string;
    bg?: string;
    closed?: boolean;
    href?: string;
    left?: string;
    top?: string;
    right?: string;
    bottom?: string;
    maxWidth?: string;
    externalLink?: boolean;
    small?: boolean;
    isNotLink?: boolean;
    backgroundImage?: string;
    propsWrapperCard?: BackgroundProps;
}

import { ReactNode } from "react";
import { BetPosition } from "../Card/types";
export interface CardBalanceProps {
    right?: boolean;
    title: string;
    text: string;
    children?: ReactNode;
}
export interface CardFlipProps {
    isFlipped: boolean;
    children: Array<ReactNode>;
}
export interface ValueProps {
    vector: string;
    value: string;
}
export interface CardProductProp {
    title: string;
    img: string;
    bg: string;
    closed?: boolean;
    position?: string;
    href?: string;
}
export interface ArrowProps {
    center?: boolean;
}
export interface TextCardsProps {
    text: {
        text1: string;
        title1: string;
        text2: string;
        title2: string;
    };
}
export interface CardButtonsProps {
    handleTurn: (e: any) => void;
    confirm: boolean;
    choise?: null | string;
    pool: string;
}
export interface TabsProps {
    handleToggleTabs: (e: any) => void;
    tabValue: number;
    tabsList?: Array<string>;
}
export interface SetPositionCardProps {
    onBack: (e: any) => void;
    children: ReactNode;
    inputValue: string;
    handleInputChange: (e: any) => void;
    showFieldWarning: boolean;
    inputProps: {
        disabled: boolean;
    };
}
export interface ButtonsBlockRops {
    pool: string;
    hasEnteredUp: boolean;
    hasEnteredDown: boolean;
    handleSetPosition: (newPosition: BetPosition) => void;
    disabledButton: boolean;
}
export interface TopContentProps {
    children: ReactNode;
    rightContent: string;
}
export interface LaterCardProps {
    time: number;
    rightContent: string;
    color: string;
}

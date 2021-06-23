import { ReactNode } from "react";
export interface CardBalanceProps {
    right?: boolean;
    title: string;
    text: string;
    children?: ReactNode;
}
export interface CardProductProp {
    title: string;
    img: string;
    bg: string;
    closed?: boolean;
    position?: string;
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
}
export interface TabsProps {
    tabsList: Array<string>;
    handleToggleTabs: (e: any) => void;
    tabValue: number;
}
export interface InputProps {
    value: string;
    onChange: (e: any) => void;
}

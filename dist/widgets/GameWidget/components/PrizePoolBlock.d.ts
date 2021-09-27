import React from "react";
interface PrizePoolBlockProps {
    title: string;
    value: string;
    cardData1: CardProps;
    cardData2: CardProps;
    versus?: string;
    leftContent: string;
    rightContent: React.ReactNode;
    time?: number;
    disabled: boolean;
}
interface CardProps {
    name: string;
    coefficient: string;
    price: string;
    priceValue: string;
    margin?: string;
}
declare const PrizePoolBlock: ({ title, value, cardData1, cardData2, versus, leftContent, rightContent, time, disabled, }: PrizePoolBlockProps) => JSX.Element;
export default PrizePoolBlock;

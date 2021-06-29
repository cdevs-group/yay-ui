import React from "react";
interface IProps {
    href: string;
    children?: React.ReactNode;
    text?: string;
}
declare const GhostCard: ({ href, children, text }: IProps) => JSX.Element;
export default GhostCard;

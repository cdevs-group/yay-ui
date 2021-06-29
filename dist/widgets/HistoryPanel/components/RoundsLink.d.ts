import React from "react";
import { ITexts } from "../types";
interface Props {
    children?: React.ReactNode;
    href: string;
    texts?: ITexts;
}
declare const RoundsLink: ({ texts, children, href }: Props) => JSX.Element;
export default RoundsLink;

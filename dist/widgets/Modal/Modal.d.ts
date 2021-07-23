import React from "react";
import { InjectedProps } from "./types";
interface Props extends InjectedProps {
    title: string;
    hideCloseButton?: boolean;
    bodyPadding?: string;
    welcome?: boolean;
}
declare const Modal: React.FC<Props>;
export default Modal;

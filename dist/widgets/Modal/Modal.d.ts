import React from "react";
import { InjectedProps } from "./types";
import { DefaultTheme } from "styled-components";
import { LayoutProps, SpaceProps } from "styled-system";
interface Props extends InjectedProps, SpaceProps, LayoutProps {
    title?: string;
    hideCloseButton?: boolean;
    bodyPadding?: string;
    welcome?: boolean;
    image?: boolean;
    paddingTopHeader?: string;
    headerBackground?: string;
    style?: React.CSSProperties;
    maxWidth?: string;
    onBack?: () => void;
}
interface StyledModalProps extends SpaceProps {
}
export declare const ModalContent: import("styled-components").StyledComponent<"div", DefaultTheme, {
    p?: string | undefined;
}, never>;
export declare const ModalBody: import("styled-components").StyledComponent<"div", DefaultTheme, import("../../components/Box").BoxProps & import("../../components/Box").FlexProps, never>;
export declare const StyledModal: import("styled-components").StyledComponent<"div", DefaultTheme, StyledModalProps, never>;
export declare const ModalHeader: import("styled-components").StyledComponent<"div", DefaultTheme, {
    paddingTopHeader?: string | undefined;
    background?: string | undefined;
}, never>;
declare const Modal: React.FC<Props>;
export default Modal;

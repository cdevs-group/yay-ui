import React from "react";
import { LayoutProps, SpaceProps } from "styled-system";
interface Props extends SpaceProps {
    toCopy: string;
    textCopied: string;
    icon?: React.ReactNode;
    left?: string;
    propsIcon?: any;
    propsChildren?: SpaceProps & LayoutProps;
    isTooltip?: boolean;
    setIsTooltip?: (val: boolean) => void;
    widthButton?: string;
}
declare const CopyToClipboard: React.FC<Props>;
export default CopyToClipboard;

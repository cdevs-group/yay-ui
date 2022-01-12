import React from "react";
import { SpaceProps } from "styled-system";
interface Props extends SpaceProps {
    toCopy: string;
    textCopied: string;
    icon?: React.ReactNode;
    left?: string;
    propsIcon?: any;
    propsChildren?: SpaceProps;
    isTooltip?: boolean;
    setIsTooltip?: (val: boolean) => void;
}
declare const CopyToClipboard: React.FC<Props>;
export default CopyToClipboard;

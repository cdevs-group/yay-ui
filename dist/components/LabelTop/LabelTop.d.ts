import React from "react";
import { SpaceProps } from "styled-system";
interface Props extends SpaceProps {
    children: string | React.ReactNode;
    label: string;
}
declare const LabelTop: React.FC<Props>;
export default LabelTop;

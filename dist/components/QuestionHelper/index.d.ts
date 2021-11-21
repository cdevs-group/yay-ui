import React from "react";
import { BoxProps } from "../Box";
import { Placement } from "@popperjs/core";
interface Props extends BoxProps {
    text: string | React.ReactNode;
    placement?: Placement;
}
declare const QuestionHelper: React.FC<Props>;
export default QuestionHelper;

import { ReactNode } from "react";
import { ButtonProps } from "../../../components/Button/types";
interface StepWrapperProps {
    texts: {
        title: string;
        button: string;
        description: string;
        description2?: string;
    };
    onClick: () => void | Promise<void>;
    buttonProps?: ButtonProps;
    content: ReactNode;
    href?: string;
}
declare const StepWrapper: ({ texts, onClick, buttonProps, href, content }: StepWrapperProps) => JSX.Element;
export default StepWrapper;

/// <reference types="react" />
import { ButtonProps } from "../../../components/Button/types";
interface StepWrapperFrameProps {
    texts: {
        title: string;
        description: string;
        button: string;
        placeholder: string;
    };
    onClick: () => void | Promise<void>;
    buttonProps?: ButtonProps;
    isFrame: boolean;
    linkFrame?: string;
    disabledInput?: boolean;
    inputHide?: boolean;
    onChange: (e: any) => void;
    name: string;
    value: string | number;
    textError?: string;
}
declare const StepWrapperFrame: ({ texts, onClick, buttonProps, onChange, name, value, textError, linkFrame, disabledInput, isFrame, inputHide, }: StepWrapperFrameProps) => JSX.Element;
export default StepWrapperFrame;

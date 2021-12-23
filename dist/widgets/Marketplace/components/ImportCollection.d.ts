/// <reference types="react" />
import { ButtonProps } from "../../../components/Button/types";
declare const ImportCollection: ({ title, description, inputTitle, placeholder, inputValue, inputHandler, inputError, button, buttonHandler, buttonProps, }: {
    title: string;
    description: string;
    inputTitle: string;
    placeholder: string;
    inputValue: string;
    inputHandler: (e: any) => void;
    inputError: string;
    button: string;
    buttonHandler: () => void | Promise<void>;
    buttonProps?: ButtonProps<"button"> | undefined;
}) => JSX.Element;
export default ImportCollection;

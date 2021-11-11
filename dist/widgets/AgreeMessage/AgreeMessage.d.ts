/// <reference types="react" />
import { ButtonProps } from "../../components/Button";
interface AgreeMessageProps {
    isChecked: {
        option1: boolean | any;
        option2: boolean | any;
    };
    handleChangeCheckbox: (e: any) => void;
    disabled: boolean;
    onClick: () => void | Promise<void>;
    texts: {
        title: string;
        message: string;
        option1: string;
        option2: string;
        button: string;
    };
    propsButton?: ButtonProps;
}
declare const AgreeMessage: ({ isChecked, handleChangeCheckbox, disabled, onClick, texts, propsButton, }: AgreeMessageProps) => JSX.Element;
export default AgreeMessage;

/// <reference types="react" />
interface AgreeMessageProps {
    isChecked: {
        option1: boolean | any;
        option2: boolean | any;
    };
    handleChangeCheckbox: (e: any) => void;
    disabled: boolean;
    onClick: () => void;
    texts: {
        title: string;
        message: string;
        option1: string;
        option2: string;
        button: string;
    };
}
declare const AgreeMessage: ({ isChecked, handleChangeCheckbox, disabled, onClick, texts }: AgreeMessageProps) => JSX.Element;
export default AgreeMessage;

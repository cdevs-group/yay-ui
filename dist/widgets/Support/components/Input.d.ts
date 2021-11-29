/// <reference types="react" />
declare const Input: ({ title, margin, placeholder, name, value, onChange, textArea, inputError, }: {
    textArea?: boolean | undefined;
    onChange: (e: any) => void;
    name: string;
    value: string | number;
    title: string;
    margin?: string | undefined;
    placeholder: string;
    inputError?: string | undefined;
}) => JSX.Element;
export default Input;

/// <reference types="react" />
declare const Input: ({ title, margin, placeholder, name, value, onChange, inputError, }: {
    onChange: (e: any) => void;
    name: string;
    value: string | number;
    title: string;
    margin?: string | undefined;
    placeholder: string;
    inputError?: string | undefined;
}) => JSX.Element;
export default Input;

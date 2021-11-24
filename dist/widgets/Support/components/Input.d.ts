/// <reference types="react" />
declare const Input: ({ title, margin, placeholder, name, value, onChange, textArea, }: {
    textArea?: boolean | undefined;
    onChange: (e: any) => void;
    name: string;
    value: string | number;
    title: string;
    margin?: string | undefined;
    placeholder: string;
}) => JSX.Element;
export default Input;

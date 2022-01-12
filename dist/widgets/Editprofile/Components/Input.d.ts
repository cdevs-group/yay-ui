/// <reference types="react" />
declare const Input: ({ value, onChange, placeholder, width, name, }: {
    name: string;
    width?: string | undefined;
    placeholder: string;
    value: string;
    onChange: (e: any) => void;
}) => JSX.Element;
export default Input;

/// <reference types="react" />
declare const SimpleInput: ({ title, margin, placeholder, name, value, onChange, inputError, disabled, }: {
    onChange: (e: any) => void;
    name: string;
    value: string | number;
    title: string;
    margin?: string | undefined;
    placeholder: string;
    inputError?: string | undefined;
    disabled?: boolean | undefined;
}) => JSX.Element;
export default SimpleInput;

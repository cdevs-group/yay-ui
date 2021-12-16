/// <reference types="react" />
declare const Input: ({ value, onChange, name, margin, }: {
    margin?: string | undefined;
    value: string | number;
    onChange: (e: any) => void;
    name: string;
}) => JSX.Element;
export default Input;

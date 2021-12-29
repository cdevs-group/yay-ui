/// <reference types="react" />
declare const InputSearch: ({ value, onChange, name, inputPlaceholder, }: {
    value: string | number;
    onChange: (e: any) => void;
    name: string;
    inputPlaceholder?: string | undefined;
}) => JSX.Element;
export default InputSearch;

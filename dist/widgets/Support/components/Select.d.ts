/// <reference types="react" />
declare const Select: ({ title, margin, selectTarget, handleSelect, optionsList, name, }: {
    name: string;
    margin?: string | undefined;
    optionsList: string[];
    title: string;
    selectTarget: string;
    handleSelect: (e: any) => void;
}) => JSX.Element;
export default Select;

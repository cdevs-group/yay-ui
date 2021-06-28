/// <reference types="react" />
import { InputSearchProp } from "./types";
declare const InputSearch: {
    ({ placeholder, value, onChange }: InputSearchProp): JSX.Element;
    defaultProps: {
        placeholder: string;
    };
};
export default InputSearch;

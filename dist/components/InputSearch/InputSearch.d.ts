/// <reference types="react" />
import { InputSearchProp } from "./types";
declare const InputSearch: {
    ({ height, placeholder, value, onChange, iconLess, width, name, disabled }: InputSearchProp): JSX.Element;
    defaultProps: {
        placeholder: string;
    };
};
export default InputSearch;

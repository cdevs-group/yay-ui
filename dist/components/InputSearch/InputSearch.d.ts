/// <reference types="react" />
import { InputSearchProp } from "./types";
declare const InputSearch: {
    ({ icon, height, placeholder, value, onChange, iconLess, width, name, ...props }: InputSearchProp): JSX.Element;
    defaultProps: {
        placeholder: string;
    };
};
export default InputSearch;

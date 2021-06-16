/// <reference types="react" />
import { InputProp } from "./types";
declare const Input: {
    ({ placeholder, value, onChange }: InputProp): JSX.Element;
    defaultProps: {
        placeholder: string;
    };
};
export default Input;

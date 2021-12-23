/// <reference types="react" />
declare const Input: ({ title, margin, placeholder, name, value, onChange, textArea, inputError, fontSize, }: {
    textArea?: boolean | undefined;
    onChange: (e: any) => void;
    name: string;
    value: string | number;
    title: string;
    margin?: string | undefined;
    placeholder: string;
    inputError?: string | undefined;
    fontSize?: string | undefined;
}) => JSX.Element;
export default Input;
export declare const Wrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
    margin?: string | undefined;
}, never>;
export declare const TitleStyle: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, import("../Text").TextProps, never>;

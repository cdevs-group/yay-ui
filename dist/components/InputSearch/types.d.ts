import { ChangeEvent, InputHTMLAttributes, ReactNode, Ref } from "react";
export interface InputSearchProp extends InputHTMLAttributes<HTMLInputElement> {
    placeholder: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    value?: string | number;
    iconLess?: boolean;
    width?: string;
    height?: string;
    name: string;
    ref?: Ref<HTMLInputElement>;
    icon?: ReactNode;
    padding?: string;
    disabled?: boolean;
}

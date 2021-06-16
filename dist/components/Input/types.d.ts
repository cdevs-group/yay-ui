import { ChangeEvent } from "react";
export interface InputProp {
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    value: string;
}

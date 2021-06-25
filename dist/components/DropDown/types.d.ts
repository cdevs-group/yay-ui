import { ReactNode } from "react";
export interface LanguagesProps {
    list: Array<string>;
    setSelect: (e: any) => void;
    select: string;
}
export interface DropDownProps {
    icon: ReactNode;
    open: boolean;
    setOpen: (value: boolean) => void;
    children: ReactNode;
}

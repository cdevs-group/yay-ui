import { ReactNode } from "react";
import { LayoutProps, SpaceProps } from "styled-system";
export interface SelectProps extends SpaceProps, LayoutProps {
    selectItem: ReactNode;
    value: string | number;
    setValue: (e: any) => void;
    options: {
        name: ReactNode | string | number;
        value: string | number;
        img: string;
    }[];
    nameInputOptions: string;
    propsDropdown?: LayoutProps;
    propsOption?: SpaceProps & LayoutProps;
    optionsSpacing?: string;
    openDropdown?: boolean;
    setOpenDropdown?: (val: boolean) => void;
    valueInput: string;
    inputHandler: (e: any) => void;
    inputName: string;
    inputPlaceholder?: string;
}
declare const SelectSearch: ({ selectItem, value, setValue, options, nameInputOptions, propsDropdown, propsOption, optionsSpacing, openDropdown, setOpenDropdown, valueInput, inputHandler, inputName, inputPlaceholder, ...props }: SelectProps) => JSX.Element;
export default SelectSearch;

import { ReactNode } from "react";
import { LayoutProps, SpaceProps, PositionProps } from "styled-system";
export interface SelectProps extends SpaceProps, LayoutProps {
    selectItem: ReactNode;
    value: string | number;
    setValue: (e: any) => void;
    singleOption?: boolean;
    options: {
        name: ReactNode | string | number;
        value: string | number;
    }[];
    nameInputOptions: string;
    propsDropdown?: LayoutProps;
    propsOption?: SpaceProps & LayoutProps;
    optionsSpacing?: string;
    openDropdown?: boolean;
    setOpenDropdown?: (val: boolean) => void;
    propsDropdownLayout?: LayoutProps & PositionProps;
}
declare const Select: ({ selectItem, value, setValue, singleOption, options, nameInputOptions, propsDropdown, propsDropdownLayout, propsOption, optionsSpacing, openDropdown, setOpenDropdown, ...props }: SelectProps) => JSX.Element;
export default Select;

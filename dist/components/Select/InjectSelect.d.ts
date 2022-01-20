import { ReactNode } from "react";
import { LayoutProps, SpaceProps } from "styled-system";
export interface SelectProps extends SpaceProps, LayoutProps {
    selectItem: ReactNode;
    value: string | number;
    setValue: (e: any) => void;
    options: {
        name: ReactNode | string | number;
        value: string | number;
    }[];
    singleOption?: boolean;
    nameInputOptions: string;
    propsDropdown?: LayoutProps;
    propsOption?: SpaceProps & LayoutProps;
    optionsSpacing?: string;
    openDropdown?: boolean;
    setOpenDropdown?: (val: boolean) => void;
    buttonHandler: () => void | Promise<void>;
    inputsValue: {
        from: string;
        to: string;
    };
    inputsName: {
        from: string;
        to: string;
    };
    inputHandler: (e: any) => void;
    buttonText: string;
}
declare const InjectedSelect: ({ selectItem, value, setValue, options, singleOption, nameInputOptions, propsDropdown, propsOption, optionsSpacing, openDropdown, setOpenDropdown, buttonHandler, inputsValue, inputsName, inputHandler, buttonText, ...props }: SelectProps) => JSX.Element;
export default InjectedSelect;

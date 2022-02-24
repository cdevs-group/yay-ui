import React, { InputHTMLAttributes, ReactText } from "react";
import { SpaceProps } from "styled-system";
import { BoxProps } from "../Box";
export interface BalanceInputProps extends BoxProps, SpaceProps {
    value: ReactText;
    onUserInput?: any;
    placeholder?: string;
    inputProps?: Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "placeholder" | "onChange">;
    isWarning?: boolean;
    decimals?: number;
    token?: string;
    handleButtonToMax?: any;
    texts?: {
        currency?: string;
        commit?: string;
    };
    icon?: React.ReactNode;
    disabled?: boolean;
    pairBlock?: React.ReactNode;
    customInputHendler?: any;
}

import React, { InputHTMLAttributes, ReactText } from "react";
import { BoxProps } from "../Box";
export interface BalanceInputProps extends BoxProps {
    value: ReactText;
    onUserInput: (input: string) => void;
    placeholder?: string;
    inputProps?: Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "placeholder" | "onChange">;
    isWarning?: boolean;
    decimals?: number;
    texts?: {
        currency?: string;
        commit?: string;
    };
    icon?: React.ReactNode;
}

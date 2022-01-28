import { ReactNode } from "react";
import { ButtonProps } from "../../../components/Button/types";
interface IProps {
    onDismiss: () => void;
    texts: {
        title: string;
        balance: string;
        pay: string;
        button: string;
    };
    description: ReactNode;
    balance: string;
    pay: string;
    handleClick: () => void | Promise<void>;
    buttonProps?: ButtonProps;
}
declare const OrderConformition: ({ texts, onDismiss, description, balance, pay, handleClick, buttonProps }: IProps) => JSX.Element;
export default OrderConformition;

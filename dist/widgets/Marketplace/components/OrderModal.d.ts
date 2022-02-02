/// <reference types="react" />
import { ButtonProps } from "../../../components/Button/types";
interface IProps {
    texts: {
        title: string;
        placeholder1: string;
        placeholder2: string;
        fee: string;
        receive: string;
        button: string;
        titleInput1: string;
        titleInput2: string;
    };
    onDismiss: () => void;
    count?: boolean;
    fee?: string;
    receive?: string;
    handleClick: () => void | Promise<void>;
    buttonProps?: ButtonProps;
    handleInput: (e: any) => void;
    inputValues: {
        price: string;
        count: string;
    };
    error?: string;
    errorPrice?: string;
}
declare const OrderModal: ({ texts, onDismiss, count, fee, inputValues, receive, handleClick, buttonProps, handleInput, error, errorPrice, }: IProps) => JSX.Element;
export default OrderModal;

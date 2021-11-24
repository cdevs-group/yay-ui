/// <reference types="react" />
import { ButtonProps } from "../../../components/Button";
interface ModalInstakeProps {
    open: boolean;
    handleClose: () => void;
    handleUnstake: () => void | Promise<void>;
    img?: string;
    textsUnstake: string;
    textClose: string;
    textContent: string;
    unstakeButtonProps?: ButtonProps;
}
declare const ModalUnstake: ({ open, handleClose, handleUnstake, img, textsUnstake, textClose, unstakeButtonProps, textContent, }: ModalInstakeProps) => JSX.Element;
export default ModalUnstake;

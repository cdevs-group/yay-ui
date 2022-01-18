import { ButtonProps } from "../../../components/Button/types";
interface IEditProfileText {
    title: string;
    description: string;
    avatarTitle: string;
    avatarDescription: string;
    avatarButton: string;
    uploadButton: string;
    nameDescription: string;
    nameTitle: string;
    inputPlaceholder: string;
}
export interface IEditProfileProps {
    logo?: string;
    texts: IEditProfileText;
    inputHandle: (e: any) => void;
    avatarHandle: () => void | Promise<void>;
    updateHandle: () => void | Promise<void>;
    inputValue: string;
    inputName: string;
    avatarButtonProps?: ButtonProps;
    updateButtonProps?: ButtonProps;
}
export interface IChooseModalProps {
    onDismiss?: () => void;
    togglePage?: (e: any) => Promise<void>;
    handleImgSelect: (e?: string) => Promise<void> | void;
    currentPage: number;
    length?: number;
    nftsList: {
        img: string;
        value: string;
    }[];
    selectGame?: string;
}
export {};

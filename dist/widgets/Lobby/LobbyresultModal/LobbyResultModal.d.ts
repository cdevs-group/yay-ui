/// <reference types="react" />
interface IProps {
    onDismiss?: () => null;
    handleButton: () => void;
    texts: {
        title: string;
        content: string;
        textButton: string;
    };
    img?: string;
}
declare const LobbyResultModal: ({ onDismiss, texts, handleButton, img }: IProps) => JSX.Element;
export default LobbyResultModal;

interface ReturnType {
    onLobbyResultModal: () => void;
}
interface IText {
    title: string;
    content: string;
    textButton: string;
}
declare const useLobbyResultModal: (texts: IText, handleButton: () => void, img: string) => ReturnType;
export default useLobbyResultModal;

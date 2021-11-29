/// <reference types="react" />
declare const NoticeModal: ({ title, text, button, onClick, }: {
    onClick: () => void;
    title: string;
    text: string;
    button: string;
}) => JSX.Element;
export default NoticeModal;

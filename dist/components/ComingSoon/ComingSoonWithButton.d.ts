/// <reference types="react" />
interface ComingSoonProps {
    text: string;
    buttonText: string;
    handleClick: () => void;
    margin?: string;
    img?: string;
}
declare const ComingSoonWithButton: ({ margin, text, buttonText, img, handleClick }: ComingSoonProps) => JSX.Element;
export default ComingSoonWithButton;

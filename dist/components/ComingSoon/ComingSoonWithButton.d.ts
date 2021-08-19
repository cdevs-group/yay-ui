/// <reference types="react" />
interface ComingSoonProps {
    href: string;
    text: string;
    buttonText: string;
    img?: string;
    handleClick: () => void;
}
declare const ComingSoonWithButton: ({ href, text, buttonText, img, handleClick }: ComingSoonProps) => JSX.Element;
export default ComingSoonWithButton;

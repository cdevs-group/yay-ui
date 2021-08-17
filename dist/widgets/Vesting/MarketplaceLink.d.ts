/// <reference types="react" />
interface IProps {
    link: string;
    text: string;
    images?: {
        bg: string;
        mp: string;
    };
}
declare const MarketplaceLink: ({ link, text, images }: IProps) => JSX.Element;
export default MarketplaceLink;

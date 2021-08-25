/// <reference types="react" />
interface Iprops {
    images?: {
        bg: string;
    };
    texts: {
        title: string;
        button: string;
        description: string;
    };
    linkClaimTokens?: string;
}
declare const TokenOnPoolz: ({ images, texts, linkClaimTokens }: Iprops) => JSX.Element;
export default TokenOnPoolz;

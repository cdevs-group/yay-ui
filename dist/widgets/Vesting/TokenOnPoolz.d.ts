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
    disabledCardClaimTokens?: boolean;
}
declare const TokenOnPoolz: ({ images, texts, linkClaimTokens, disabledCardClaimTokens }: Iprops) => JSX.Element;
export default TokenOnPoolz;

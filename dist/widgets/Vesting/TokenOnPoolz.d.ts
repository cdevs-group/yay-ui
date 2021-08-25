/// <reference types="react" />
interface Ipros {
    images?: {
        bg: string;
    };
    texts: {
        title: string;
        button: string;
        description: string;
    };
}
declare const TokenOnPoolz: ({ images, texts }: Ipros) => JSX.Element;
export default TokenOnPoolz;

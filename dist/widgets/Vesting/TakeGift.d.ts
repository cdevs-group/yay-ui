/// <reference types="react" />
interface IProps {
    handleTakeGift: () => void;
    texts: {
        title: string;
        button: string;
        claimed: string;
    };
    claimedGift: boolean;
    images?: {
        gift: string;
        gift2: string;
    };
}
declare const TakeGift: ({ handleTakeGift, texts, claimedGift, images }: IProps) => JSX.Element;
export default TakeGift;

/// <reference types="react" />
interface IProps {
    handleTakeGift: () => void;
    texts: {
        title: string;
        button: string;
        claimed: string;
    };
    claimedGift: boolean;
}
declare const TakeGift: ({ handleTakeGift, texts, claimedGift }: IProps) => JSX.Element;
export default TakeGift;

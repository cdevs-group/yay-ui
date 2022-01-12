/// <reference types="react" />
interface IRefferalCardProps {
    id?: string | number;
    image: string;
    title: string;
    description: string;
    collectText?: string;
    handleCollect?: (val?: string | number) => void;
    collectTextMob?: string;
    disabledButton?: boolean;
    loadingButton?: boolean;
    reward?: string;
    network?: string;
    created?: string;
}
declare const RefferalCard: ({ image, title, description, collectText, collectTextMob, handleCollect, disabledButton, loadingButton, reward, network, created, }: IRefferalCardProps) => JSX.Element;
export default RefferalCard;

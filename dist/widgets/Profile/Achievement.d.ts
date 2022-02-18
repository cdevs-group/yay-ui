/// <reference types="react" />
interface IAchievementProps {
    id?: string | number;
    image: string;
    count?: string | number;
    countMax?: string | number;
    title: string;
    fullDescription?: string;
    collectText?: string;
    handleCollect?: (val?: string | number) => void;
    progress?: boolean;
    collectTextMob?: string;
    disabledButton?: boolean;
    loadingButton?: boolean;
    reward?: string;
    network?: string;
    backTitle?: string;
}
declare const Achievement: ({ image, count, countMax, title, fullDescription, collectText, collectTextMob, handleCollect, progress, disabledButton, loadingButton, reward, network, backTitle, }: IAchievementProps) => JSX.Element;
export default Achievement;

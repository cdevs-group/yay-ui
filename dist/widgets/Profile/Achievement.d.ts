/// <reference types="react" />
interface IAchievementProps {
    id?: string | number;
    image: string;
    count?: string | number;
    countMax?: string | number;
    title: string;
    description: string;
    fullDescription?: string;
    collectText?: string;
    handleCollect?: (val?: string | number) => void;
    progress?: boolean;
    collectTextMob?: string;
    disabledButton?: boolean;
    loadingButton?: boolean;
    refferal?: boolean;
    refferalReward?: string;
    network?: string;
}
declare const Achievement: ({ image, count, countMax, title, description, fullDescription, collectText, collectTextMob, handleCollect, progress, disabledButton, loadingButton, refferal, refferalReward, network, }: IAchievementProps) => JSX.Element;
export default Achievement;

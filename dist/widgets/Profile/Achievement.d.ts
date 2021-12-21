/// <reference types="react" />
interface IAchievementProps {
    image: string;
    count?: string | number;
    countMax?: string | number;
    title: string;
    description: string;
    collectText?: string;
    handleCollect?: () => void;
    complete: boolean;
    collectTextMob?: string;
    disabledButton?: boolean;
    loadingButton?: boolean;
    refferal?: boolean;
    refferalReward?: string;
}
declare const Achievement: ({ image, count, countMax, title, description, collectText, collectTextMob, handleCollect, complete, disabledButton, loadingButton, refferal, refferalReward, }: IAchievementProps) => JSX.Element;
export default Achievement;

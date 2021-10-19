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
}
declare const Achievement: ({ image, count, countMax, title, description, collectText, collectTextMob, handleCollect, complete, }: IAchievementProps) => JSX.Element;
export default Achievement;

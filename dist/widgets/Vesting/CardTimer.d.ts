/// <reference types="react" />
interface IProps {
    data: {
        textFront: string;
        textBack: string;
        textStage: string;
        timeSecond: number;
        totalSeconds: number;
        textsTime: {
            days: string;
            hours: string;
            minutes: string;
            seconds: string;
        };
    };
    canClaim: boolean;
}
declare const CardTimer: ({ data, canClaim }: IProps) => JSX.Element;
export default CardTimer;

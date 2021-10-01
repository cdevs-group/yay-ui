/// <reference types="react" />
declare const Timer: ({ title, color, time }: TimeInterface) => JSX.Element;
interface TimeInterface {
    title?: string;
    color?: string;
    time: number;
}
export default Timer;

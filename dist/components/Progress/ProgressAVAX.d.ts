/// <reference types="react" />
export interface ProgressAVAXProps {
    blockFrom: number;
    blockTo: number;
    blockCurrent: number;
    hour: number;
    min: number;
    sec: number;
    texts: {
        start: string;
        end: string;
        note: string;
    };
}
declare const ProgressAVAX: ({ blockFrom, blockCurrent, blockTo, texts, hour, min, sec }: ProgressAVAXProps) => JSX.Element;
export default ProgressAVAX;

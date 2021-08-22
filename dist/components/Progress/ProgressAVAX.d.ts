/// <reference types="react" />
export interface ProgressAVAXProps {
    blockFrom: number;
    blockTo: number;
    blockCurrent: number;
    time: number;
    texts: {
        start: string;
        end: string;
        note: string;
    };
}
declare const ProgressAVAX: ({ blockFrom, blockCurrent, blockTo, texts, time }: ProgressAVAXProps) => JSX.Element;
export default ProgressAVAX;

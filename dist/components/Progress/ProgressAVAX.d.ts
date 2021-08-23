/// <reference types="react" />
export interface ProgressAVAXProps {
    blockFrom: number;
    blockTo: number;
    blockCurrent: number;
    time: number;
    isLoad: boolean;
    texts: {
        start: string;
        end: string;
        note: string;
        currentBlock: string;
    };
}
declare const ProgressAVAX: ({ blockFrom, blockCurrent, blockTo, texts, time, isLoad }: ProgressAVAXProps) => JSX.Element;
export default ProgressAVAX;

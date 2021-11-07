export interface ProgressStepsProps {
    isError?: boolean;
    progress: number;
    stepsText: Array<string>;
    texts: {
        waiting: string;
        confirmations: string;
        checkIt: string;
        error: string;
    };
}
export interface ProgressRangeProps {
    progress: number;
    isError?: boolean;
    texts: {
        waiting: string;
        start: string;
        final: string;
        networkWaiting: string;
    };
}
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
export interface ProgressWithTextProps {
    progress: number;
    text: string;
}

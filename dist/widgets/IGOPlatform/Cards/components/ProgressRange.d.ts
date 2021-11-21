/// <reference types="react" />
export interface ProgressRangeProps {
    bgTrack: string;
    progress: {
        all: number;
        free: number;
    };
    counter: string;
}
declare const ProgressRange: ({ progress, counter, bgTrack }: ProgressRangeProps) => JSX.Element;
export default ProgressRange;

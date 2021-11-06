/// <reference types="react" />
export interface ProgressRangeProps {
    bgTrack: string;
    progress: number;
    isError?: boolean;
    counter: string;
}
declare const ProgressRange: ({ progress, isError, counter, bgTrack }: ProgressRangeProps) => JSX.Element;
export default ProgressRange;

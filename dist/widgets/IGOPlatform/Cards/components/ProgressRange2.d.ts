/// <reference types="react" />
export interface ProgressRange2Props {
    progress: {
        all: number;
        free: number;
    };
}
declare const ProgressRange2: ({ progress }: ProgressRange2Props) => JSX.Element;
export default ProgressRange2;

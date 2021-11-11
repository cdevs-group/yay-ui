/// <reference types="react" />
export interface ProgressRangeProps {
    dataSlots: {
        all: number;
        free: number;
    }[];
}
declare const Slots: ({ dataSlots }: ProgressRangeProps) => JSX.Element;
export default Slots;

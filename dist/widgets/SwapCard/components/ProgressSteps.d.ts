/// <reference types="react" />
export interface ProgressCirclesProps {
    steps: boolean[];
    disabled?: boolean;
}
export default function ProgressCircles({ steps, disabled, ...rest }: ProgressCirclesProps): JSX.Element;

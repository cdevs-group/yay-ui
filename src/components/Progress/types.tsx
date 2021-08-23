export interface ProgressStepsProps {
  isError?: boolean;
  step: number;
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
  texts: {
    waiting: string;
    start: string;
    final: string;
  };
}

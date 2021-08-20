export interface ProgressStepsProps {
  isError?: boolean;
  step: number;
  texts: {
    waiting: string;
    confirmations: string;
    checkIt: string;
    error: string;
    start: string;
    step1: string;
    step2: string;
    finish: string;
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

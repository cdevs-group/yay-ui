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

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

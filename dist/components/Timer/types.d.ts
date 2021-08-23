export interface TimerColorProps {
    color?: string;
    disabled?: boolean;
    avax?: boolean;
}
export interface TimerProps {
    color?: string;
    time?: number;
    isLoad?: boolean;
    disabled?: boolean;
    avax?: boolean;
}
export interface TimerSimpleProps {
    time: number;
    texts: {
        days: string;
        hours: string;
        minutes: string;
        seconds: string;
    };
    color?: string;
}

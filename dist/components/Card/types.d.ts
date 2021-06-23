import { ReactNode } from "react";
export interface StyledCardProps {
    children?: ReactNode;
    leftContent?: string;
    rightContent?: string;
    payoutUp?: number;
    payoutDown?: number;
    negative?: boolean;
    show?: boolean;
    closedCount?: any;
    linePrice?: any;
    lockedPrice?: any;
    prize?: any;
    up?: boolean;
    showUp?: boolean;
    showIcon?: boolean;
    live?: boolean;
    colorIcon?: string;
    displayNone?: boolean;
}
export interface CardHeaderProps {
    icon?: ReactNode;
    coin: string;
    upDown?: string;
    num?: string;
    greenColor?: boolean;
    whiteCoin?: boolean;
    svg?: ReactNode;
    negative?: boolean;
}
export interface CardProps {
    children?: ReactNode;
    active?: boolean;
    isReturn?: boolean;
    setIsReturn: (isReturn: string) => void;
    isAuth: boolean;
    setConfirm: (value: boolean) => void;
    setChoice: (value: string) => void;
}
export interface CardTheme {
    background: string;
    boxShadow: string;
    boxShadowActive: string;
    boxShadowSuccess: string;
    boxShadowWarning: string;
    cardHeaderBackground: string;
    dropShadow: string;
}
export interface Round {
    id?: string;
    epoch?: number;
    failed?: boolean;
    startBlock?: number;
    startAt?: number;
    lockAt?: number;
    lockBlock?: number;
    lockPrice?: number;
    endBlock?: number;
    closePrice?: number;
    totalBets?: number;
    totalAmount?: number;
    bullBets?: number;
    bearBets?: number;
    bearAmount?: number;
    bullAmount?: number;
    position?: BetPosition;
    bets?: Bet[];
}
export interface Bet {
    id?: string;
    hash?: string;
    amount: number;
    position: BetPosition;
    claimed: boolean;
    claimedHash: string;
    user?: PredictionUser;
    round: Round;
}
export declare enum BetPosition {
    BULL = "Bull",
    BEAR = "Bear",
    HOUSE = "House"
}
export declare enum PredictionStatus {
    INITIAL = "initial",
    LIVE = "live",
    PAUSED = "paused",
    ERROR = "error"
}
export interface PredictionUser {
    id: string;
    address: string;
    block: number;
    totalBets: number;
    totalBNB: number;
}

import { ReactNode } from "react";
export interface StyledCardProps {
    children?: ReactNode;
    leftContent?: string | ReactNode;
    rightContent?: string | ReactNode;
    payoutUp?: number | string;
    payoutDown?: number | string;
    negative?: boolean;
    closedCount?: any;
    linePrice?: any;
    lockedPrice?: any;
    prize?: any;
    up?: boolean;
    showBtnWinnings?: boolean;
    hasEnteredUp?: boolean;
    hasEnteredDown?: boolean;
    live?: boolean;
    colorIcon?: string;
    displayNone?: boolean;
    colorNone?: boolean;
    textTooltip?: string;
    time?: number;
    btnWinnings?: ReactNode;
    color?: string;
    hide?: boolean;
    btcWon?: boolean;
    ethWon?: boolean;
    loader?: boolean;
    disabledTimer?: boolean;
    texts?: any;
}
export interface StyledCardUpDownProps extends StyledCardProps {
    isReturn: string;
    setIsReturn: (value: string) => void;
    isAuth: boolean;
    setConfirm: (value: boolean) => void;
    setChoice: (value: string) => void;
    upValue: string;
    downValue: string;
    tabValue: number;
    handleToggleTabs: (e: any) => void;
    tabsList: Array<string>;
    inputValue: string;
    handleInputChange?: (e: any) => void;
    time: number;
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
}
export interface CardUpDownProps extends CardProps {
    isReturn: string;
    setIsReturn: (string: string) => void;
    isAuth: boolean;
    setConfirm: (value: boolean) => void;
    setChoice: (isReturn: string) => void;
    upValue: string;
    downValue: string;
    tabValue: number;
    handleToggleTabs: (e: any) => void;
    tabsList: Array<string>;
    inputValue: string;
    handleInputChange?: (e: any) => void;
    leftContent?: string | ReactNode;
    rightContent?: string | ReactNode;
    time: number;
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
export interface IProps {
    href: string;
    children?: React.ReactNode;
    text?: string;
}
export interface ButtonsBlockRops {
    pool: string;
    hasEnteredUp: boolean;
    hasEnteredDown: boolean;
    handleSetPosition: (newPosition: BetPosition) => void;
    disabledButton: boolean;
    ethButton?: string;
    btcButton?: string;
    texts?: Itexts;
}
export interface Itexts {
    payout?: string;
    entered?: string;
    prize?: string;
    setPosition?: string;
    commit?: string;
    enterUp?: string;
    enterDown?: string;
}
export interface IPropsTopAndGhost {
    children?: ReactNode;
    rightContent?: string;
    texts?: string;
    href?: string;
    text?: string;
}
export interface CardFlipProps {
    isFlipped: boolean;
    children: Array<ReactNode>;
}
export interface ValueProps {
    vector: string;
    value: string;
    texts?: string;
}
export interface CardButtonsProps {
    handleTurn: (e: any) => void;
    confirm: boolean;
    choise?: null | string;
    pool: string;
}
export interface TabsProps {
    handlePercentChange: (sliderPercent: number) => void;
    disabledTab?: boolean;
}
export interface IProps {
    roundEpoch: string;
    time: number;
    payoutWin: string;
    payoutLose: string;
    handleSetPosition: (newPosition: BetPosition) => void;
    pool: string;
    hasEnteredUp: boolean;
    hasEnteredDown: boolean;
    disabledButton: boolean;
    disabledTimer?: boolean;
    textsButton?: any;
    textsRow?: string;
}
export interface LaterCardProps {
    time: number;
    rightContent: string;
    color: string;
}

import { ButtonProps } from "../../components/Button";
export declare enum StatusType {
    BEFORE_SALE = "BeforeSale",
    SALE = "SALE",
    PROCESSING_RESULTS = "ProcessingResults",
    WAITING_FOR_TGE = "WaitingForTGE",
    CLAIMING = "Claiming",
    COMPLETED = "Completed",
    SNAPSHOT = "Snapshot time"
}
interface IGOCardsText {
    available: string;
    availableNetwork: string;
    button: string;
    tier: string;
    stakeButton: string;
    chance: string;
    timer: string;
    allocation: string;
    claimed: string;
}
export interface IGOCardV2Props {
    status: StatusType;
    token: string;
    texts: IGOCardsText;
    statusTitle: string;
    tokenImg: string;
    amount: string;
    networksTab: {
        value: string | number;
        img: string;
    }[];
    handleTab: (e: any) => void;
    currentNetwork: string | number;
    handleView: () => void | Promise<void>;
    tierStatus: string;
    handleStake: () => void | Promise<void>;
    chance?: string | number;
    time?: number;
    allocation?: string;
    isStaked?: boolean;
    tperiodText: string;
    inPool: boolean;
    propsButtonStake?: ButtonProps;
    disabledButtonStake?: boolean;
}
interface IGOCardDetailText {
    available: string;
    availableNetwork: string;
    button: string;
    timer: string;
    copied: string;
}
export interface IGODetailCardV2Props {
    site: string;
    token: string;
    statusTitle: string;
    texts: IGOCardDetailText;
    tokenImg: string;
    address: string;
    balance: string;
    externalLink: string;
    width: number;
    networksTab: {
        value: string | number;
        img: string;
    }[];
    handleTab: (e: any) => void;
    currentNetwork: string | number;
    tperiodText: string;
    time: number;
    linkView: string;
}
interface IGOCardDetailProgressText {
    title: string;
    stakeButton: string;
    tier: string;
    chance: string;
    allocation: string;
    summary: string;
    buttonBuy: string;
    buttonClaim: string;
}
export interface IGODetailProgressCard2Props {
    texts: IGOCardDetailProgressText;
    status: StatusType;
    textBaseProgress: string;
    baseProgress: number;
    isStaked: boolean;
    tierStatus: string;
    handleStake: () => void | Promise<void>;
    chance?: string | number;
    allocation?: string;
    inPool: boolean;
    summary: string;
    disabledClaim?: boolean;
    disabledBuy?: boolean;
    handleBuy: () => void | Promise<void>;
    handleClaim: () => void | Promise<void>;
    disabledButtonStake?: boolean;
    propsButtonStake?: ButtonProps;
    propsButtonBuy?: ButtonProps;
    propsButtonClaim?: ButtonProps;
}
export {};

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
    isClaimed: boolean;
}
export {};

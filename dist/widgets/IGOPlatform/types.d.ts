/// <reference types="react" />
export interface IProgress {
    totalVolume: number;
    currentVolume: number;
}
export interface IBlurStatus {
    statusText: React.ReactNode;
}
export interface IGOCardProps extends IBlurStatus, IProgress {
    status: CardStatus;
    token: string;
    tokenImg: string;
    amount: string;
    networksTab: {
        value: number;
        img: string;
    }[];
    handleTab: (e: any) => void;
    currentNetwork: number;
    dataSlots: number[];
    statusTextVisible?: boolean;
    currentVolume: number;
    totalVolume: number;
    texts: {
        available: string;
        networks: string;
        slots: string;
        progress: string;
        button: string;
    };
}
export declare enum NetworksTab {
    BSC = 0,
    AVAX = 1
}
export declare enum CardStatus {
    OPEN_WHITELIST = "Open whitelist",
    COMPLETED = "Completed",
    PUBLIC_SALE = "Public Sale",
    CLAIMING = "Claiming",
    WHITELIST_SALE = "Whitelist Sale"
}

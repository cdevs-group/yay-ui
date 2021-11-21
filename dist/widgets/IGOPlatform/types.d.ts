import { ReactNode } from "react";
export interface IProgress {
    totalVolume: number;
    currentVolume: number;
    tokenName: string;
}
export interface IBlurStatus {
    statusText: React.ReactNode;
    marginStatusText?: number;
}
export interface IGOCardProps extends IBlurStatus, IProgress {
    status: string;
    token: string;
    tokenImg: string;
    amount: string;
    networksTab: {
        value: string | number;
        img: string;
    }[];
    handleTab: (e: any) => void;
    currentNetwork: string | number;
    dataSlots: {
        free: number;
        all: number;
    }[];
    currentVolume: number;
    totalVolume: number;
    tokenName: string;
    handleView: () => void;
    statusTitle?: string;
    time: number;
    texts: {
        available: string;
        networks: string;
        slots: string;
        slotsTooltip: string;
        progress: string;
        button: string;
        timer: string;
    };
}
export declare enum NetworksTab {
    BSC = 0,
    AVAX = 1
}
export declare enum CardStatus {
    BEFORE_WHITELIST = "beforeWhitelist",
    OPEN_WHITELIST = "openWhitelist",
    WHITELIST_SALE = "whitelistSale",
    PUBLIC_SALE = "publicSale",
    WAIT_SALE = "waitSale",
    WAIT_TGE = "waitTGE",
    COMPLETED = "completed",
    CLAIMING = "claiming"
}
export interface TextWithTooltipProps {
    text: string;
    textTooltip: string | React.ReactNode;
}
export interface SlotSummaryProps {
    text: string | React.ReactNode;
    error?: boolean;
    circleHidden?: boolean;
    opacity?: boolean;
}
export interface IGODetailProgressCardProps {
    checkedToggle: boolean;
    handleToggleChecked: () => void;
    textBaseProgress: string;
    baseProgress: number;
    statusText?: ReactNode;
    texts: {
        textBottomBaseProgress: string;
        title: string;
        whitelistToggle: string;
        saleToggle: string;
        slotsSummary: string;
        slotsSummaryTooltip: string | React.ReactNode;
        availableWhitelist: string;
        availableWhitelistTooltip: string | React.ReactNode;
        status?: React.ReactNode;
        balance?: string;
        error?: string;
        buyYAY?: string;
    };
    slots: SlotSummaryProps[];
    status?: boolean;
    buttonLeft: React.ReactNode;
    buttonCenter: React.ReactNode;
    buttonRight: React.ReactNode;
    buttonLong: React.ReactNode;
    progress: {
        all: number;
        free: number;
    }[];
    progressVisible?: boolean;
    descriptionsButtons?: string[];
    balanceError?: boolean;
    balance?: string;
    disabledToggle?: boolean;
    slotsOpacity?: boolean;
    handleBuyYAY?: () => void | Promise<void>;
    time?: number;
    timerVisible?: boolean;
    hrefYAYBuy?: string;
}
export interface IGOCardInfoProps {
    name: string;
    status: string;
    site: string;
    tokenImg: string;
    balance: string;
    address: string;
    networksTab: {
        value: number | string;
        img: string;
    }[];
    handleTab: (e: any) => void;
    currentNetwork: number | string;
    time: number;
    externalLink: string;
    texts: {
        networks: string;
        networksTooltip: string;
        before: string;
        summary: string;
        button: string;
        summaryText: string;
        copied: string;
        status: React.ReactNode;
    };
    handleView?: () => void;
    withTimer: boolean;
    width: number;
    linkView?: string;
    statusText?: ReactNode;
}
export interface IGOHistoryCardProps {
    texts: {
        date: string;
        allocations: string;
        amount: string;
        tx: string;
        status: string;
        type: string;
    };
    data: {
        date: string;
        allocations: string;
        amount: string;
        tx: string;
        status: string;
        type: string;
    };
}
export interface IGOSubscriptionCardProps {
    totalSale: string;
    rate: string;
    privateDate: string;
    publicDate: string;
    endDate: string;
    hardCap: string;
    purchasedLimit: string;
    vestingStatus: string | ReactNode;
    texts: {
        title: string;
        totalSale: string;
        rate: string;
        private: string;
        public: string;
        end: string;
        hard: string;
        purchasedLimit: string;
        vesting: string;
    };
    privateTime?: string;
    publicTime?: string;
    endTime?: string;
}
export declare enum StatusHistory {
    ERROR = "error",
    SUCCESS = "success",
    PENDING = "pending"
}
export declare enum TypeHistory {
    BUY = "buy",
    UNSTACKING = "unstacking"
}
export interface IGOInfoCardProps {
    tokenName: string;
    address: string;
    texts: {
        title: string;
        name: string;
        address: string;
        copied: string;
        liquid: string;
    };
    width: number;
}
export interface InfoBoardProps {
    imgMain: string;
    images: string[];
    texts: {
        title: string;
        description: string;
        description2: string;
    };
}

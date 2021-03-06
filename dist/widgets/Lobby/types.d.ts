import { ReactNode } from "react";
import { SpaceProps } from "styled-system";
import { ButtonProps } from "../../components/Button/types";
export interface LobbyNavProps {
    texts: {
        create: string;
        join: string;
        approve: string;
    };
    handleJoin: () => void;
    handleCreate: () => void;
    imgJoin?: string;
    imgCreate?: string;
    isApprove: boolean;
    handleApprove: () => void;
    propsWrapper?: SpaceProps;
    propsCreateButton?: ButtonProps;
}
export interface LobbyCreatModalProps {
    texts: {
        title: string;
        tabsTitle: string;
        create: string;
        join: string;
        error: string;
        balance: string;
    };
    onDismiss?: () => void;
    activeTab: string | number;
    toggleTab: (e: any) => void;
    tabsList: Array<string | number>;
    handleCreate: () => void;
    handleJoin: () => void;
    propsCreateButton?: ButtonProps;
    balance: string;
    isError: boolean;
}
export interface LobbyListItemProps {
    epoch: number | string;
    creator: string;
    joiner?: string;
    joinerJoin?: boolean;
    bet: number | bigint | string;
    startTime: number;
    status?: string;
    open?: boolean;
    texts: LobbyTextsProps;
    handleButton?: (param: any) => void;
    history?: boolean;
    yourScore?: string;
    opponentScore?: string;
    winner?: boolean;
    claimed?: boolean;
    lose?: boolean;
    isLoad?: boolean;
    isEnoughYay: boolean;
    propsButton?: ButtonProps;
    icon?: ReactNode;
}
interface DataLobbyProps {
    isEnoughYay: boolean;
    epoch: number;
    creator: string;
    bet: number | bigint | string;
    startTime: number;
    status: string;
}
interface LobbyTextsProps {
    player?: string;
    bet?: string;
    time?: string;
    waitResult?: string;
    winner?: string;
    winnerMob?: string;
    withOpponent?: string;
    waitPlayer?: string;
    notEnoughYAY?: string;
    join?: string;
    yourScore?: string;
    opportunScore?: string;
    win?: string;
    lose?: string;
    play?: string;
    connect?: string;
    draw?: string;
    revert?: string;
}
export interface LobbyListProps {
    data: Array<DataLobbyProps>;
    texts: LobbyTextsProps;
    handleButton: (param: any) => void;
    open?: boolean;
}
export declare enum Status {
    JOIN = "join",
    WAITINGJOIN = "waitingJoin",
    PLAY = "play",
    ENOUGH = "enough",
    WAITINGOPPONENT = "waitingOpponent",
    LOSE = "lose",
    WIN = "win",
    COLLECT = "collect",
    CONNECT = "connect",
    DRAW = "draw",
    REVERT = "revert"
}
export {};

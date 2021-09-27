import { ButtonProps } from "../../components/Button/types";
export interface LobbyNavProps {
    texts: {
        create: string;
        join: string;
    };
    handleJoin: () => void;
    handleCreate: () => void;
    imgJoin?: string;
    imgCreate?: string;
}
export interface LobbyCreatModalProps {
    texts: {
        title: string;
        tabsTitle: string;
        create: string;
        join: string;
    };
    onDismiss?: () => void;
    activeTab: string | number;
    toggleTab: (e: any) => void;
    tabsList: Array<string | number>;
    handleCreate: () => void;
    handleJoin: () => void;
    propsCreateButton?: ButtonProps;
}
export interface LobbyListItemProps {
    data: DataLobbyProps;
    texts: LobbyTextsProps;
    handleButton: (param: any) => void;
}
interface DataLobbyProps {
    playerImg1?: string;
    playerImg2?: string;
    player: string;
    bet: string | number;
    type: string;
    timer?: number;
    gameAddress: string;
}
interface LobbyTextsProps {
    player: string;
    bet: string;
    time: string;
    waitResult: string;
    winner?: string;
    winnerMob?: string;
    withApponent: string;
    waitPlayer: string;
    join: string;
}
export interface LobbyListProps {
    data: Array<DataLobbyProps>;
    texts: LobbyTextsProps;
    handleButton: (param: any) => void;
}
export {};

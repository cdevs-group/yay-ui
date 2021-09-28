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
  epoch: number;
  creator: string;
  bet: number | bigint | string;
  startTime: null | number;
  status: string;
  texts: LobbyTextsProps;
  handleButton: (param: any) => void;
}
interface DataLobbyProps {
  epoch: number;
  creator: string;
  bet: number | bigint | string;
  startTime: null | number;
  status: string;
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

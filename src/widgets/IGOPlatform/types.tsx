export interface IProgress {
  totalVolume: number;
  currentVolume: number;
}
export interface IBlurStatus {
  statusText: React.ReactNode;
  marginStatusText?: number;
}
export interface IGOCardProps extends IBlurStatus, IProgress {
  status: CardStatus;
  token: string;
  tokenImg: string;
  amount: string;
  networksTab: { value: number; img: string }[];
  handleTab: (e: any) => void;
  currentNetwork: number;
  dataSlots: number[];
  currentVolume: number;
  totalVolume: number;
  handleView: () => void;
  time: number;
  texts: {
    available: string;
    networks: string;
    slots: string;
    progress: string;
    button: string;
    timer: string;
  };
}

export enum NetworksTab {
  BSC = 0,
  AVAX = 1,
}

export enum CardStatus {
  OPEN_WHITELIST = "Open whitelist",
  COMPLETED = "Completed",
  PUBLIC_SALE = "Public Sale",
  CLAIMING = "Claiming",
  WHITELIST_SALE = "Whitelist Sale",
}

export interface TextWithTooltipProps {
  text: string;
  textTooltip: string | React.ReactNode;
}

export interface SlotSummaryProps {
  text: string | React.ReactNode;
  error?: boolean;
  circleHidden?: boolean;
}
export interface IGODetailProgressCardProps {
  checkedToggle: boolean;
  handleToggleChecked: () => void;
  textBaseProgress: string;
  baseProgress: number;
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
  };
  slots: SlotSummaryProps[];
  status?: boolean;
  buttonLeft: React.ReactNode;
  buttonCenter: React.ReactNode;
  buttonRight: React.ReactNode;
  buttonLong: React.ReactNode;
  progress: number[];
  progressVisible?: boolean;
  descriptionsButtons?: string[];
}
export interface IGOCardInfoProps {
  name: string;
  status: string;
  site: string;
  tokenImg: string;
  balance: string;
  address: string;
  networksTab: { value: number; img: string }[];
  handleTab: (e: any) => void;
  currentNetwork: number;
  time: number;
  externalLink: string;
  texts: {
    networks: string;
    before: string;
    summary: string;
    button: string;
    summaryText: string;
    copied: string;
    isLive: string;
    status: string;
  };
  handleView: () => void;
  withTimer: boolean;
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

export enum StatusHistory {
  ERROR = "error",
  SUCCESS = "success",
  PENDING = "pending",
}

export enum TypeHistory {
  BUY = "buy",
  UNSTACKING = "unstacking",
}

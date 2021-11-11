export interface IProgress {
  totalVolume: number;
  currentVolume: number;
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
  networksTab: { value: string | number; img: string }[];
  handleTab: (e: any) => void;
  currentNetwork: string | number;
  dataSlots: number[];
  currentVolume: number;
  totalVolume: number;
  handleView: () => void;
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
    balance?: string;
    error?: string;
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
  balanceError?: boolean;
  balance?: string;
}
export interface IGOCardInfoProps {
  name: string;
  status: string;
  site: string;
  tokenImg: string;
  balance: string;
  address: string;
  networksTab: { value: number | string; img: string }[];
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
  handleView: () => void;
  withTimer: boolean;
  width: number;
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
  softCap: string;
  hardCap: string;
  minPurchased: string;
  maxPurchased: string;
  vestingStatus: string;
  texts: {
    title: string;
    totalSale: string;
    rate: string;
    private: string;
    public: string;
    end: string;
    soft: string;
    hard: string;
    minPurchased: string;
    maxPurchased: string;
    vesting: string;
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
export interface IGOInfoCardProps {
  tokenName: string;
  address: string;
  initial: string;
  lockDuration: string;
  status: string;
  link: string;
  texts: {
    title: string;
    name: string;
    address: string;
    copied: string;
    liquid: string;
    initial: string;
    lock: string;
    status: string;
    link: string;
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

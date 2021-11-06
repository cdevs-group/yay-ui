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
  networksTab: { value: number; img: string }[];
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
  
}

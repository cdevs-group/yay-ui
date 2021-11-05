export interface IGOCardProps {
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
  texts: {
    available: string;
    networks: string;
    slots: string;
    progress: string;
    button: string;
    isLive: string;
    success: string;
    sale: string;
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

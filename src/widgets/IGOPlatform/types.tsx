export interface IGOCardProps {
  status: CardStatus;
  token: string;
  tokenImg: string;
  amount: string;
  networksTab: { value: number; img: string }[];
  handleTab: (e: any) => void;
  currentNetwork: number;
  dataSlots: number[];
  widthProgress: number;
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

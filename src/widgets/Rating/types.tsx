import React, { ChangeEvent, ReactNode } from "react";

export interface GameTableProps {
  texts: string;
  gamesList: Array<{ img: ReactNode; value: string }>;
}

export interface PlayerListProps {
  texts: {
    title: string;
    playerName: string;
    games: string;
  };
  playersList: Array<{
    position: string;
    token: any;
    name: string;
    games: string;
  }>;
}

export interface ListWrapProps {
  children: ReactNode;
  placeholder?: string;
  handleInput?: (e: ChangeEvent<HTMLInputElement>) => void;
  inputValue?: string | number;
  players?: boolean;
  activeTab?: number;
  toggleTab?: (e: any) => Promise<void>;
  tabsList?: Array<string>;
  toggleTypeList?: (e: any) => void;
  typeTabsList?: Array<string>;
  texts?: {
    button: string;
  };
  myPosstionButton?: () => void;
  length?: number;
  togglePage?: (e: any) => Promise<void>;
  currentPage?: number;
}

export interface TabsTypeListPops {
  toggleTypeList?: (e: any) => void;
  typeTabsList?: Array<string>;
}

export interface PaginationPlayersListProps {
  length?: number;
  togglePage?: (e: any) => Promise<void>;
  currentPage?: number;
}

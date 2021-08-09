import React, { ChangeEvent, ReactNode } from "react";

export interface GameTableProps {
  texts: {
    title: string;
    gameName?: string;
    playedOnce?: string;
  };
  gamesList: Array<{
    img: ReactNode;
    value: string;
    disabled?: boolean;
    position: string | number;
    playedOnce: string;
    imgSrc?: string;
  }>;
  handleSelectValue: (value?: string) => void;
}

export interface PlayerListProps {
  texts: {
    title: string;
    playerName: string;
    games: string;
  };
  playersList: Array<{
    position: string | number;
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
  myPositionButton?: () => void;
  length?: number;
  togglePage?: (e: any) => Promise<void>;
  currentPage?: number;
  nameInput: string;
  handleShare?: () => void;
}

export interface TabsTypeListPops {
  toggleTypeList?: (e: any) => void;
  typeTabsList?: Array<string>;
}

import React, { ReactNode } from "react";
import { ButtonProps } from "../../../components/Button/types";

export interface ICardProps {
  title: string;
  author: string;
  description: string;
  picUrl: string;
  avatarUrl: string;
  likes: number;
  price: string;
  onShare: () => void;
  onFavoritesAdd: () => void;
  onAuthorClick: () => void;
  onNftClick: () => void;
  onLikeAdd: () => void;
  network: string;
}

export interface ICardGamesProps {
  title: string;
  description: string;
  picUrl: string;
  avatarUrl: string;
  textSeeNow: string;
  onShare: (id?: string | number) => void;
  onNftClick: (id?: string | number) => void;
  network1: string;
  network2?: string;
  onSeeNowClick: (id?: string | number) => void;
}

export interface ILikesProps {
  likes: number;
  onLikeAdd: () => void;
  wrapperStyle?: React.CSSProperties;
  textStyle?: React.CSSProperties;
}

export interface ITabsProps {
  tabsList: string[];
  tabActive: number;
  handleToggleTab: (e: any) => void;
  tabBodyList: React.ReactNode[];
}

export interface IProfileCardProps {
  title: string;
  picUrl: string;
  likes: number;
  price: number;
  isLiked: boolean;
  onLike: () => void;
}

export interface IRegisterProfileProps {
  title?: ReactNode | string;
  description?: ReactNode | string;
  handleSubmit?: (e?: any) => void | Promise<void>;
  onClick?: (e?: any) => void | Promise<void>;
  onChange: (e: any) => void;
  inputValue1: string;
  inputValue2: string;
  inputName1: string;
  inputName2: string;
  inputError1: string;
  inputError2: string;
  loginInputDisabled?: boolean;
  sponsorInputDisabled?: boolean;
  texts: {
    inputTitle1: string;
    inputTitle2: string;
    inputPlaceholder1: string;
    inputPlaceholder2: string;
    buttonText: string;
  };
  buttonProps: ButtonProps;
}

export interface ITextsReferralList {
  buttonBack: string;
  topRef: string;
  topMini: string;
  topPrediction: string;
  topNft: string;
  referralTitle: string;
  itemRef: string;
  itemLogin: string;
  itemEarn: string;
  itemTime: string;
}

export interface IReferralListProps {
  handleBack: () => void;
  data: any[];
  texts: ITextsReferralList;
  earnValue: string;
  miniValue: string;
  predictionValue: string;
  nftValue: string;
  pagination: IReferralListItemPagination;
  keys: IReferralListItemKeys;
}

export interface ReferralListItemsProps {
  data: any[];
  keys: IReferralListItemKeys;
  texts: ITextsReferralList;
  pagination: IReferralListItemPagination;
}

export interface IReferralListItemKeys {
  txHashKey: string;
  loginKey: string;
  earnedKey: string;
  dateKey: string;
}

export interface IReferralListItemPagination {
  countPerPage: number;
  togglePage: (e: any) => Promise<void>;
  currentPage: number;
}

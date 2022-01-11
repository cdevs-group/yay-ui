import React, { ReactNode } from "react";
import { ButtonProps } from "../../../components/Button/types";

export interface ICardProps {
  title: string;
  author: string;
  description: string;
  picUrl: string;
  avatarUrl: string;
  likes: number;
  price: number;
  onShare: () => void;
  onFavoritesAdd: () => void;
  onAuthorClick: () => void;
  onNftClick: () => void;
  onLikeAdd: () => void;
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
  onClick: () => void | Promise<void>;
  onChange: (e: any) => void;
  inputValue1: string;
  inputValue2: string;
  inputName1: string;
  inputName2: string;
  inputError1: string;
  inputError2: string;
  texts: {
    inputTitle1: string;
    inputTitle2: string;
    inputPlaceholder1: string;
    inputPlaceholder2: string;
    buttonText: string;
  };
  buttonProps: ButtonProps;
}

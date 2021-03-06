import React, { ReactNode } from "react";
import { ButtonProps } from "../../../components/Button/types";
export interface ICardProps {
    title: string;
    author: string;
    description: string;
    picUrl: string;
    avatarUrl?: string;
    likes?: number;
    price?: string;
    onShare: (id?: string | number) => void;
    onFavoritesAdd?: (id?: string | number) => void;
    onAuthorClick: (id?: string | number) => void;
    onNftClick: (id?: string | number) => void;
    onLikeAdd?: () => void;
    network: string;
    onGameClick: (id?: string | number) => void;
    isLoading?: boolean;
    onSeeNowClick: () => void | Promise<void>;
    assets?: string;
    color?: string;
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
    onGameClick: (id?: string | number) => void;
    isLoading?: boolean;
    color?: string;
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
    isLoading?: boolean;
    title: string;
    picUrl: string;
    likes?: number;
    price: string;
    isLiked?: boolean;
    onLike?: () => void;
    onNftClick: (id?: string | number) => void;
    onTitleClick?: (id?: string | number) => void;
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

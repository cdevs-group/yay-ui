import React from "react";
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

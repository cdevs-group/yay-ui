import { ReactNode } from "react";

export interface CardBalanceProps{
  right?:boolean,
  title:string,
  text:string,
  children?:ReactNode
};

export interface CardProductProp {
  title: string
  img: string
  bg: string
  closed?:boolean
}

export interface ArrowProps{
  center?:boolean
}

import { ReactNode } from "react";
export type Handler = (boolean:boolean) => void;

export interface InjectedProps {
  setOpen?: Handler;
  open: boolean;
  children?:ReactNode;
}
interface bestData{
  average:number
  round:number
  win:boolean
}
export interface bestProps{
  best:Array<bestData>
  bestNumber?:{
    number:number,
    kef:number
  }
}
export interface PnlProp{
  open:boolean
}

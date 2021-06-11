import { ReactNode } from "react";
export type Handler = (boolean:boolean) => void;

export interface InjectedProps {
  setOpen?: Handler;
  open: boolean;
  children?:ReactNode;
}
interface statusBar{
  status:boolean
  profit:number
}
export interface progressProps{
  progress:Array<statusBar>
}
interface bestData{
  average:number
  round:number
  win:boolean
}
export interface bestProps{
  best:Array<bestData>
}


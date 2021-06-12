export type Handler = (value: boolean) => void;

export interface InjectedProps {
  setOpen?: Handler;
  open: boolean;
}

export interface ICardAccordeon {
  id: number;
  value: React.ReactNode;  
  content: React.ReactNode;  
}

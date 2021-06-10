export type Handler = (boolean) => void;

export interface InjectedProps {
  setOpen?: Handler;
  open: boolean;
}

export interface TokenInfoProps {
  textsInfo: {
    address: string;
    token: string;
    network: string;
    textCopy: string;
  };
  margin?: string;
  addTokenHandler: () => void;
  BSCSkanHandler: () => void;
}

export interface VestingWidgetProps {
  dataClaimTokens: {
    totalRaised: string;
    total: string;
  };
  handleClaimTokens: () => void;
  textsClaimTokens: {
    title: string;
    button: string;
    totalRaised: string;
    total: string;
  };
  dataCardsIndicators: {
    text: string;
    value: string;
  }[];
  textMarketplaceLink: string;
  linkMarketplace: string;
  imagesMarketplace?: {
    bg: string;
    mp: string;
  };
  handleTakeGift: () => void;
  textsTakeGift: {
    title: string;
    button: string;
    claimed: string;
  };
  canClaim: boolean;
  claimedGift: boolean;
  imagesGift?: {
    gift: string;
    gift2: string;
  };
  dataTimer: {
    textFront: string;
    textBack: string;
    textStage: string;
    timeSecond: number;
    totalSeconds: number;
    textsTime: {
      days: string;
      hours: string;
      minutes: string;
      seconds: string;
    };
  };
  textsPoolz: {
    title: string;
    description: string;
    button: string;
  };
  linkClaimTokens?: string;
  disabledButtonClaimTokens?: boolean;
}

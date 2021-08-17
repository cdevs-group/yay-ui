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
  }
  handleTakeGift: () => void;
  textsTakeGift: {
    title: string;
    button: string;
    claimed: string;
  };
  claimedGift: boolean;
  imagesGift?: {
    gift: string;
    gift2: string;
  };
}

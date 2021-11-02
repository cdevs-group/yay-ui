import React from "react";
import styled from "styled-components";
import CardIndicator from "../Vesting/CardIndicator";
import CardTimer from "../Vesting/CardTimer";
import ClaimTokens from "./ClaimTokens";
import MarketplaceLink from "../Vesting/MarketplaceLink";
import ClaimBlock from "./ClaimBlock";
import { ButtonProps } from "../../components/Button";

export interface VestingWidgetProps {
  dataClaimTokens: {
    totalRaised: string;
    total: string;
    left?: string;
  };
  textsClaimTokens: {
    title: string;
    button: string;
    totalRaised: string;
    total: string;
    left?: string;
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
  textClaimBlock: {
    title: string;
    description: string;
    button: string;
  };
  canClaim: boolean;
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
  disabledTopCards?: boolean;
  disabledCardClaimTokens?: boolean;
  progress: string | number;
  propsBtnClaimTokens?: ButtonProps;
  propsBtnClaimBlock?: ButtonProps;
}

const StakingDashboard: React.FC<VestingWidgetProps> = ({
  dataClaimTokens,
  textsClaimTokens,
  dataCardsIndicators,
  textMarketplaceLink,
  linkMarketplace,
  textClaimBlock,
  imagesMarketplace,
  dataTimer,
  canClaim,
  disabledTopCards,
  disabledCardClaimTokens,
  progress,
  propsBtnClaimTokens,
  propsBtnClaimBlock,
}) => {
  return (
    <Wrapper>
      <CardIndicator
        canClaim={canClaim}
        disabledTopCards={disabledTopCards}
        data={dataCardsIndicators[0]}
        id="CardIndicator-1"
      />
      <CardTimer canClaim={canClaim} disabledTopCards={disabledTopCards} data={dataTimer} />
      <CardIndicator
        canClaim={canClaim}
        disabledTopCards={disabledTopCards}
        data={dataCardsIndicators[1]}
        id="CardIndicator-2"
      />
      <CardIndicator
        canClaim={canClaim}
        disabledTopCards={disabledTopCards}
        data={dataCardsIndicators[2]}
        id="CardIndicator-3"
      />
      <ClaimTokens
        data={dataClaimTokens}
        texts={textsClaimTokens}
        propsBtnClaimTokens={propsBtnClaimTokens}
        disabledCardClaimTokens={disabledCardClaimTokens}
        progress={progress}
      />

      <ClaimBlock propsBtnClaimBlock={propsBtnClaimBlock} canClaim={canClaim} text={textClaimBlock} />
      <MarketplaceLink text={textMarketplaceLink} link={linkMarketplace} images={imagesMarketplace} />
    </Wrapper>
  );
};

export default StakingDashboard;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 30px 20px;
  ${({ theme }) => theme.mediaQueries.sm} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${({ theme }) => theme.mediaQueries.xl} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

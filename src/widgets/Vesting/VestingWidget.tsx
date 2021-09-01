import React from "react";
import styled from "styled-components";
import CardIndicator from "./CardIndicator";
import CardTimer from "./CardTimer";
import ClaimTokens from "./ClaimTokens";
import MarketplaceLink from "./MarketplaceLink";
import TakeGift from "./TakeGift";
import { VestingWidgetProps } from "./types";
import TokenOnPoolz from "./TokenOnPoolz";

const VestingWidget: React.FC<VestingWidgetProps> = ({
  dataClaimTokens,
  textsClaimTokens,
  handleClaimTokens,
  dataCardsIndicators,
  textMarketplaceLink,
  linkMarketplace,
  textsTakeGift,
  handleTakeGift,
  claimedGift,
  imagesGift,
  imagesMarketplace,
  dataTimer,
  canClaim,
  textsPoolz,
  linkClaimTokens,
  disabledButtonClaimTokens,
  isLoadingButtonClaimTokens,
  endIconButtonClaimTokens,
}) => {
  return (
    <Wrapper>
      <CardIndicator canClaim={canClaim} data={dataCardsIndicators[0]} />
      <CardIndicator canClaim={canClaim} data={dataCardsIndicators[1]} />
      <CardTimer canClaim={canClaim} data={dataTimer} />
      <CardIndicator canClaim={canClaim} data={dataCardsIndicators[2]} />
      {!canClaim ? (
        <TokenOnPoolz texts={textsPoolz} images={imagesMarketplace} linkClaimTokens={linkClaimTokens} />
      ) : (
        <ClaimTokens
          data={dataClaimTokens}
          texts={textsClaimTokens}
          handleClaimTokens={handleClaimTokens}
          disabledButton={disabledButtonClaimTokens}
          isLoading={isLoadingButtonClaimTokens}
          endIcon={endIconButtonClaimTokens}
        />
      )}
      <MarketplaceLink text={textMarketplaceLink} link={linkMarketplace} images={imagesMarketplace} />
      <TakeGift texts={textsTakeGift} handleTakeGift={handleTakeGift} claimedGift={claimedGift} images={imagesGift} />
    </Wrapper>
  );
};

export default VestingWidget;

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

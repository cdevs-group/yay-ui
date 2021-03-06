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
  disabledTopCards,
  disabledCardClaimTokens,
  giftLoader,
  disabledClaimGift,
}) => {
  return (
    <Wrapper>
      <CardIndicator
        canClaim={canClaim}
        disabledTopCards={disabledTopCards}
        data={dataCardsIndicators[0]}
        id="CardIndicator-1"
      />
      <CardIndicator
        canClaim={canClaim}
        disabledTopCards={disabledTopCards}
        data={dataCardsIndicators[1]}
        id="CardIndicator-2"
      />
      <CardTimer canClaim={canClaim} disabledTopCards={disabledTopCards} data={dataTimer} />
      <CardIndicator
        canClaim={canClaim}
        disabledTopCards={disabledTopCards}
        data={dataCardsIndicators[2]}
        id="CardIndicator-3"
      />
      {!canClaim ? (
        <TokenOnPoolz
          texts={textsPoolz}
          images={imagesMarketplace}
          linkClaimTokens={linkClaimTokens}
          disabledCardClaimTokens={disabledCardClaimTokens}
        />
      ) : (
        <ClaimTokens
          data={dataClaimTokens}
          texts={textsClaimTokens}
          handleClaimTokens={handleClaimTokens}
          disabledButton={disabledButtonClaimTokens}
          isLoading={isLoadingButtonClaimTokens}
          endIcon={endIconButtonClaimTokens}
          disabledCardClaimTokens={disabledCardClaimTokens}
        />
      )}
      <MarketplaceLink text={textMarketplaceLink} link={linkMarketplace} images={imagesMarketplace} />
      <TakeGift
        giftLoader={giftLoader}
        texts={textsTakeGift}
        handleTakeGift={handleTakeGift}
        claimedGift={claimedGift}
        images={imagesGift}
        disabledClaimGift={disabledClaimGift}
      />
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

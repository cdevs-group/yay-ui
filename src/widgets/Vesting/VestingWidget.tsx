import React from "react";
import styled from "styled-components";
import CardsIndicators from "./CardsIndicators";
import ClaimTokens from "./ClaimTokens";
import MarketplaceLink from "./MarketplaceLink";
import TakeGift from "./TakeGift";
import { VestingWidgetProps } from "./types";

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
}) => {
  return (
    <Wrapper>
      {dataCardsIndicators.map((el, i) => (
        <CardsIndicators data={el} key={`${el.text}-${i}`} />
      ))}
      <ClaimTokens data={dataClaimTokens} texts={textsClaimTokens} handleClaimTokens={handleClaimTokens} />
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

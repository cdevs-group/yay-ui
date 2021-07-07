import React from "react";
import styled from "styled-components";
import { ClosedPriceBTC } from "../../../components/ClosedPriceBTC";
import { Text } from "../../../components/Text";
import { ITextRoundBTCHistory } from "../types";

interface IRoundHistory {
  btcPayout: React.ReactNode;
  ethPayout: React.ReactNode;
  prizePool: string;
  openingBlock?: string | React.ReactNode;
  closingBlock?: string | React.ReactNode;
  negativeFirst?: boolean;
  negativeSecond?: boolean;
  negativeBlock?: boolean;
  lockPrice?: string;
  roundFailed?: boolean;
  texts?: ITextRoundBTCHistory;
  isBTCWon?: boolean;
  textLockedPrice?: string;
  textTitle?: string;
  closeFirstPrice: string;
  lockFirstPrice: string;
  closeSecondPrice: string;
  lockSecondPrice: string;
  changeTitleFirst: string;
  changeTitleSecond: string;
}

const RoundHistoryBTC = (props: IRoundHistory) => {
  const {
    btcPayout,
    ethPayout,
    prizePool,
    openingBlock,
    closingBlock,
    negativeFirst,
    negativeSecond,
    negativeBlock,
    lockPrice,
    roundFailed,
    texts,
    isBTCWon,
    textLockedPrice,
    textTitle,
    closeFirstPrice,
    lockFirstPrice,
    closeSecondPrice,
    lockSecondPrice,
    changeTitleFirst,
    changeTitleSecond,
  } = props;

  return (
    <>
      <Text mb={17}>{texts?.rounds || "Round History"} </Text>
      <div style={{ marginBottom: 16 }}>
        <ClosedPriceBTC
          price={closeFirstPrice}
          rightText={changeTitleFirst}
          negative={negativeFirst}
          roundFailed={roundFailed}
          textPrice={texts?.textPrice}
          isBTCWon={isBTCWon}
          textTitle={textTitle}
          textLockedPrice={textLockedPrice}
          btc
          lockedPrice={lockFirstPrice}
        />
      </div>
      <ClosedPriceBTC
        price={closeSecondPrice}
        rightText={changeTitleSecond}
        negative={negativeSecond}
        roundFailed={roundFailed}
        textPrice={texts?.textPrice}
        isBTCWon={isBTCWon}
        textTitle={textTitle}
        textLockedPrice={textLockedPrice}
        lockedPrice={lockSecondPrice}
      />
      <Block>
        <Line>
          <Text size="sm" fontWeight={400}>
            {texts?.btcPayout || "BTC Payout"}
          </Text>
          <Text size="sm">{btcPayout}</Text>
        </Line>
        <Line>
          <Text size="sm" fontWeight={400}>
            {texts?.ethPayout || "ETH Payout"}
          </Text>
          <Text size="sm">{ethPayout}</Text>
        </Line>
        {lockPrice && (
          <Line>
            <Text size="sm" fontWeight={400}>
              {texts?.locked || "Locked Price"}:
            </Text>
            <Text size="sm">{lockPrice}</Text>
          </Line>
        )}
        <LineMargin>
          <Text size="sm">{texts?.prize || "Prize Pool"}:</Text>
          <Text>{prizePool}</Text>
        </LineMargin>
        <Line>
          <Text size="sm" fontWeight={400}>
            {texts?.open || "Opening Block"}
          </Text>
          <Text size="sm" color={negativeBlock ? "redBg" : "green"}>
            {openingBlock}
          </Text>
        </Line>
        <Line>
          <Text size="sm" fontWeight={400}>
            {texts?.closing || "Closing Block"}
          </Text>
          <Text size="sm" color={negativeBlock ? "redBg" : "green"}>
            {closingBlock}
          </Text>
        </Line>
      </Block>
    </>
  );
};

export default RoundHistoryBTC;

const Line = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

const Block = styled.div`
  margin-top: 31px;
`;

const LineMargin = styled(Line)`
  margin-bottom: 17px;
`;

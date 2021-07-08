import React from "react";
import styled from "styled-components";
import { transparentize } from "polished";
import { ExpireCardBTCProps } from "./types";

const Wrap = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Closed = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.text};
`;

const Middle = styled(Closed)`
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.greenText2};
`;

const Locked = styled(Closed)`
  margin-top: 8px;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.greyText};
`;

const Line = styled.div`
  display: flex;
  align-items: center;
`;

const Percent = styled.div<{ btcLider: boolean }>`
  color: ${({ theme, btcLider }) => (btcLider ? theme.colors.green : theme.colors.redBg)};
  background: ${({ theme, btcLider }) =>
    btcLider ? transparentize(0.75, theme.colors.green) : transparentize(0.75, theme.colors.redBg)};
  border-radius: 5px;
  padding: 3px 7px;
  margin-right: 9px;
  font-weight: 500;
  font-size: 11px;
  line-height: 14px;
  text-align: center;
  letter-spacing: 0.05em;
`;

const ExpiredCardBTC = ({
  texts,
  closedBTC,
  lockedBTC,
  closedETH,
  lockedETH,
  prize,
  btcLider,
  percentBTC,
  percentETH,
}: ExpireCardBTCProps) => {
  return (
    <Wrap>
      <div>
        <Closed>
          {texts?.closed || "CLOSED PRICE"} BTC <p> {closedBTC}</p>
        </Closed>
        <Locked>
          <Line>
            <Percent btcLider={btcLider}>{percentBTC}</Percent>
            {texts?.locked || "Locked Price"} BTC
          </Line>
          <p>{lockedBTC}</p>
        </Locked>
      </div>
      <Middle>
        {texts?.prize || "PRIZE POLL"}
        <p>{prize}</p>
      </Middle>
      <div>
        <Closed>
          {texts?.closed || "CLOSED PRICE"} ETH <p> {closedETH}</p>
        </Closed>
        <Locked>
          <Line>
            <Percent btcLider={!btcLider}>{percentETH}</Percent>
            {texts?.locked || "Locked Price"} ETH
          </Line>
          <p>{lockedETH}</p>
        </Locked>
      </div>
    </Wrap>
  );
};

export default ExpiredCardBTC;

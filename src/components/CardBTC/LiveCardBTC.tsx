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

const LiveCardBTC = ({
  texts,
  closedBTC,
  lockedBTC,
  closedETH,
  lockedETH,
  prize,
  percentBTC,
  percentETH,
  btcLider,
}: ExpireCardBTCProps) => {
  return (
    <Wrap>
      <div>
        <Closed>
          {texts?.last || "LAST PRICE"} BTC <p> {closedBTC}</p>
        </Closed>
        <Locked>
          <Line>
            <Percent btcLider={btcLider}>{percentBTC}</Percent>
            {texts?.locked || "Locked Price"}
          </Line>
          <p> {lockedBTC}</p>
        </Locked>
      </div>
      <Middle>
        {texts?.prize || "PRIZE POLL"}
        <p>{prize}</p>
      </Middle>
      <div>
        <Closed>
          {texts?.last || "LAST PRICE"} ETH <p> {closedETH}</p>
        </Closed>
        <Locked>
          <Line>
            <Percent btcLider={!btcLider}>{percentETH}</Percent>
            {texts?.locked || "Locked Price"}
          </Line>
          <p> {lockedETH}</p>
        </Locked>
      </div>
    </Wrap>
  );
};

export default LiveCardBTC;

import React from "react";
import styled from "styled-components";
import { ArrowRight } from "../Svg";
import { ExpireCardBTCProps } from "./types";

const Wrap = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Line = styled.div``;
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
const ArrowBlock = styled.div<{ btc?: boolean }>`
  display: flex;
  align-items: center;
  & svg {
    margin-right: 10px;
    width: 20px;
    height: 20px;
  }
  &.btc svg {
    transform: rotate ${({ btc }) => (btc ? "(-90deg)" : "(90deg)")};
  }
  &.eth svg {
    transform: rotate ${({ btc }) => (btc ? "(90deg)" : "(-90deg)")};
  }
`;

const ExpiredCardBTC = ({ clodedBTC, lockedBRC, closedETH, lockedETH, prize, btc }: ExpireCardBTCProps) => {
  return (
    <Wrap>
      <Line>
        <Closed>
          CLOSED PRICE BTC <p>$ {clodedBTC}</p>
        </Closed>
        <Locked>
          <ArrowBlock btc={btc} className="btc">
            <ArrowRight
              stroke={btc ? "#47DA3B" : "#FF6161"}
              fill={btc ? "rgba(71, 218, 59,0.15)" : "rgba(255, 97, 97,0.15)"}
            />
            Locked Price BTC
          </ArrowBlock>
          <p>$ {lockedBRC}</p>
        </Locked>
      </Line>
      <Middle>
        PRIZE POLL
        <p>{prize} BNB</p>
      </Middle>
      <Line>
        <Closed>
          LOSED PRICE ETH <p>$ {closedETH}</p>
        </Closed>
        <Locked>
          <ArrowBlock btc={btc} className="eth">
            <ArrowRight
              stroke={!btc ? "#47DA3B" : "#FF6161"}
              fill={!btc ? "rgba(71, 218, 59,0.15)" : "rgba(255, 97, 97,0.15)"}
            />
            Locked Price ETH
          </ArrowBlock>
          <p>$ {lockedETH}</p>
        </Locked>
      </Line>
    </Wrap>
  );
};

export default ExpiredCardBTC;
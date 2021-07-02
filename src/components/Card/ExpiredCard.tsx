import React from "react";
import styled from "styled-components";
import { ArrowCardDown } from "../Svg";
import { StyledCardProps } from "./types";
import { transparentize } from "polished";

const Wrap = styled.div`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
`;

const Closed = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & div.closed {
    font-size: 13px;
    line-height: 16px;
    letter-spacing: 1px;
  }
`;

const ClosedCount = styled.div<{ negative?: boolean }>`
  font-size: 17px;
  line-height: 22px;
  letter-spacing: 0.5px;
  color: ${({ theme, negative }) => (negative ? theme.colors.redBg : theme.colors.greenText)};
`;

const Line = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 13px;
`;

const Arrow = styled.div<{ negative?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background: ${({ theme, negative }) =>
    negative ? transparentize(0.75, theme.colors.redBg) : theme.colors.gradients.greenGradient};
  border-radius: 7px;
  transform: ${({ negative }) => (!negative ? "scale(1,-1)" : "none")};
`;

const LinePrice = styled.div<{ negative?: boolean }>`
  padding: 8px 10px;
  border-radius: 7px;
  background: ${({ theme, negative }) =>
    negative ? transparentize(0.75, theme.colors.redBg) : theme.colors.gradients.greenGradient};
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 0.05em;
  color: ${({ theme, negative }) => (negative ? theme.colors.redBg : theme.colors.greenText)};
`;

const Info = styled.div`
  margin-top: 35px;
`;

const LockedPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 13px;
  font-weight: normal;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 0.05em;
  & div {
    font-weight: 500;
    font-size: 15px;
  }
`;

const Prize = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  & div {
    font-size: 15px;
  }
`;

const ExpiredCardNA: React.FC<StyledCardProps> = ({
  negative,
  closedCount,
  linePrice,
  lockedPrice,
  prize,
  texts,
}) => {
  return (
    <Wrap>
      <Closed>
        <div className="closed">{texts?.closed || "Closed Price"}</div>
        <ClosedCount negative={negative}> {closedCount}</ClosedCount>
      </Closed>
      <Line>
        <Arrow negative={negative}>
          <ArrowCardDown color={negative ? "#FF6161" : "#4AE43D"} />
        </Arrow>
        <LinePrice negative={negative}>{linePrice}</LinePrice>
      </Line>
      <Info>
        <LockedPrice>
          {texts?.locked || "Locked Price "} ADA: <div> {lockedPrice}</div>
        </LockedPrice>
        <Prize>
          {texts?.prize || "Prize Pool"}: <div>{prize} </div>
        </Prize>
      </Info>
    </Wrap>
  );
};

export default ExpiredCardNA;

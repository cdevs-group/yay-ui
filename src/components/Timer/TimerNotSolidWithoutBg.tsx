import React from "react";
import styled from "styled-components";
import { TimerProps, TimerColorProps } from "./types";
import { CercleIcon } from "../Svg";
import { Block, Dots, Item, Wrap } from "./TimerNotSolid";

interface MyTimerProps {
  expiryTimestamp: any;
  color: string;
}

function MyTimer({ expiryTimestamp, color }: MyTimerProps) {
  const hours = Math.floor(expiryTimestamp / 3600);
  const minutes = Math.floor((expiryTimestamp - hours * 3600) / 60);
  const seconds = expiryTimestamp - hours * 3600 - minutes * 60;

  const handleDigit = (value: number) => {
    const leftDigit = value >= 10 ? value.toString()[0] : "0";
    const rightDigit = value >= 10 ? value.toString()[1] : value.toString();
    return { leftDigit, rightDigit };
  };

  const timeArray = [hours, minutes, seconds];

  return (
    <Wrap>
      <BlockWithoutBg color={color}>
        {timeArray.map((item, i) => (
          <React.Fragment key={`item-${i}`}>
            <ItemWithoutBg>
              {handleDigit(item).leftDigit}
              {handleDigit(item).rightDigit}{" "}
            </ItemWithoutBg>
            {i === 2 ? null : <DotsWithoutBg>:</DotsWithoutBg>}
          </React.Fragment>
        ))}
      </BlockWithoutBg>
    </Wrap>
  );
}

const LoadIcons = [<CercleIcon spin fill="none" />, <CercleIcon spin fill="none" />, <CercleIcon spin fill="none" />];

const LoadingTimer = () => {
  return (
    <Wrap>
      <BlockWithoutBg>
        {LoadIcons.map((item, i) => (
          <React.Fragment key={`item-${i}`}>
            <ItemWithoutBg>{item}</ItemWithoutBg>
            {i === 2 ? null : <DotsWithoutBg>:</DotsWithoutBg>}
          </React.Fragment>
        ))}
      </BlockWithoutBg>
    </Wrap>
  );
};

const TimerNotSolidWithoutBg: React.FC<TimerProps> = ({ time, color, isLoad }) => {
  return (
    <div>
      {(time || time === 0) && !isLoad ? <MyTimer expiryTimestamp={time} color={color || "text"} /> : <LoadingTimer />}
    </div>
  );
};
export default TimerNotSolidWithoutBg;

// const Wrap = styled.div`
//   display: flex;
//   align-items: center;
//   width: fit-content;
// `;

const BlockWithoutBg = styled(Block)<TimerColorProps>`
  width: auto;
  height: 50px;
`;

const ItemWithoutBg = styled(Item)`
  box-shadow: none;
  background: none;
  margin: 0;
  height: auto;
  width: 15px;
  display: flex;
  font-size: 11px;
`;

const DotsWithoutBg = styled(Dots)`
  margin: 0 6px;
  color: ${({ theme }) => theme.colors.text};
`;

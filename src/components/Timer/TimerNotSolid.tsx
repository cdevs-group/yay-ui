import React from "react";
import styled, { DefaultTheme } from "styled-components";
import { transparentize } from "polished";
import { TimerProps, TimerColorProps } from "./types";
import getThemeValue from "../../util/getThemeValue";
import { CercleIcon } from "../Svg";
interface ThemedProps extends TimerColorProps {
  theme: DefaultTheme;
}
interface MyTimerProps {
  expiryTimestamp: any;
  color: string;
  avax?: boolean;
}
const getColor = ({ color, theme }: ThemedProps) => {
  return getThemeValue(`colors.${color}`, color)(theme);
};

function MyTimer({ expiryTimestamp, color, avax }: MyTimerProps) {
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
      <Block avax={avax} color={color}>
        {timeArray.map((item, i) => (
          <React.Fragment key={`item-${i}`}>
            <Item avax={avax}>
              {handleDigit(item).leftDigit}
              {handleDigit(item).rightDigit}{" "}
            </Item>
            {i === 2 ? null : <Dots>:</Dots>}
          </React.Fragment>
        ))}
      </Block>
    </Wrap>
  );
}

const LoadIcons = [<CercleIcon spin fill="none" />, <CercleIcon spin fill="none" />, <CercleIcon spin fill="none" />];

const LoadingTimer = () => {
  return (
    <Wrap>
      <Block>
        {LoadIcons.map((item, i) => (
          <React.Fragment key={`item-${i}`}>
            <Item>{item}</Item>
            {i === 2 ? null : <Dots>:</Dots>}
          </React.Fragment>
        ))}
      </Block>
    </Wrap>
  );
};

const TimerNotSolid: React.FC<TimerProps> = ({ time, color, isLoad, avax }) => {
  return (
    <div>
      {(time || time === 0) && !isLoad ? (
        <MyTimer avax={avax} expiryTimestamp={time} color={color || "text"} />
      ) : (
        <LoadingTimer />
      )}
    </div>
  );
};
export default TimerNotSolid;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
`;

const Block = styled.div<TimerColorProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ avax }) => (avax ? "auto" : "186px")};
  height: 50px;
  border-radius: 12px;
  color: ${getColor};
  font-weight: 500;
  font-size: 15px;
  letter-spacing: 0.05em;
`;

const Item = styled.div<{ avax?: boolean }>`
  background: ${({ avax, theme }) => (avax ? "none" : transparentize(0.75, theme.colors.invertedContrast))};
  box-shadow: ${({ avax, theme }) => (avax ? "none" : theme.colors.boxShadow10)};
  height: ${({ avax }) => (avax ? "auto" : "50px")};
  margin: ${({ avax }) => (avax ? "0 5px" : "0")};
  width: ${({ avax }) => (avax ? "15px" : "50px")};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ avax }) => (avax ? "11px" : "15px")};
`;

const Dots = styled.div`
  margin: 0 6px;
  color: ${({ theme }) => theme.colors.text};
`;

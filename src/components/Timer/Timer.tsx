import React from "react";
import styled, { DefaultTheme } from "styled-components";
import { transparentize } from "polished";
import { TimerProps, TimerColorProps } from "./types";
import getThemeValue from "../../util/getThemeValue";
interface ThemedProps extends TimerColorProps {
  theme: DefaultTheme;
}
interface MyTimerProps {
  expiryTimestamp: any;
  color: string;
}
const getColor = ({ color, theme }: ThemedProps) => {
  return getThemeValue(`colors.${color}`, color)(theme);
};

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
      {timeArray.map((item, i) => (
        <React.Fragment key={`item-${i}`}>
          <Block color={color}>
            {handleDigit(item).leftDigit}
            {handleDigit(item).rightDigit}
          </Block>
          {i === 2 ? null : <Dots>:</Dots>}
        </React.Fragment>
      ))}
    </Wrap>
  );
}

const Timer: React.FC<TimerProps> = ({ time, color }) => {
  return <div>{time && <MyTimer expiryTimestamp={time} color={color || "text"} />}</div>;
};
export default Timer;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
`;

const Block = styled.div<TimerColorProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: ${({ theme }) => transparentize(0.75, theme.colors.invertedContrast)};
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  color: ${getColor};
  font-weight: 500;
`;

const Dots = styled.div`
  /* margin: 0 12px; */
  color: ${({ theme }) => theme.colors.text};
`;

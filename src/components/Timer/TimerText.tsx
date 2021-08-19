import React from "react";
import styled, { DefaultTheme } from "styled-components";
import { TimerTextProps, TimerColorProps } from "./types";
import getThemeValue from "../../util/getThemeValue";

interface ThemedProps extends TimerColorProps {
  theme: DefaultTheme;
}

interface MyTimerProps {
  expiryTimestamp: any;
  color: string;
  texts: {
    days: string;
    hours: string;
    minutes: string;
  };
}

const getColor = ({ color, theme }: ThemedProps) => {
  return getThemeValue(`colors.${color}`, color)(theme);
};

function MyTimer({ expiryTimestamp, color, texts }: MyTimerProps) {
  const days = Math.floor(expiryTimestamp / 86400);
  const hours = Math.floor(expiryTimestamp / 3600);
  const minutes = Math.floor((expiryTimestamp - hours * 3600) / 60);

  const handleDigit = (value: number) => {
    const leftDigit = value >= 10 ? value.toString()[0] : "0";
    const rightDigit = value >= 10 ? value.toString()[1] : value.toString();
    return { leftDigit, rightDigit };
  };

  const timeArray = [days, hours, minutes];
  const timeTextArray = [texts.days, texts.hours, texts.minutes];

  return (
    <Wrap color={color}>
      {timeArray.map((item, i) => (
        <React.Fragment key={`item-${i}`}>
          {handleDigit(item).leftDigit}
          {handleDigit(item).rightDigit}
          {timeTextArray[i]} &nbsp;
        </React.Fragment>
      ))}
    </Wrap>
  );
}

const TimerText: React.FC<TimerTextProps> = ({ time, color, texts }) => {
  return (
    <div>
      <MyTimer expiryTimestamp={time || 0} color={color || "text"} texts={texts} />
    </div>
  );
};
export default TimerText;

const Wrap = styled.div<TimerColorProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${getColor};
  font-weight: normal;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.02em;
`;

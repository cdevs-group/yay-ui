import React from 'react';
import { useTimer } from 'react-timer-hook';
import styled from 'styled-components';
import { transparentize } from 'polished';
import { TimerProps } from './types';

function MyTimer({ expiryTimestamp, color }) {
  const { seconds, minutes, hours } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn('onExpire called'),
  });

  const handleDigit = (value) => {
    const leftDigit = value >= 10 ? value.toString()[0] : '0';
    const rightDigit = value >= 10 ? value.toString()[1] : value.toString();
    return { leftDigit, rightDigit };
  };

  const timeArray = [hours, minutes, seconds];

  return (
    <Wrap>
      {timeArray.map((item, i) => (
        <>
          <Block key={`item-${i}`} color={color}>
            {handleDigit(item).leftDigit}
            {handleDigit(item).rightDigit}
          </Block>
          {i === 2 ? null : <Dots>:</Dots>}
        </>
      ))}
    </Wrap>
  );
}

const Timer: React.FC<TimerProps> = ({ time, color }) => {
  const currentTime = new Date();
  currentTime.setSeconds(currentTime.getSeconds() + time);

  return (
    <div>{time && <MyTimer expiryTimestamp={currentTime} color={color} />}</div>
  );
};
export default Timer;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Block = styled.div<{ color: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: ${({ theme }) => transparentize(0.75, theme.colors.yinyang)};
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  color: ${({ theme, color }) => (color ? color : theme.colors.text)};
  font-weight: 500;
`;

const Dots = styled.div`
  margin: 0 12px;
  color: ${({ theme }) => theme.colors.text};
`;

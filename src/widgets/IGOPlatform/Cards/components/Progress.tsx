import { CheckIcon } from "../../../../components/Svg";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { transparentize } from "polished";
import { Flex } from "../../../../components/Box";
import { Text } from "../../../../components/Text";
import { IProgress } from "../../types";

const Progress = ({ totalVolume, currentVolume }: IProgress) => {
  const [widthTotal, setWidthTotal] = useState(0);
  const [widthCurrent, setWidthCurrent] = useState(0);
  const [widthProgressBar, setWidthProgressBar] = useState(0);
  const [isFinish, setFinish] = useState(false);
  const [widthProgress, setWidthProgress] = useState(0);
  const refTotal = useRef<any>(null);
  const refCurrent = useRef<any>(null);
  const refProgress = useRef<any>(null);

  useEffect(() => {
    if (refProgress) {
      setWidthProgressBar(refProgress.current.clientWidth);
    }
  }, []);
  useEffect(() => {
    if (refTotal) {
      setWidthTotal(refTotal.current.clientWidth);
    }
  }, []);
  useEffect(() => {
    if (refCurrent) {
      setWidthCurrent(refCurrent.current.clientWidth);
    }
  }, [widthProgress, currentVolume]);

  useEffect(() => {
    setWidthProgress((currentVolume / totalVolume) * 100);
  });

  useEffect(() => {
    const width = widthTotal + 12;
    const finish = widthProgressBar - (widthProgressBar / 100) * widthProgress <= width;
    setFinish(finish);
  });

  return (
    <div>
      <ProgressTrack ref={refProgress}>
        <ProgressBar widthProgress={widthProgress || 0}>
          <ProgressThumb>
            <CheckIcon />
          </ProgressThumb>
        </ProgressBar>
      </ProgressTrack>
      <CounterWrapper>
        <Counter stop={isFinish} width={isFinish ? widthTotal + 12 : widthProgress}>
          <Current marginLeft={widthProgress > 50 ? `-${widthCurrent}px` : 0} ref={refCurrent}>
            {currentVolume} BNB
          </Current>
          <Symbol visible={isFinish}>/</Symbol>
          <Total ref={refTotal}>{totalVolume} BNB</Total>
        </Counter>
      </CounterWrapper>
    </div>
  );
};

export default Progress;

const ProgressThumb = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: 15px;
  height: 15px;
  background: ${({ theme }) => theme.colors.text};
  border-radius: 50%;
  & svg {
    width: 10px;
    height: 7px;
  }
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 25px;
    height: 25px;
    background: ${({ theme }) => transparentize(0.92, theme.colors.greenBg2)};
    border-radius: 50%;
  }
`;

const ProgressTrack = styled.div`
  width: 100%;
  height: 8px;
  background: ${({ theme }) => transparentize(0.5, theme.colors.greenBg2)};
  border-radius: 6px;
`;

const ProgressBar = styled.div<{ widthProgress: number }>`
  position: relative;
  display: flex;
  justify-content: ${({ widthProgress }) => (widthProgress <= 2 ? "flex-start" : "flex-end")};
  align-items: center;
  width: ${({ widthProgress }) => `${widthProgress}%` || 0};
  height: inherit;
  background: ${({ theme }) => theme.colors.greenBg2};
  border-radius: 6px;
  transition: 0.3s;
`;
const CounterWrapper = styled(Flex)`
  margin-top: 13px;
  justify-content: flex-end;
`;
const Counter = styled(Flex)<{ width: number; stop: boolean }>`
  justify-content: space-between;
  width: ${({ width, stop }) => (stop ? `${width}px` : `calc(100% - ${width}%)`)};
`;
const Current = styled(Text)`
  font-size: 10px;
  line-height: 19px;
  letter-spacing: 0.13em;
  text-transform: uppercase;
  flex: none;
`;
const Total = styled(Current)``;
const Symbol = styled(Current)<{ visible: boolean }>`
  padding: 0 5px;
  display: ${({ visible }) => (visible ? "block" : "none")};
`;

import React from "react";
import styled from "styled-components";
import { ProgressRangeProps } from "./types";
import { Text } from "../Text";

const ProgressRange = ({ texts, progress, isError, counter, bgTrack }: ProgressRangeProps) => {
  return (
    <ProgressWrap>
      {texts && (
        <Text fontSize="10px">
          {texts.waiting} {texts.networkWaiting}
        </Text>
      )}
      <RangeTrack bgTrack={bgTrack} isError={isError} progress={progress} />
      {counter && (
        <Text fontSize="11px" textAlign="center">
          {counter}/100
        </Text>
      )}
      {texts && (
        <RangeTexts>
          <Text fontSize="10px">{texts.start}</Text>
          <Text fontSize="10px">{texts.final}</Text>
        </RangeTexts>
      )}
    </ProgressWrap>
  );
};

export default ProgressRange;

const ProgressWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const RangeTrack = styled.div<{ progress?: number; isError?: boolean; bgTrack?: string }>`
  position: relative;
  margin: 10px 0;
  width: 100%;
  height: 12px;
  background: ${({ theme, bgTrack }) => (bgTrack ? bgTrack : theme.colors.buttonBg)};
  box-shadow: ${({ theme }) => theme.colors.boxShadow4};
  border-radius: 3px;
  &:after {
    display: block;
    content: "";
    position: absolute;
    width: ${({ progress }) => (progress ? `calc(${progress}% - 5px)` : 0)};
    height: calc(100% - 6px);
    top: 3px;
    left: 2.5px;
    border-radius: 2px;
    background: ${({ theme, isError }) => (isError ? theme.colors.redBg : theme.colors.greenText2)};
  }
`;
const RangeTexts = styled.div`
  width: 100%;
  padding: 0 5px;
  display: flex;
  justify-content: space-between;
`;
const Counter = styled.div``;

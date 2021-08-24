import React from "react";
import styled from "styled-components";
import { ProgressRangeProps } from "./types";
import { Text } from "../Text";

const ProgressRange = ({ texts, progress }: ProgressRangeProps) => {
  return (
    <ProgressWrap>
      <Text fontSize="10px">
        {texts.waiting} {texts.networkWaiting}
      </Text>
      <RangeTrack progress={progress} />
      <RangeTexts>
        <Text fontSize="10px">{texts.start}</Text>
        <Text fontSize="10px">{texts.final}</Text>
      </RangeTexts>
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
const RangeTrack = styled.div<{ progress?: number }>`
  position: relative;
  margin: 10px 0;
  width: 100%;
  height: 12px;
  background: ${({ theme }) => theme.colors.buttonBg};
  box-shadow: ${({ theme }) => theme.colors.boxShadow4};
  border-radius: 3px;
  &:after {
    display: block;
    content: "";
    position: absolute;
    width: ${({ progress }) => (progress ? `${progress}%` : 0)};
    height: calc(100% - 6px);
    top: 3px;
    left: 2.5px;
    border-radius: 2px;
    background: ${({ theme }) => theme.colors.greenText2};
  }
`;
const RangeTexts = styled.div`
  width: 100%;
  padding: 0 5px;
  display: flex;
  justify-content: space-between;
`;

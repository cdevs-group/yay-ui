import React from "react";
import styled from "styled-components";
import { ProgressWithTextProps } from "./types";
import { Text } from "../Text";

const ProgressWithText = ({ text, progress }: ProgressWithTextProps) => {
  return (
    <ProgressWrap>
      <RangeText>{text}</RangeText>
      <RangeTrackWrap>
        <RangeTrack progress={progress} />
      </RangeTrackWrap>
    </ProgressWrap>
  );
};

export default ProgressWithText;

const ProgressWrap = styled.div`
  position: relative;
  width: 100%;
  height: 26px;
  background: ${({ theme }) => theme.colors.bgOpacity};
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  border-radius: 8px;
  padding: 5px;
`;
const RangeTrackWrap = styled.div`
  border-radius: 6px;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const RangeTrack = styled.div<{ progress?: number }>`
  width: ${({ progress }) => (progress ? `${progress}%` : 0)};
  height: 100%;
  background: ${({ theme }) => theme.colors.greenGradient};
`;

const RangeText = styled(Text)`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  font-size: 11px;
  line-height: 140%;
  text-align: center;
`;

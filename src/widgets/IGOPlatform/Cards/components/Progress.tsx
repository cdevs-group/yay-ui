import { CheckIcon } from "../../../../components/Svg";
import React from "react";
import styled from "styled-components";
import { transparentize } from "polished";

const Progress = ({
  widthProgress,
  totalVolume,
  currentVolume,
}: {
  widthProgress: number;
  totalVolume: number;
  currentVolume: number;
}) => {
  return (
    <ProgressTrack>
      <ProgressBar widthProgress={widthProgress || 0}>
        <ProgressThumb>
          <CheckIcon />
        </ProgressThumb>
      </ProgressBar>
    </ProgressTrack>
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

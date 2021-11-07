import React from "react";
import styled from "styled-components";
import { Text } from "../../../../components/Text";

export interface ProgressRange2Props {
  progress: number;
}

const ProgressRange2 = ({ progress }: ProgressRange2Props) => {
  return (
    <ProgressWrap>
      <Text fontSize="13px" textAlign="center" lineHeight={1} mb="5px">
        {progress}/100
      </Text>
      <RangeTrack isError={progress === 100} progress={progress} />
    </ProgressWrap>
  );
};

export default ProgressRange2;

const ProgressWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const RangeTrack = styled.div<{ progress?: number; isError?: boolean }>`
  position: relative;
  width: 100%;
  height: 12px;
  background: ${({ theme }) => theme.colors.bgOpacity};
  box-shadow: ${({ theme }) => theme.colors.boxShadow4};
  border-radius: 10px;
  &:after {
    display: block;
    content: "";
    position: absolute;
    width: ${({ progress }) => (progress ? `calc(${progress}% - 10px)` : 0)};
    height: calc(100% - 6px);
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
    border-radius: 10px;
    background: ${({ theme, isError }) => (isError ? theme.colors.redBg : theme.colors.greenText2)};
  }
`;

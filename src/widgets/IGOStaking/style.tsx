import styled from "styled-components";
import { Text } from "../../components/Text";
import { Flex } from "../../components/Box";

export const StakeWrapper = styled.div`
  min-height: 304px;
  padding: 13px 13px 20px;
  background: ${({ theme }) => theme.colors.bgGray};
  border-radius: 15px;
  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 23px 27px;
    min-height: 334px;
  }
`;
export const UnstakeWrapper = styled(StakeWrapper)`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
`;
export const StakeTitle = styled(Text)<{ margin?: string | number }>`
  margin-bottom: ${({ margin }) => margin || "10px"};
  font-weight: normal;
  font-size: 15px;
  line-height: 19px;
  color: ${({ theme }) => theme.colors.text2};
  text-shadow: ${({ theme }) => theme.colors.textShadow};
`;
export const StakeDescription = styled(Text)`
  font-size: 13px;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.textGray};
  text-shadow: ${({ theme }) => theme.colors.textShadow};
`;
export const InputBlock = styled.div`
  margin-top: 15px;
`;
export const Balance = styled(Text)`
  margin: 10px 30px 10px 0;
  font-weight: normal;
  font-size: 13px;
  line-height: 150%;
  text-align: right;
  color: ${({ theme }) => theme.colors.textGray};
`;
export const Buttons = styled(Flex)`
  margin-top: 15px;
  align-items: center;
  & button {
    width: 100%;
    &:first-child {
      margin-right: 7px;
    }
    &:last-child {
      margin-left: 7px;
    }
  }
`;
export const ProgressTrack = styled.div`
  position: relative;
  width: 100%;
  height: 10px;
  margin-top: 27px;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors.bgOpacity4};
  box-shadow: ${({ theme }) => theme.colors.boxShadow7};
`;
export const ProgressWrap = styled.div`
  overflow: hidden;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  width: calc(100% - 6px);
  height: calc(100% - 4px);
  border-radius: 6px;
`;

export const ProgressBar = styled.div<{ progress: number }>`
  width: ${({ progress }) => `${progress}%`};
  height: 100%;
  background: ${({ theme }) => theme.colors.greenBg2};
  box-shadow: ${({ theme }) => theme.colors.boxShadow9};
  border-radius: 6px;
`;

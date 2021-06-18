import React from "react";
import styled from "styled-components";
import { Text } from "../../../components/Text";
interface Props {
  won: number;
  lost: number;
  percentageWon: number;
  result: string;
  price: string;
}

const ProgressBar = ({ won, lost, percentageWon, result, price }: Props) => {
  return (
    <div>
      <ProgressWrap>
        <Progress>
          <Step color="#47DA3B" width={(won * 100) / (won + lost)} />
          <Step color="#FF6161" width={(lost * 100) / (won + lost)} />
        </Progress>
      </ProgressWrap>
      <Counter>
        <Text fontSize="21px">
          {won}/{won + lost}
        </Text>
        <TextProfit textAlign="right" fontSize="21px">
          {result}
        </TextProfit>
        <TextPercents>{percentageWon}%</TextPercents>
        <Text textAlign="right">{price}</Text>
      </Counter>
    </div>
  );
};

export default ProgressBar;

const ProgressWrap = styled.div`
  padding: 6px;
  background: ${({ theme }) => theme.colors.buttonBg};
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  border-radius: 5px;
`;
const Progress = styled.div`
  display: flex;
  width: 100%;
  border-radius: 3px;
  overflow: hidden;
`;
const Step = styled.div<{ color: string; width: number }>`
  height: 9px;
  width: ${({ width }) => `${width}%`};
  background: ${({ color }) => color};
  transition: none.3s;
`;
const Counter = styled.div`
  margin-top: 15px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5px;
`;
const TextProfit = styled(Text)`
  color: ${({ theme }) => theme.colors.green};
`;
const TextPercents = styled(Text)`
  color: ${({ theme }) => theme.colors.textGray2};
`;

import React from "react";
import styled from "styled-components";
import Text from "../../../components/Text/Text";
import { ITextsStatistic } from "../types";

interface Props {
  averageReturn: string;
  averageReturnPrice: string;
  colorAverage: string;
  bestRound: string;
  hasBestRound: boolean;
  multiplierBestRound: string;
  bnbBestRound: string;
  bestRoundPrice: string;
  averagePosition: string;
  averagePositionPrice: string;
  texts?: ITextsStatistic;
}

const Statistic = ({
  averageReturn,
  averageReturnPrice,
  colorAverage,
  bestRound,
  hasBestRound,
  multiplierBestRound,
  bnbBestRound,
  bestRoundPrice,
  averagePosition,
  averagePositionPrice,
  texts,
}: Props) => {
  return (
    <Wrap>
      <Row>
        <Text>{texts?.average || "Average"}</Text>
        <Best fontSize="13px" textAlign="right" color={colorAverage}>
          {averageReturn}
        </Best>
        <Text>{texts?.return || "return / round"}</Text>
        <Text textAlign="right">{averageReturnPrice}</Text>
      </Row>
      {hasBestRound && (
        <Row>
          <Text>{texts?.best || "Best round"}: </Text>
          <Best fontSize="13px" textAlign="right" color="#4BE43E">
            <Text color="#A3A3A3" fontSize="13px">
              {multiplierBestRound} &nbsp;
            </Text>{" "}
            {bnbBestRound}
          </Best>
          <Text>{bestRound}</Text>
          <Text textAlign="right">{bestRoundPrice}</Text>
        </Row>
      )}
      <Row>
        <Text>{texts?.averagePosition || "Average position"}</Text>
        <Best fontSize="13px" textAlign="right" color="white">
          {averagePosition}
        </Best>
        <Text>{texts?.entered || "entered / round"}</Text>
        <Text textAlign="right">{averagePositionPrice}</Text>
      </Row>
      {/* 
      {best.map((item, i) => (
        <Row key={i}>
          <Text>{nameRow(i).first}</Text>

          <Best fontSize="13px" textAlign="right" color={i !== 2 ? "#4BE43E" : "white"}>
            {i === 1 ? (
              <Text color="#A3A3A3" fontSize="13px">
                ({bestNumber?.kef}X)
              </Text>
            ) : null}
            +{item.average}BNB
          </Best>

          <Text>{nameRow(i).second}</Text>
          <Text textAlign="right">{item.round}</Text>
        </Row>
      ))} */}
    </Wrap>
  );
};

export default Statistic;

const Wrap = styled.div`
  margin-top: 20px;
`;
const Row = styled.div`
  padding: 17px 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5px;
`;
const Best = styled(Text)`
  display: flex;
  justify-content: flex-end;
`;

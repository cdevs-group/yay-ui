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
        <Text>{texts?.average || "Average return / round"}</Text>
        <div>
          <Best fontSize="13px" textAlign="right" color={colorAverage}>
            {averageReturn}
          </Best>
          <Text textAlign="right">{averageReturnPrice}</Text>{" "}
        </div>
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
        <Text>{texts?.averagePosition || "Average position entered / round"}</Text>
        <div>
          <Best fontSize="13px" textAlign="right" color="white">
            {averagePosition}
          </Best>
          <Text textAlign="right">{averagePositionPrice}</Text>
        </div>
      </Row>
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

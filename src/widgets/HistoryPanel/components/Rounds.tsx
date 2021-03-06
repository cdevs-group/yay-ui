import React from "react";
import styled from "styled-components";
import Text from "../../../components/Text/Text";
import WIN from "./img/win.png";
import LOSE from "./img/lose.png";

interface Props {
  type: string;
  rounds: string | number;
  roundsInPercents: string;
  roundValue: string;
  roundPrice: String;
  texts?: string;
}

const Rounds = ({ texts, type, rounds, roundsInPercents, roundValue, roundPrice }: Props) => {
  const values = () => {
    switch (type) {
      case "won":
        return {
          src: WIN,
          colorRound: "#47DA3B",
          colorValue: "white",
        };
      case "lost":
        return {
          src: LOSE,
          colorRound: "#FF6161",
          colorValue: "white",
        };
      default:
        return {
          src: LOSE,
          colorRound: "white",
          colorValue: "#A3A3A3",
        };
    }
  };

  return (
    <Wrap>
      <Row>
        <Column>
          <img style={{ float: "left" }} src={values().src} alt="img" />
          <div>
            <Round color={values().colorValue}>
              {rounds} {texts || "rounds"}
            </Round>
            <Value fontSize="13px" color={values().colorRound}>
              {roundsInPercents}
            </Value>
          </div>
        </Column>
        <div>
          <Round color={values().colorRound} textAlign="right">
            {roundValue}
          </Round>
          <Value fontSize="13px" textAlign="right" color={values().colorValue}>
            {roundPrice}
          </Value>
        </div>
      </Row>
    </Wrap>
  );
};

export default Rounds;

const Wrap = styled.div`
  background: ${({ theme }) => theme.colors.cardBg};
  padding-bottom: 30px;
  position: relative;
  z-index: 1;
`;

const Row = styled.div`
  padding: 17px 0;
  display: flex;
  position: relative;
  z-index: 2;
  justify-content: space-between;
`;

const Round = styled(Text)<{ color: string }>`
  margin-bottom: 5px;
  color: ${({ color }) => color};
`;

const Value = styled(Text)<{ color?: string }>`
  color: ${({ color }) => color || "white"};
`;

const Column = styled.div`
  display: flex;
  & img {
    margin-right: 10px;
  }
`;

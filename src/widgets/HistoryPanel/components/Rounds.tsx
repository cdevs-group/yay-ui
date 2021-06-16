import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Text from "../../../components/Text/Text";
import { bestProps } from "../types";
import WIN from "./img/win.png";
import LOSE from "./img/lose.png";

const Rounds = ({ best }: bestProps) => {
  const [count, setCount] = useState({
    winCount: 0,
    totalProfit: 0,
    loseCount: 0,
    loseProfit: 0,
    winProfit: 0,
    percentWin: 0,
    persentlose: 0,
  });

  const winCount = () => {
    let winCount = 0;
    let winProfit = 0;
    let totalProfit = 0;
    let loseCount = 0;
    let loseProfit = 0;
    let percentWin = 0;
    let persentlose = 0;
    best.map((item) => {
      if (item.win) {
        ++winCount;
        winProfit += item.average;
      } else {
        ++loseCount;
        loseProfit += item.average;
      }
    });
    totalProfit = winProfit - loseProfit;
    percentWin = +((winCount / best.length) * 100).toFixed(2);
    persentlose = 100 - percentWin;

    return { winCount, totalProfit, loseCount, loseProfit, winProfit, persentlose, percentWin };
  };

  useEffect(() => {
    setCount(winCount());
  }, [best]);

  return (
    <Wrap>
      {best.map((item, i) => (
        <Row key={i}>
          <Column>
            <img style={{ float: "left" }} src={i === 0 ? WIN : LOSE} alt="some img" />
            <div>
              <Round i={i}>{i === 0 ? count.winCount : i === 1 ? count.loseCount : best.length} Rounds</Round>
              <Value i={i} fontSize="13px">
                {i === 0 ? `${count.percentWin} %` : i === 1 ? `${count.persentlose} %` : "Total"}
              </Value>
            </div>
          </Column>
          <div>
            <Round textAlign="right" i={i}>
              ${i === 0 ? count.winProfit : i === 1 ? count.loseProfit : count.totalProfit}
            </Round>
            <Value i={i} fontSize="13px" textAlign="right">
              $ 0.56
            </Value>
          </div>
        </Row>
      ))}
    </Wrap>
  );
};

export default Rounds;

const Wrap = styled.div`
  background: ${({ theme }) => theme.colors.cardBg};
  padding-bottom: 30px;
  position: relative;
  z-index: 1;
  &::before {
    position: absolute;
    display: block;
    content: "";
    /* width: 120%; */
    width: 408px;
    left: -20px;
    top: 0;
    z-index: 0;
    height: 100%;
    background: ${({ theme }) => theme.colors.cardBg};
  }
`;
const Row = styled.div`
  padding: 17px 0;
  display: flex;
  position: relative;
  z-index: 2;
  justify-content: space-between;
`;
const Round = styled(Text)<{ i: number }>`
  margin-bottom: 5px;
  color: ${({ i }) => (i === 0 ? "#47DA3B" : i === 1 ? "#FF6161" : "white")};
`;
const Value = styled(Text)<{ i: number }>`
  color: ${({ i }) => (i === 2 ? "#A3A3A3" : "white")};
`;
const Column = styled.div`
  display: flex;
  & img {
    margin-right: 10px;
  }
`;

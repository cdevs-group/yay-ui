import React from "react";
import styled from "styled-components";
import { Button } from "../../components/Button";
import { ArrowIcon } from "../../components/Svg";
import ProgressBar from "./components/ProgressBar";
import Rounds from "./components/Rounds";
import Statistic from "./components/Statistic";

const data = {
  bestNumber: { number: 2653, kef: 1.55 },
  best: [
    { win: true, average: 0.12, round: 0.1231 },
    { win: false, average: 0.12, round: 0.1231 },
    { win: false, average: 0.12, round: 0.1231 },
  ],
};
interface Props {
  children: React.ReactNode;
}

const PnlHistoryPanel: React.FC<Props> = ({ children }) => <Wrap>{children}</Wrap>;

export default PnlHistoryPanel;

const Wrap = styled.div`
  padding: 0 20px 20px;
  /* height: 1000px; */
  background: ${({ theme }) => theme.colors.panel};
`;

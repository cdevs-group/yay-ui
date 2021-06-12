import React from 'react';
import styled from 'styled-components';
import { Button } from '../../components/Button';
import { ArrowIcon } from '../../components/Svg';
import ProgressBar from './components/ProgressBar';
import Rounds from './components/Rounds';
import Statistic from './components/Statistic';

const data = {
  bestNumber: { number: 2653, kef: 1.55 },
  best: [
    { win: true, average: 0.12, round: 0.1231 },
    { win: false, average: 0.12, round: 0.1231 },
    { win: false, average: 0.12, round: 0.1231 },
  ],
};

const PnlHistoryPanel = () => (
  <Wrap>
    <ProgressBar best={data.best} />
    <Statistic bestNumber={data.bestNumber} best={data.best} />
    <Rounds best={data.best} />
    <ButtonBlock width="100%" variant="green" scale="md">
      View Reclaimed & Wonv
      <ArrowIcon fill="rgba(0,0,0,0)" />
    </ButtonBlock>
  </Wrap>
);

export default PnlHistoryPanel;

const ButtonBlock = styled(Button)`
  position: relative;
  top: -30px;
  z-index: 2;
`;
const Wrap = styled.div`
  padding: 0 20px 20px;
`;

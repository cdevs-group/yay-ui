import React from 'react';
import styled from 'styled-components';
import { Button } from '../../components/Button';
import { ArrowIcon } from '../../components/Svg';
import ProgressBar from './components/ProgressBar';
import Rounds from './components/Rounds';
import Statistic from './components/Statistic';

const progress = [{status:true,profit:0.12},{status:false,profit:1.24},{status:false,profit:12.99}];
const best = [{win:true,average:0.12,round:.1231},{win:true,average:0.12,round:.1231},{win:true,average:0.12,round:.1231}]

const PnlHistoryPanel: React.FC = () => (
   <>
     <ProgressBar progress={progress}/>
    <Statistic best={best}/>
    <Rounds best={best}/>
    <ButtonBlock width='100%' variant='green' scale='md'>View Reclaimed & Wonv<ArrowIcon fill='rgba(0,0,0,0)'/></ButtonBlock>
   </>
);

export default PnlHistoryPanel;

const ButtonBlock = styled(Button)`
  position: relative;
  top: -30px;
`;

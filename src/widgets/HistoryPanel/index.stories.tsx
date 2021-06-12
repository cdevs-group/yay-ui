import React, { useState } from 'react';
import HistoryPanel from './HistoryPanel';
import PnlHistoryPanel from './PnlHistoryPanel';

export default {
  title: 'Components/HistoryPanel',
  component: [HistoryPanel,PnlHistoryPanel],
};

export const Panel: React.FC = () => {
  const [open, setOpen] = useState(true)

  return <HistoryPanel setOpen={setOpen} open={open} />;
};
export const PnlPanel: React.FC = () => {
  const [open, setOpen] = useState(true)

  return <HistoryPanel setOpen={setOpen} open={open} ><PnlHistoryPanel open={open}/></HistoryPanel>;
};

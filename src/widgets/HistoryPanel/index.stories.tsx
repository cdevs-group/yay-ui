import React, { useState } from 'react';
import HistoryPanel from './HistoryPanel';

export default {
  title: 'Components/HistoryPanel',
  component: HistoryPanel,
};

export const Panel: React.FC = () => {
  const [open, setOpen] = useState(true)

  return <HistoryPanel setOpen={setOpen} open={open} />;
};

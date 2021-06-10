import React from 'react';
import { Timer } from '.';

export default {
  title: 'Components/Timer',
  component: Timer,
};

export const TimerBlock: React.FC = () => {
  return (
    <Timer time={180} color="green" />      
  );
};
